# Implementation Tasks

Update this checklist as work progresses. Do not mark an item done until it is verified.

## Phase 0 — Bootstrap

- [x] Confirm target framework and package manager
- [x] Install app dependencies
- [x] Install **Product Overview** dependencies: `npm install @xyflow/react @dagrejs/dagre react-markdown remark-gfm` (required by the Storybook `Product / Overview` page that toggles between PRD and the auto-generated UIUX Flow)
- [x] Initialize Storybook
- [x] Install Storybook MCP addon: `npx storybook add @storybook/addon-mcp`
- [x] Run Storybook in one terminal and connect MCP from another: `npx mcp-add --type http --url "http://localhost:6006/mcp" --scope project`
- [ ] Confirm the agent can call `list-all-documentation` from the Storybook MCP toolset
- [x] Add routing/screen folder structure
- [x] Add `src/data/` or `src/mocks/` for realistic mock content
- [x] Scaffold `src/stories/product/ProductOverview.{tsx,stories.tsx}` + `PrdView.tsx` + `UiUxFlowView.tsx` per the Storybook prompt (toggle between PRD and UIUX Flow; React Flow auto-laid out with dagre)

## Phase 0a — Product Requirements

- [x] Review `product/PRD.md`; replace placeholder content if a real PRD exists
- [ ] Run `/prd product/PRD.md` after adding or replacing product requirements
- [ ] Update or confirm `product/PRODUCT_SPEC.json`
- [ ] Update or confirm `product/FEATURE_MANIFEST.json`
- [ ] Add feature specs under `product/features/` for major product capabilities
- [ ] Add `*.md` flow specs under `product/flows/` only for complex multi-step interactions
- [ ] Confirm `/prd` regenerated `product/flows/uiux-flow.json` (validates against `product/templates/UIUX_FLOW.schema.json`)
- [x] Open Storybook `Product / Overview` and verify both **PRD 文件** and **UIUX Flow** tabs render the latest content
- [ ] Confirm `product/FEATURE_MANIFEST.json` maps features to `product/SCREEN_MANIFEST.json` routes/screens
- [ ] Sync `mobile/packages/shared/src/productRequirements.ts` and `mobile/packages/shared/src/featureManifest.ts`

## Phase 0b — Product Workspace + App Targets

- [x] Treat this zip as a from-zero product workspace, not a patch for an existing repo
- [x] Keep the generated web app as the product source of truth for visual validation
- [x] Review `mobile/MOBILE_APP_ROADMAP.md` and `mobile/MOBILE_BUILD_MATRIX.json`
- [x] Keep `mobile/packages/shared/src/appManifest.ts` aligned with `product/SCREEN_MANIFEST.json`
- [x] Phase 1 app: run or configure `mobile/apps/mobile-webview` against the generated web app URL
- [ ] Phase 2 app: use `mobile/apps/mobile-react-native` only for screens promoted to true native
- [ ] Phase 3 shared package: keep route IDs, product metadata, token snapshots, API contracts, and platform-neutral models here

## Phase 0c — Prototype Folder Analysis

- [x] Read `design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json`
- [x] Inspect `design-reference/source-folder/README.md` and follow the reference-only policy
- [x] Inspect design-system docs, token files, stylesheets, HTML entry pages, component examples, and product docs listed in the manifest
- [x] Fill `design/prototype-component-inventory.md`
- [x] Fill `design/prototype-token-audit.md`
- [x] Fill `product/PROTOTYPE_SCREEN_MAP.md`
- [x] Confirm prototype code will not be copied directly into production routes/components


## Phase 1 — Tokens

- [x] Create `src/styles/tokens-ref.css`
- [x] Create `src/styles/tokens-sys.css`
- [x] Create `src/styles/tokens-comp.css`
- [x] Create/import `src/styles/tokens.css`
- [x] Wire dark/light theme attributes in app and Storybook
- [x] Verify bullish/bearish, primary/error, surfaces, radius, spacing, typography, elevation vars exist

