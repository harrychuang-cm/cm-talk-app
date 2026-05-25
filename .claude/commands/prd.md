Ingest or refresh product requirements for this generated product workspace.

Input: $ARGUMENTS

Supported input forms:
- Empty input: read product/PRD.md and every file under product/templates/ and product/features/.
- File path: `/prd product/PRD.md`, `/prd product/new-prd.md`, or `/prd product/docs/product-requirements.md`.
- Notes: `/prd add subscription management for teams...`.

Before editing code:
1. Read CLAUDE.md, product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json, product/SCREEN_MANIFEST.json, mobile/MOBILE_BUILD_MATRIX.json, and mobile/packages/shared/src/appManifest.ts.
2. If a PRD file is provided, normalize it into product/PRD.md while preserving the user's intent and unresolved questions.
3. Extract or update product/PRODUCT_SPEC.json:
   - productName
   - targetUsers
   - goals and nonGoals
   - coreJobs
   - domainEntities
   - businessRules
   - nonFunctionalRequirements
   - successMetrics
   - openQuestions
4. Extract or update product/FEATURE_MANIFEST.json:
   - feature id, name, priority, status
   - user stories
   - acceptance criteria
   - data requirements
   - affected screens
   - related flows
   - dependencies
5. Reconcile product/FEATURE_MANIFEST.json with product/SCREEN_MANIFEST.json. Add missing screen mappings as proposals; do not delete existing screens unless the PRD explicitly removes them.
6. Update mobile/packages/shared/src/productRequirements.ts and mobile/packages/shared/src/featureManifest.ts from the JSON manifests.
7. **Auto-generate product/flows/uiux-flow.json** (mandatory whenever the PRD has real content — skip only if PRD is still placeholder). This file feeds the Storybook **Product Overview** page with the interactive React Flow diagram:
   - Validate against product/templates/UIUX_FLOW.schema.json.
   - One node per screen in product/SCREEN_MANIFEST.json — id matches the screen id, label = screen title, route = screen route, feature = owning feature id from product/FEATURE_MANIFEST.json, kind = entry | screen | modal | sheet | decision | exit.
   - Edges = navigation transitions extracted from PRD + FEATURE_MANIFEST. Each edge has source id, target id, label (trigger condition such as "Tap Buy", "Login success", "Tap Back"), and kind = primary | secondary | back | deep-link | system.
   - Set position: null on every node — the Storybook page runs @dagrejs/dagre to auto-layout at render time; do not hand-author coordinates.
   - Update generatedAt to current ISO timestamp; bump schemaVersion only if you change the schema itself.
   - If a screen exists in SCREEN_MANIFEST.json but no edge reaches or leaves it, mark it with kind=screen and add a TODO entry to start-here/TASKS.md so the missing transition is reviewed.
8. Update start-here/TASKS.md with PRD / feature / screen / flow follow-up tasks.

Output before any implementation:
| Requirement | Source | Feature mapping | Screen mapping | Flow node id | Status | Open question |

Stop after manifest, flow, and task updates unless the user explicitly asks you to implement the resulting product changes.
