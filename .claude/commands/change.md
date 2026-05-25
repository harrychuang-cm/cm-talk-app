Apply an incremental product change request without regenerating the whole project.

Input: $ARGUMENTS

Supported input forms:
- File path: `/change product/changes/2026-05-05-add-watchlist.md`.
- Inline request: `/change add watchlist to market search and asset detail`.

Rules:
- Do not rebuild the project from scratch.
- Treat product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json, product/SCREEN_MANIFEST.json, and mobile/packages/shared as the baseline product contract.
- Create or update only the affected specs, manifests, components, screens, tests, and mobile scaffold files.
- Preserve unrelated behavior and visual decisions.

Workflow:
1. Read CLAUDE.md, product/docs/product-change-workflow.md, product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json, product/SCREEN_MANIFEST.json, mobile/MOBILE_BUILD_MATRIX.json, and mobile/packages/shared/src/appManifest.ts, start-here/TASKS.md, and the change request.
2. Classify the request: add feature, modify feature, remove feature, change flow, change copy/content, mobile/native promotion, or non-functional requirement.
3. Produce a delta plan before editing:
   | Area | Current state | Requested change | Files to update | Verification |
4. Update product docs first (features/, flows/, manifests, mobile/packages/shared, product/flows/uiux-flow.json):
   - product/PRD.md only if the change alters product-level goals, constraints, or business rules.
   - product/features/*.md for feature-level behavior.
   - product/flows/*.md only for multi-step or high-risk interactions.
   - product/FEATURE_MANIFEST.json and product/SCREEN_MANIFEST.json for machine-readable planning.
   - mobile/packages/shared/src/productRequirements.ts and mobile/packages/shared/src/featureManifest.ts.
   - **product/flows/uiux-flow.json** — refresh whenever the change adds, removes, renames, or re-routes any screen, OR adds/removes a navigation transition. Validate against product/templates/UIUX_FLOW.schema.json. Update generatedAt; do not hand-author node positions (Storybook page runs @dagrejs/dagre at render).
5. Then update Storybook components, screens, routes, data models, and mobile scaffold only where affected.
6. Run verification scoped to affected areas plus full build when code changes.

Final report:
- change request summary
- docs/manifests updated
- components/screens changed
- tests/build commands run
- remaining open questions
