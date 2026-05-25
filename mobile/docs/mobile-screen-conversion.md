# Phase 4 — AI Assisted Screen Conversion

Use this prompt after a web screen for **design-spec** passes visual comparison against its reference screenshot.

```
Read product/SCREEN_MANIFEST.json, mobile/MOBILE_BUILD_MATRIX.json, mobile/packages/shared/src/appManifest.ts, and the source for the validated web screen.

Convert only [screen id / route] into React Native under mobile/apps/mobile-react-native.

Rules:
- Preserve route identity, information hierarchy, data density, and interaction states from the web screen.
- Use mobile/packages/shared for route IDs, app metadata, API models, and token snapshots.
- Keep platform-specific UI in mobile/apps/mobile-react-native only.
- Do not convert unrelated screens.
- If a token role is missing for native, add a token mapping file before using raw colors or spacing in a screen.
- Report which web components were translated, which were replaced by native primitives, and which remain WebView-only.
```
