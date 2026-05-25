# Prototype Component Inventory

Populate this during Stage 1 when the source is a Prototype Folder.

The folder is confirmed reference material, but its code is not production implementation. Use this inventory to decide what belongs in Storybook before composing product screens.

## Source Summary

- Packaged files: 34
- Component candidates detected: 0

## Candidate Table

| Component | Responsibility | Source files | Variants | States | Token roles | Storybook stories | Decision |
|-----------|----------------|--------------|----------|--------|-------------|-------------------|----------|
| AppShell | Mobile viewport shell, safe-area bottom padding, centered max width | `talk-ui/index.html`, `homepage.css` | Light, dark | Scrolled page | `--comp-app-*` | Default / AllVariants / AllStates | build |
| TopAppBar | Logo/avatar plus compact action buttons | `talk-ui/index.html`, `homepage.css`, `homepage.js` | Default, with actions | Action hover/focus, theme toggle | `--comp-app-*`, `--comp-icon-button-*`, `--comp-avatar-*` | Default / AllVariants / AllStates | build |
| SentimentCard | Market sentiment summary with numeric columns and CTA pill | `homepage.js`, `homepage.css`, `i18n/zh-TW.json` | Default, compact metrics | CTA hover/focus | `--comp-card-*`, `--comp-sentiment-*`, `--comp-button-*` | Default / AllVariants / AllStates | build |
| ShortcutRail | Horizontal tool shortcuts | `homepage.js`, `homepage.css`, `i18n/zh-TW.json` | Four-plus shortcuts | Active/focus | `--comp-shortcut-*`, `--comp-card-*`, `--comp-icon-*` | Default / AllVariants / AllStates | build |
| HeroCarousel | Scroll-snap feature carousel with image-backed cards and dot indicator | `homepage.js`, `homepage.css`, `img-bg-*.jpg` | Brand card, light card | Selected dot, primary card click | `--comp-hero-*`, `--comp-button-*` | Default / AllVariants / AllStates | build |
| SectionHeader | Eyebrow, heading, optional metadata/action | `homepage.js`, `homepage.css` | With/without action | Link focus | `--comp-section-*` | Default / AllVariants / AllStates | build |
| MacroSection | Two-column market data cards under a section header | `homepage.js`, `homepage.css`, `i18n/zh-TW.json` | Brand, cool, neutral, warm | Static data | `--comp-macro-*`, `--comp-card-*` | Default / AllVariants / AllStates | build |
| TradeRail | Horizontal buy/sell recommendation cards | `homepage.js`, `homepage.css` | Bullish, bearish | Static data | `--comp-trade-*`, `--comp-card-*`, `--comp-bullish/bearish` | Default / AllVariants / AllStates | build |
| FeedList | Article list rows with thumbnail, source, title, metadata | `homepage.js`, `homepage.css`, `img-bg-*.jpg` | Feed, insight list | Row click/focus | `--comp-feed-*`, `--comp-card-*` | Default / AllVariants / AllStates | build |
| ArticleSheet | Bottom sheet article preview opened from primary carousel card | `homepage.js`, `homepage.css` | Closed, open | Scrim, close, CTA | `--comp-sheet-*`, `--comp-button-*` | Default / AllVariants / AllStates | build |
| BottomNav | Fixed safe-area-aware primary navigation | `homepage.js`, `homepage.css`, `i18n/zh-TW.json` | Four tabs | Active, focus | `--comp-bottom-nav-*` | Default / AllVariants / AllStates | reuse baseline/build |

## Candidate Files

- No component-specific files were detected by heuristic. Inspect entry HTML and stylesheets manually.
- `talk-ui/index.html` is only the entry host; `homepage.js` builds the concrete UI.
- `homepage.css` defines the prototype anatomy and density and was used as reference only.
- Production implementation uses Storybook components under `src/components/`; prototype HTML/CSS was not copied into routes.
