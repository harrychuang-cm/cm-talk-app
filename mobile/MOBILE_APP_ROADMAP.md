# Mobile App Roadmap — design-spec

This generated project is a **from-zero product workspace**, not an import into an existing app. Build the web product from the reference screenshots first, but keep the app targets synchronized from day one.

## Recommended strategy

1. **Phase 1 — WebView app first**
   - Use `mobile/apps/mobile-webview` as the installable mobile shell.
   - Point `EXPO_PUBLIC_WEB_APP_URL` at the running or deployed web app.
   - Ship previews, internal demos, and QA builds here before native conversion is ready.

2. **Phase 2 — React Native scaffold**
   - Use `mobile/apps/mobile-react-native` for true native screens.
   - Start with navigation, app metadata, and screen placeholders from `mobile/packages/shared`.
   - Convert only the screens that need native performance, native navigation, camera, notifications, payments, or offline behavior.

3. **Phase 3 — Shared package**
   - Keep product identity, route IDs, screen metadata, shared copy keys, API contracts, and token snapshots in `mobile/packages/shared`.
   - Web, WebView, React Native, and future targets should consume this contract instead of forking product definitions.

4. **Phase 4 — AI assisted screen conversion**
   - After a web screen passes visual comparison against `design-reference/`, ask the AI to convert that one screen into React Native.
   - Preserve information hierarchy, density, route names, realistic mock data, and token roles.
   - Do not convert every screen blindly. Native conversion is a product decision, not a mechanical export.

5. **Phase 5 — Flutter / SwiftUI / Compose**
   - Treat these as future generator targets.
   - They should consume `product/SCREEN_MANIFEST.json`, `mobile/MOBILE_BUILD_MATRIX.json`, and `mobile/packages/shared/src/appManifest.ts`.
   - Add them only when a product reason exists: platform-native UX, team skill fit, performance, or distribution requirements.

## Suggested workspace shape

```
design-spec-design-spec/
  start-here/               # KICKSTART, BUILD_PLAN, TASKS — read first
  product/                  # PRD, manifests, features/, flows/, changes/
  design/                   # extracted tokens, theme integration
  mobile/
    apps/
      web/                  # Created by the AI product build flow
      mobile-webview/       # Phase 1 scaffold included in this zip
      mobile-react-native/  # Phase 2 scaffold included in this zip
    packages/
      shared/               # Phase 3 shared contract included in this zip
    docs/                   # mobile conversion + future native target notes
  skills/                   # SKILL.md for governance + UI workflows
  design-reference/         # screenshots
  CLAUDE.md
  .cursorrules
```

## Decision rule

Use WebView when the screen is mostly responsive content, dashboards, settings, onboarding, or CRUD. Use native React Native when the screen needs mobile-first navigation, gestures, device APIs, background work, push notifications, offline storage, or high-frequency interaction.
