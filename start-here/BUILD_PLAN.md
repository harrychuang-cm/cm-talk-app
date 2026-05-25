# Build Plan — design-spec

Use this file as the execution plan before writing code. `CLAUDE.md` is the design source of truth; this file turns it into a build sequence.

## 1. Product Intent

- Build a production-ready frontend that recreates the reference UI, not a generic component demo.
- Treat `design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json` as the reference map and `design-reference/source-folder/files/` as confirmed prototype evidence.
- Prototype code is reference-only. Extract product behavior, visual intent, reusable component anatomy, states, and token roles; rebuild production UI in the target stack.
- Concrete prototype pages must be reconstructed by composing Storybook components, not by copying page-level HTML/CSS.
- Implement reusable UI in Storybook first, then compose product screens from those documented components.

## 2. Reference Screens

| ID | Reference | Suggested route | Suggested screen component |
|----|-----------|-----------------|----------------------------|
| prototype-1 | `design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html` | `/` | `DesignSpecHomeScreen` |

If the suggested route/component names do not match the user's product intent, rename them early and keep `product/SCREEN_MANIFEST.json` conceptually aligned.

## 3. Implementation Order

1. **Bootstrap**: install dependencies, create app shell, wire routing only after screens are identified.
2. **Product requirements**: read `product/PRD.md`, `product/PRODUCT_SPEC.json`, and `product/FEATURE_MANIFEST.json`; if a real PRD is provided, run the `/prd` workflow before implementing features.
3. **Product workspace + app targets**: read `mobile/MOBILE_APP_ROADMAP.md`; keep `mobile/packages/shared` aligned with `product/SCREEN_MANIFEST.json`, `product/PRODUCT_SPEC.json`, and `product/FEATURE_MANIFEST.json`; treat `mobile/apps/mobile-webview` as the Phase 1 app and `mobile/apps/mobile-react-native` as the Phase 2 native scaffold.
4. **Prototype folder reading**: populate `design/prototype-component-inventory.md`, `design/prototype-token-audit.md`, and `product/PROTOTYPE_SCREEN_MAP.md` from the manifest, docs, HTML/CSS, token files, and component examples.
5. **Token contract**: create `tokens-ref.css`, `tokens-sys.css`, `tokens-comp.css`, and barrel import `tokens.css`.
6. **Storybook + MCP**: initialize Storybook, install `@storybook/addon-mcp`, run Storybook, connect `http://localhost:6006/mcp` with `mcp-add --scope project` from another terminal, and confirm the agent can call Storybook docs/story/test tools.
7. **Component Reuse Gate**: for every requested block, compare against Storybook/source candidates by intent, anatomy, props/variants, states, and story coverage before deciding reuse / extend / new.
8. **Storybook foundations**: add Color, Typography, Spacing/layout, Shape/radius, Elevation/shadow, and Iconography guides. Author every foundation guide as a full-screen `.tsx` documentation page plus a minimal CSF `.stories.tsx` route entry. Do not use `.jsx`, `.mdx`, or autodocs for foundations. Each guide must read like a design-system website page: explain design intent, token contract, role mapping, usage timing, accessibility expectations, implementation examples, and do/don't guidance. Use an editorial documentation layout, not a plain card grid: a full-width hero, sticky in-page section rail, dense token tables, visual specimens, implementation notes, and paired do/don't examples. Keep cards only for individual specimens or examples. Foundation `.stories.tsx` files are Storybook navigation shells only: import `Meta`/`StoryObj`, set `title: 'Foundations/<Name>'`, use `parameters: { layout: 'fullscreen' }`, render the guide page, and do not set `tags: ['autodocs']`. If a project enables autodocs globally, explicitly opt these stories out with `tags: ['!autodocs']`. Use these fixed documentation page templates:
- **Color**: semantic color model, surface ladder, role swatches with resolved values, interaction/state colors, finance semantics, accessibility contrast notes, implementation snippets, do/don't.
- **Typography**: type scale specimens, role-to-UI mapping, hierarchy rules for dense screens, truncation/overflow rules, implementation snippets, do/don't.
- **Spacing**: spacing scale table, density modes, page/grid rhythm, component internal vs external spacing rules, composition specimens, do/don't.
- **Shape**: radius ladder, control/card/container mapping, touch target geometry, nested-surface rules, component examples, do/don't.
- **Elevation**: surface depth model, shadow/elevation scale, overlay/popover/dialog rules, stacking examples, motion/state notes, do/don't.
- **Iconography**: icon source + shared wrapper contract, size/stroke matrix, semantic color mapping, decorative vs informative accessibility rules, examples, do/don't. Treat `Icon` as a baseline shared component with a reusable wrapper and document it in `Foundations/Iconography`.
9. **Baseline components** (target platform: **mobile**): Button, Input, Card, Modal/Dialog, Label, Alert, Badge/Chip, Avatar, BottomNav, Icon, Tab, Dropdown.
10. **App components**: derive from `design/prototype-component-inventory.md`; every accepted component must have Storybook stories before screen composition.
11. **Screens**: rebuild concrete prototype pages from `product/PROTOTYPE_SCREEN_MAP.md`, using only Storybook-documented components.
12. **Mobile sync**: point the WebView app at the validated web app URL; promote selected screens to React Native only when native UX or device capabilities justify it.
13. **Verification**: run app build, Storybook build, token audit, responsive smoke checks, reference comparison, product manifest sync checks, mobile app start checks, MCP story tests, and anti-demo audit.

