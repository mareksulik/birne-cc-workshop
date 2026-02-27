# Claude Code pre marketérov - Workshop prezentácia

## Projekt
Reveal.js prezentácia pre 4-hodinový workshop o Claude Code, organizovaný Birne (slovenská marketingová agentúra).

## Technológia
- **Reveal.js 5.x** - lineárna prezentácia s vertikálnymi sekciami pre 4 bloky
- **Birne Design System** - custom CSS téma (`css/birne-theme.css`)
- **Fonty z birne.sk**: Conforto (headings), General Sans (body), JetBrains Mono (code)

## Štruktúra
```
index.html              # Celá prezentácia (58 slidov)
css/birne-theme.css     # Birne Reveal.js téma
assets/images/          # SVG ikony a placeholdery
```

## Spustenie
```bash
npm start   # spustí serve na localhost
```

## Konvencie
- Slovenčina pre všetok obsah
- Speaker notes v `<aside class="notes">`
- Slide typy cez CSS triedy: section-title, content, code-example, two-column, image-placeholder, checklist, quote, transition
- Fragmenty pre postupné odkrývanie (`class="fragment"`)
