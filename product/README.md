# Product Workspace

Everything that shapes product **functionality** lives here (visual styling lives in `design/` and `CLAUDE.md`).

Layout:

1. `PRD.md` — product-level goals, users, business rules, success metrics.
2. `PRODUCT_SPEC.json` — machine-readable product model extracted from the PRD.
3. `FEATURE_MANIFEST.json` — features, priorities, acceptance criteria, affected screens.
4. `SCREEN_MANIFEST.json` — reference screenshot → route/screen/component acceptance map.
5. `features/*.md` — feature-level behavior, acceptance criteria, data needs, affected screens.
6. `flows/*.md` — complex multi-step interactions, validation, error states, analytics, rollback/retry.
7. `changes/*.md` — incremental product changes after the baseline has been built.
8. `templates/` — starter templates and JSON schemas for PRD, feature spec, flow spec, and manifests.
9. `docs/product-change-workflow.md` — how to evolve the product after the baseline ships.

Run `/prd` after adding or replacing PRD content. Run `/change` for future incremental updates.
