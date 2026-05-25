# Session State — design-spec

This file is the durable handoff between AI sessions. Update it before every checkpoint.

## Current Stage

- Stage: Phase F dark theme color parity complete — web product built and verified
- Target platform: mobile
- Active scope: Storybook-first web implementation for `testing-demo-v2/talk-ui`
- Last updated by: Codex, 2026-05-25

## Completed Stages

- [x] Stage 1 — Design Analysis
- [x] Stage 2 — Product Plan
- [x] Stage 3 — Token Foundations
- [x] Stage 4 — Scoped Build
- [x] Stage 5 — Visual Parity

## Key Design Decisions

Record decisions that future sessions must preserve:

- Product PRD/manifests are placeholders; do not invent major product behavior beyond the prototype evidence.
- Concrete web screen is `testing-demo-v2/talk-ui/index.html`, route `/`, suggested production screen `DesignSpecHomeScreen`.
- Prototype visual language is Talk君 market/content home: light mobile surface, blue primary actions, lime secondary CTA, rounded cards/tiles, horizontal carousels, fixed pill BottomNav, article bottom sheet.
- Wise reference documents/tokens are style seed only; production UI must rebuild through Storybook components, not copy prototype page-level HTML/CSS.
- Storybook/source now exists; future UI additions must run the Component Reuse Gate against the components in `src/components/` before creating new components.
- `mobile/packages/shared/src/appManifest.ts` is aligned to `product/SCREEN_MANIFEST.json` for `prototype-screen-1` at route `/`.
- Dark theme color parity follows `design-reference/source-folder/files/testing-demo-v2/talk-ui/homepage.css`: cards/rails/feed sheets use white at 10% opacity, BottomNav uses deep blue at 72% opacity, active nav/chip states use primary blue at 18% opacity with pale blue foreground, muted metadata uses white at 68% opacity, and inactive nav uses white at 52% opacity.

## Files Changed In Last Stage