## Phase 1b — Reference Reading

- [x] Document layout anatomy for each prototype folder reference
- [x] Document alignment system, gutters, columns, baselines, and numeric alignment
- [x] Document surface model: cards/sheets vs flat page sections
- [x] Document content realism: row counts, text lengths, number/date formats, truncation, metadata
- [x] Document visible interaction states and component boundaries

## Phase 2 — Storybook Foundations

- [x] `Foundations/Color` guide
- [x] `Foundations/Typography` guide
- [x] `Foundations/Spacing` guide
- [x] `Foundations/Shape` guide
- [x] `Foundations/Elevation` guide
- [x] `Foundations/Iconography` guide
- [x] Foundations guides are implemented as `.tsx` pages with `.stories.tsx` companions
- [x] Foundations guides use an editorial documentation-page layout, not Storybook autodocs
- [x] Each guide follows the fixed documentation section template for its domain
- [x] Each foundation page explains design intent, token contract, usage timing, accessibility, implementation examples, and do/don't guidance
- [x] Foundation `.stories.tsx` entries omit `tags: ['autodocs']`; they only route to the TSX guide page
- [x] Implement shared `Icon` component + co-located stories

## Phase 2b — Component Reuse Gate

- [ ] Query Storybook MCP `list-all-documentation` before creating new components
- [x] For every requested clip/collage block, score likely existing candidates by intent, anatomy, variants/props, states, and story coverage
- [x] Reuse or extend existing components at score 6+ instead of creating duplicate visual structures
- [x] Document why any new component scored below reuse/extend threshold

## Phase 3 — Baseline Components (target platform: mobile)

- [x] Button + stories
- [x] Input + stories
- [x] Card + stories
- [x] Modal/Dialog + stories
- [x] Label + stories
- [x] Alert + stories
- [x] Badge/Chip + stories
- [x] Avatar + stories
- [x] BottomNav + stories
- [x] Icon + stories
- [x] Tab + stories
- [x] Dropdown + stories

## Phase 4 — App Components

- [x] Convert approved rows from `design/prototype-component-inventory.md` into reusable components + co-located stories
- [x] Confirm every concrete screen in `product/PROTOTYPE_SCREEN_MAP.md` composes those components only

## Phase 5 — Screens

- [x] Rebuild `/` from `design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html` using Storybook components only

## Phase 6 — Verification

- [x] `npm run build`
- [x] `npx storybook build` or verified `npx storybook dev`
- [ ] `product/PRODUCT_SPEC.json`, `product/FEATURE_MANIFEST.json`, `product/SCREEN_MANIFEST.json`, and `mobile/packages/shared/src/*Manifest.ts` are aligned
- [ ] Every implemented feature has acceptance criteria in `product/FEATURE_MANIFEST.json` or `product/features/*.md`
- [ ] `mobile/apps/mobile-webview` starts with `EXPO_PUBLIC_WEB_APP_URL` pointing at the web app
- [ ] `mobile/apps/mobile-react-native` starts and lists every screen from the shared app manifest
- [x] Storybook MCP endpoint is available at `/mcp` and connected at project scope
- [ ] Storybook MCP tools used during UI work: `list-all-documentation`, `get-documentation`, `get-storybook-story-instructions`, and `run-story-tests` where available
- [x] Hardcoded color audit:
  `grep -rE '#[0-9a-fA-F]{3,8}|rgba?\(' src --include='*.tsx' --include='*.css'`
- [ ] Raw spacing/radius audit:
  `grep -rE 'borderRadius:|padding:|margin:|gap:' src --include='*.tsx'`
- [ ] Reference comparison for every image file in `./design-reference/`
- [x] Anti-demo audit: no unreferenced hero sections, decorative gradients, glassmorphism, glow effects, over-carded layouts, inflated whitespace, generic slogans, lorem ipsum, or symmetrical placeholder data
- [ ] Responsive smoke check for mobile width and a wider preview width
- [x] Final report lists completed screens, remaining gaps, and commands run
