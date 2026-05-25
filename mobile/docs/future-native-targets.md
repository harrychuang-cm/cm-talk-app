# Phase 5 — Future Native Targets

Flutter, SwiftUI, and Jetpack Compose should be generated from the same product contract for **design-spec**:

- `product/SCREEN_MANIFEST.json`
- `mobile/MOBILE_BUILD_MATRIX.json`
- `mobile/packages/shared/src/appManifest.ts`
- `mobile/packages/shared/src/tokenSnapshot.ts`
- validated web screens and Storybook components

Recommended order:

1. Generate routing and screen placeholders.
2. Map token roles to the target platform's theme system.
3. Convert one validated screen at a time.
4. Keep API contracts and mock data in `mobile/packages/shared`.
5. Add target-specific native capabilities only after the shared product contract is stable.
