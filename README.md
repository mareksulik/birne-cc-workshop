# Claude Code pre marketérov

Workshop prezentácia pre 4-hodinový hands-on workshop o Claude Code, organizovaný [Birne](https://birne.sk).

## O workshope

Workshop učí marketérov pracovať s Claude Code — AI agentom v terminále. Účastníci sa naučia:

- Čo je vibe coding a prečo je to relevantné pre marketérov
- Inštalácia a nastavenie Claude Code + Ghostty terminál
- Práca so súbormi, promptovanie, kontextové okno
- MCP servery, GitHub, Git základy
- Reálne marketingové use-cases (LinkedIn posty, analýza kampaní, landing pages)

## Spustenie

```bash
npm install
npm start
```

Prezentácia beží na `http://localhost:3000`.

## Štruktúra

```
index.html              # Celá prezentácia (58 slidov)
css/birne-theme.css     # Custom Birne Reveal.js téma
assets/images/          # Obrázky, screenshoty, SVG ikony
build-pptx.py           # Export do PowerPointu
export-slides.js        # Export slidov cez Puppeteer
```

## Technológie

- **[Reveal.js 5.x](https://revealjs.com)** — prezentačný framework
- **Birne Design System** — custom CSS téma s farbami a fontami z birne.sk
- **Fonty**: Conforto (nadpisy), General Sans (text), JetBrains Mono (kód)

## Navigácia v prezentácii

- `→` / `←` — ďalší / predchádzajúci slide
- `↓` / `↑` — vertikálne sekcie (bloky workshopu)
- `S` — speaker notes
- `O` — prehľad všetkých slidov
- `F` — fullscreen

## Licencia

Interný materiál Birne Akadémia.