- `package.json`
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `.storybook/main.ts`
- `.storybook/preview.tsx`
- `src/styles/tokens-ref.css`
- `src/styles/tokens-sys.css`
- `src/styles/tokens-comp.css`
- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/components/*`
- `src/components/FeedList.css`
- `src/components/SentimentCard.css`
- `src/pages/DesignSpecHomeScreen.tsx`
- `src/pages/DesignSpecHomeScreen.css`
- `src/data/homeContent.ts`
- `src/stories/foundations/*`
- `src/stories/product/*`
- `mobile/packages/shared/src/appManifest.ts`
- `mobile/apps/mobile-webview/App.tsx`
- `mobile/apps/mobile-webview/README.md`
- `mobile/apps/mobile-webview/.env.example`
- `design/prototype-component-inventory.md`
- `design/prototype-token-audit.md`
- `product/PROTOTYPE_SCREEN_MAP.md`
- `start-here/SESSION_STATE.md`
- `start-here/TASKS.md`

## Verification Results

Record exact commands and results:

- Read requested spec/governance/product/mobile/prototype files.
- Rendered local prototype with `python3 -m http.server 8090` and headless Chrome screenshots at `/private/tmp/talk-ui-home.png` and `/private/tmp/talk-ui-home-tall.png`.
- `rg --files -g '*.stories.*' -g 'src/**' -g '.storybook/**'` returned no existing component/story catalog.
- `npx storybook add @storybook/addon-mcp` confirmed the MCP addon in Storybook config.
- `npx mcp-add --name talk-app-storybook-mcp --type http --url "http://localhost:6007/mcp" --scope project --clients codex` registered the project MCP endpoint, but the Storybook MCP documentation tools were not exposed in this Codex tool session.
- `npm run build` passed.
- `npm run storybook:build` passed.
- `grep -rE '#[0-9a-fA-F]{3,6}' src/components src/pages 2>/dev/null | grep -v '\.stories\.'` returned no hardcoded component/page hex colors.
- `rg -- '--(ref|sys)-' src/components src/pages` returned no component/page direct reads of lower token layers.
- `rg 'rgba?\(' src/components src/pages` returned no component/page raw rgb/rgba color values.
- `rg 'lorem|ipsum|gradient|glassmorphism|glow' src/components src/pages src/data` returned no anti-demo keyword hits.
- Headless Chrome visual smoke screenshot saved at `/private/tmp/talk-app-home.png`; reference assets render in the home screen.
- Headless Chrome/CDP theme toggle check returned `light->dark`.
- `mobile/apps/mobile-webview` is configured to use `http://127.0.0.1:5174` as the default/fallback web app URL; Expo dependencies were not installed or started in this pass.
- `curl -I http://127.0.0.1:5174/` returned `HTTP/1.1 200 OK`.
- `curl -I http://127.0.0.1:6007/` returned `HTTP/1.1 200 OK`.
- Storybook dev host fix added in `.storybook/main.ts`: Vite server now explicitly allows `127.0.0.1` and `localhost`.
- After restarting Storybook on port 6007, `curl -I http://127.0.0.1:6007/index.json` returned `HTTP/1.1 200 OK`.
- `curl -I 'http://127.0.0.1:6007/@id/__x00__virtual:/@storybook/builder-vite/storybook-stories.js?t=1779694214509'` returned `HTTP/1.1 200 OK`.
- Headless Chrome Storybook smoke check loaded `components-button--default`; no 500/404 host errors were reported. The only browser warning was a Storybook 11 `PopoverProvider` deprecation warning.
- Followed `skills/ui-visual-parity/SKILL.md` for dark theme color parity against `design-reference/source-folder`.
- Compared reference CSS/tokens and live computed styles for `testing-demo-v2/talk-ui`: reference shell black, surface cards white 10%, BottomNav deep blue 72%, active states primary blue 18%, active foreground pale blue, muted metadata white 68%, inactive nav white 52%, macro brand deep blue, macro cool blue-soft-on-black, section eyebrow lime, feed eyebrow pale blue.
- Updated token/theme ownership in `src/styles/tokens-ref.css`, `src/styles/tokens-sys.css`, and `src/styles/tokens-comp.css`; component-level changes were limited to token consumption in `src/components/SentimentCard.css` and `src/components/FeedList.css`.
- Rechecked the implementation dark computed styles: selected cards/rails/feed sheets resolve to `rgba(255, 255, 255, 0.1)`, BottomNav to `rgba(6, 18, 58, 0.72)`, active nav/chips to `rgba(42, 74, 255, 0.18)`, active foreground to the reference pale blue mix, macro brand to `rgb(6, 18, 58)`, macro cool to the reference blue-soft mix, and metadata/nav inactive text to the expected white alpha values.
- `npm run build` passed after dark theme parity changes.
- `npm run storybook:build` passed after dark theme parity changes; only the existing Vite plugin timing and chunk-size warnings were reported.
- `rg '#[0-9a-fA-F]{3,8}|rgba?\(' src/components src/pages` returned no matches.
- `rg -- '--(ref|sys)-' src/components src/pages` returned no matches.
- `curl -I http://127.0.0.1:5174/` returned `HTTP/1.1 200 OK`.
- `curl -I http://127.0.0.1:6007/index.json` returned `HTTP/1.1 200 OK`.
- Temporary reference server on `127.0.0.1:8091` was stopped after comparison.

## Open Questions

Questions that need user input before continuing:

- Real PRD is still missing; product behavior should remain constrained to prototype evidence until PRD is replaced.
- Phase 1 mobile WebView packaging remains the next product-delivery step after web visual approval.

## Recommended Next Prompt

Paste the next prompt from `start-here/STAGED_WORKFLOW.md`, or write the selected stage and scope here.

Run Phase F visual parity across `design-reference/` and then configure `mobile/apps/mobile-webview` with `EXPO_PUBLIC_WEB_APP_URL=http://127.0.0.1:5174/`.
