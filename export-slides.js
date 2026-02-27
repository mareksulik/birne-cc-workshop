#!/usr/bin/env node
/**
 * Screenshot each Reveal.js slide using Puppeteer.
 * Outputs PNG files to exports/slides/slide-001.png etc.
 *
 * Usage: node export-slides.js [baseUrl]
 *   baseUrl defaults to http://localhost:3000
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = process.argv[2] || 'http://localhost:3000';
const OUT_DIR = path.join(__dirname, 'exports', 'slides');

(async () => {
  // Ensure output directory exists
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  console.log(`Opening ${BASE_URL} ...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for Reveal.js to initialise
  await page.waitForFunction(() => typeof Reveal !== 'undefined' && Reveal.isReady(), {
    timeout: 15000,
  });

  // Get total number of horizontal slides (no vertical sections in this deck)
  const totalSlides = await page.evaluate(() => {
    return Reveal.getTotalSlides();
  });

  console.log(`Found ${totalSlides} slides`);

  for (let i = 0; i < totalSlides; i++) {
    // Navigate to slide by index
    await page.evaluate((idx) => {
      Reveal.slide(idx, 0, 0);
    }, i);

    // Small wait for transition to finish
    await new Promise((r) => setTimeout(r, 400));

    // Expand all fragments on this slide so everything is visible
    await page.evaluate(() => {
      const fragments = Reveal.getCurrentSlide().querySelectorAll('.fragment');
      fragments.forEach((f) => {
        f.classList.add('visible', 'current-fragment');
        f.classList.remove('fade-out'); // ensure fade-out fragments stay visible
      });
    });

    // Small wait for CSS transitions on fragments
    await new Promise((r) => setTimeout(r, 200));

    const num = String(i + 1).padStart(3, '0');
    const filePath = path.join(OUT_DIR, `slide-${num}.png`);

    await page.screenshot({ path: filePath, type: 'png' });
    console.log(`  Saved slide-${num}.png`);
  }

  await browser.close();
  console.log(`\nDone! ${totalSlides} slides saved to ${OUT_DIR}`);
})();