## 3b. Anti-Demo Visual Rules

- Do not add hero sections, marketing copy, decorative gradients, glassmorphism, glow effects, oversized empty cards, or illustration panels unless the reference shows them.
- Do not turn every section into a floating card. Only use card/sheet treatment where the reference indicates containment through background, border, elevation, or spacing.
- Do not increase whitespace, corner radius, shadow strength, saturation, or icon density to make the UI feel more "designed". Match the screenshots.
- Do not use lorem ipsum, generic SaaS slogans, or perfectly even placeholder rows. Content should have realistic lengths, numbers, dates, labels, and truncation behavior.
- Do not replace an operational/product screen with a landing page or generic dashboard template. The product UI from the reference is the first screen.

## 4. Component Strategy

- Shared components first: use the baseline components and any observed standard components from CLAUDE.md.
- Domain-specific components: none detected; create only if Phase A identifies missing visual blocks.
- A component is complete only when it has typed props, accessible states, realistic example data, and co-located stories.
- Before using or inventing props, query Storybook MCP documentation tools; if the prop is not documented, either add it intentionally to the component contract and stories or ask the user.
- Before creating a new component because a prompt suggested a new name, score likely existing candidates. Reuse at 8-10, extend/wrap at 6-7, and create new only at 0-5 with an explanation.

## 5. Data & Interaction Strategy

- Create realistic mock data under `src/data/` or `src/mocks/`; do not use lorem ipsum unless the reference itself contains placeholder copy.
- Use `product/PRD.md`, `product/PRODUCT_SPEC.json`, and `product/FEATURE_MANIFEST.json` for product behavior, business rules, acceptance criteria, and data needs. Screenshots provide visual evidence; they do not silently create product requirements.
- Every visible interactive control needs hover, focus-visible, pressed/active, disabled when applicable, and keyboard semantics.
- Every image/logo/avatar path needs an error fallback that still uses the token system.
- Empty, loading, and error states should be geometry-matched to the final layout, not afterthoughts.

## 6. Stop Conditions

Proceed autonomously unless one of these occurs:

- A referenced image or required asset is missing.
- Two materially different product interpretations are equally plausible.
- A dependency install/build failure blocks verification.
- Extracted tokens conflict with screenshots in a way that changes the visual direction.

## 7. Done Means

- `npm run build` passes.
- `product/PRODUCT_SPEC.json`, `product/FEATURE_MANIFEST.json`, `product/SCREEN_MANIFEST.json`, and `mobile/packages/shared/src/*Manifest.ts` are conceptually aligned.
- Storybook starts or builds with the same tokens/theme as the app, and `@storybook/addon-mcp` exposes `/mcp` for the agent.
- The project-level MCP connection is configured with `npx mcp-add --type http --url "http://localhost:6006/mcp" --scope project` (adjusted for the active Storybook port), and the agent has used Storybook MCP docs/story/test tools during UI work.
- Foundations cover Color, Typography, Spacing/layout, Shape/radius, Elevation/shadow, and Iconography; each page is authored in TSX, uses an editorial documentation layout, follows the fixed per-guide section template, and explains intent, token contract, usage timing, accessibility, implementation examples, and do/don't guidance.
- Every component requested by a clip/collage/prompt passed the Component Reuse Gate; duplicates were not created solely because names differed.
- Every reusable component has `tags: ['autodocs']` stories.
- Product screens preserve the Prototype Folder reference block-by-block and compose only Storybook-documented components.
- Anti-demo audit passes: no unreferenced decorative gradients, glassmorphism, fake hero sections, over-carded layouts, inflated whitespace, or generic placeholder content.
- No hardcoded visual values remain in product/component code except documented third-party library adapters.
