# Prototype Token Audit

Populate this during Stage 1 when the source is a Prototype Folder.

## Token Sources

- `design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.css`
- `design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.json`

## Audit Table

| Observed value / variable | Current source | Proposed ref token | Proposed sys token | Proposed comp token | Evidence |
|---------------------------|----------------|--------------------|--------------------|---------------------|----------|
| Mobile canvas white / light page background | `tokens/design-tokens.css`, `homepage.css` | `--ref-color-white` | `--sys-color-background` | `--comp-app-bg` | Whole home screen canvas |
| Darkest brand hero and macro surface | `homepage.css` | `--ref-color-blue-900` | `--sys-color-surface-brand` | `--comp-macro-brand-bg` | Market sentiment/macro emphasis cards |
| Bright blue CTA/active state | `tokens/design-tokens.css`, `homepage.css` | `--ref-color-blue-600` | `--sys-color-primary` | `--comp-button-bg`, `--comp-bottom-nav-active-fg` | Search/action icons, active bottom nav, dots |
| Lime CTA pill | `homepage.css` | `--ref-color-lime-300` | `--sys-color-secondary` | `--comp-button-secondary-bg`, `--comp-sentiment-summary-bg` | Sentiment recommendation pill and carousel CTA |
| Body text on light surface | `homepage.css` | `--ref-color-neutral-900` | `--sys-color-on-surface` | `--comp-card-fg`, `--comp-section-title-fg` | Card titles and metric values |
| Metadata / secondary text | `homepage.css` | `--ref-color-neutral-700` | `--sys-color-on-surface-muted` | `--comp-section-meta-fg`, `--comp-label-muted-fg` | Dates, subtitles, source labels |
| Bullish price movement | Prototype semantic chart colors | `--ref-color-teal-300` | `--sys-color-bullish` | Component semantic slots | Price-up indicators; never mapped to primary |
| Bearish price movement | Prototype semantic chart colors | `--ref-color-red-500` | `--sys-color-bearish` | Component semantic slots | Price-down indicators; never mapped to error unless actual error |
| 20px page gutter | `homepage.css` | `--ref-space-20` | `--sys-space-page-inline` | `--comp-app-padding-inline` | Left/right mobile content gutter |
| 48px/56px controls | `homepage.css` | `--ref-size-48`, `--ref-size-56` | `--sys-size-control-md/lg` | `--comp-button-height`, `--comp-input-height` | Icon buttons, pills, inputs |
| 80px fixed bottom navigation | `homepage.css` | `--ref-size-80` | `--sys-size-bottom-nav` | `--comp-bottom-nav-height`, `--comp-app-bottom-pad` | Safe-area-aware BottomNav |
| 320px hero cards | `homepage.css` | `--ref-size-320` | `--sys-size-hero-card` | `--comp-hero-height` | Feature carousel block |
| Rounded sheet/card radii | `homepage.css` | `--ref-radius-24`, `--ref-radius-32` | `--sys-radius-lg/xl` | `--comp-card-radius`, `--comp-hero-radius` | Sentiment card, shortcuts, carousel |
| Raised card shadows | `homepage.css` | `--ref-shadow-1/2/3` | `--sys-elevation-raised/card/overlay` | `--comp-card-shadow`, `--comp-sheet-shadow` | Cards and bottom sheet |
| Motion durations | `tokens/design-tokens.css` | `--ref-duration-*` | `--sys-motion-duration-*` | `--comp-motion-*` | Hover, sheet, state transitions |

## Required Checks

- Identify CSS custom properties and theme files.
- Identify repeated color, spacing, radius, typography, elevation, and motion values.
- Map values to `ref → sys → comp`; component slots must not point directly to ref tokens.
- Note unsupported AI-style patterns to avoid: decorative gradients, outline-card overuse, glassmorphism, and generic card-heavy layouts not present in the prototype.
- Implementation adds any missing values first at `ref -> sys -> comp`; component/page CSS consumes only `--comp-*` variables.
