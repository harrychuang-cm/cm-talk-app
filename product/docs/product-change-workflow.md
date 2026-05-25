# Product Change Workflow

This workspace is meant to evolve incrementally.

## Baseline sources of truth

- `product/PRD.md` — product intent and product-level rules.
- `product/PRODUCT_SPEC.json` — machine-readable product model extracted from the PRD.
- `product/FEATURE_MANIFEST.json` — features, flows, priorities, acceptance criteria, affected screens.
- `product/SCREEN_MANIFEST.json` — routes, reference screenshots, screen components, visual acceptance.
- `mobile/packages/shared/` — product contract consumed by web and app targets.

## Add or modify functionality

1. Write a change request under `product/changes/`.
2. Run `/change product/changes/<file>.md`.
3. Review the delta plan before implementation when the change is broad or ambiguous.
4. Update docs/manifests before code.
5. Patch only affected components, screens, data models, routes, and mobile targets.
6. Verify affected Storybook stories, screens, build, and app scaffold.

## When to update each layer

- Update `product/PRD.md` when the change alters product goals, target users, business rules, or non-functional requirements.
- Update `product/features/*.md` for feature behavior, states, data, acceptance criteria, and affected screens.
- Update `product/flows/*.md` for multi-step interactions such as onboarding, checkout, KYC, order placement, or recovery.
- Update `product/SCREEN_MANIFEST.json` when routes, screen ownership, visible blocks, or visual acceptance changes.
- Update `mobile/packages/shared` when web and mobile targets need the same product contract.

## Anti-patterns

- Do not paste a new PRD and ask the AI to rebuild everything.
- Do not let screenshots create product requirements silently.
- Do not let PRD text override visual references without an explicit design decision.
- Do not create a separate PRD for every button click. Use feature specs and flow specs.
