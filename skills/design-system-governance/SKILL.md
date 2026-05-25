# Design System Governance Framework

This document establishes a mandatory workflow for enforcing token-first, composition-first governance across design system projects.

## Core Workflow

The framework requires five sequential steps: (1) verify existing shared components meet requirements, (2) define or extend tokens using discovered layer structure, (3) maintain strict token inheritance (`ref → sys → comp`), (4) implement components only after token mapping is confirmed, and (5) add Storybook coverage for key states.

**Storybook as the component hub:** Shared UI is **authored and reviewed in Storybook first** (co-located stories, same token contract as the app). The AI / implementer should act as a **Design System Architect**: **study the extracted tokens** (color, type, spacing, shape, elevation, iconography) and publish **Foundations** documentation in Storybook (e.g. Color, Typography, Spacing/layout, Shape/radius, Elevation/shadow, and Iconography) *alongside* component stories. Author every foundation guide as a full-screen `.tsx` documentation page plus a minimal CSF `.stories.tsx` route entry. Do not use `.jsx`, `.mdx`, or autodocs for foundations. Each guide must read like a design-system website page: explain design intent, token contract, role mapping, usage timing, accessibility expectations, implementation examples, and do/don't guidance. Use an editorial documentation layout, not a plain card grid: a full-width hero, sticky in-page section rail, dense token tables, visual specimens, implementation notes, and paired do/don't examples. Keep cards only for individual specimens or examples. Foundation `.stories.tsx` files are Storybook navigation shells only: import `Meta`/`StoryObj`, set `title: 'Foundations/<Name>'`, use `parameters: { layout: 'fullscreen' }`, render the guide page, and do not set `tags: ['autodocs']`. If a project enables autodocs globally, explicitly opt these stories out with `tags: ['!autodocs']`. Use these fixed documentation page templates:
- **Color**: semantic color model, surface ladder, role swatches with resolved values, interaction/state colors, finance semantics, accessibility contrast notes, implementation snippets, do/don't.
- **Typography**: type scale specimens, role-to-UI mapping, hierarchy rules for dense screens, truncation/overflow rules, implementation snippets, do/don't.
- **Spacing**: spacing scale table, density modes, page/grid rhythm, component internal vs external spacing rules, composition specimens, do/don't.
- **Shape**: radius ladder, control/card/container mapping, touch target geometry, nested-surface rules, component examples, do/don't.
- **Elevation**: surface depth model, shadow/elevation scale, overlay/popover/dialog rules, stacking examples, motion/state notes, do/don't.
- **Iconography**: icon source + shared wrapper contract, size/stroke matrix, semantic color mapping, decorative vs informative accessibility rules, examples, do/don't. Treat `Icon` as a baseline shared component with a reusable wrapper and document it in `Foundations/Iconography`. Keep those guides in sync when tokens change. **Product screens** then **compose** those documented components to match reference designs — they must not become a second, undocumented implementation of the same blocks.

## Critical Blocking Gates

Two mandatory decision points halt progress:

**Token Gate:** When a required component-layer or semantic-layer token is absent, the workflow stops. The guidance states: "Do not use hardcoded fallback values. Do not create tokens without user confirmation."

**Composition Gate:** When child components needed for assembly don't exist in the shared library, implementation pauses. The directive emphasizes: "Do not create one-off inline subcomponents without approval."

**Component Reuse Gate:** Component names proposed by screenshots, clips, collages, or AI prompts are hypotheses. Before creating a new component, compare the requested block against Storybook and source candidates by intent, anatomy, slots, variants, states, and documented props — not exact name. If a candidate scores high enough, reuse or extend it instead of creating a duplicate (e.g. `DateTab` should usually reuse `Tab`, `Tabs`, `SegmentedControl`, or `ChipGroup`).

## Token Layer Architecture

Three distinct layers organize semantic responsibility:

- **Reference layer:** Raw VALUE primitives — names describe the value itself, never a role.
  `--ref-color-indigo-600`, `--ref-size-57`, `--ref-space-16`, `--ref-radius-8`, `--ref-weight-700`
  ✗ Wrong: `--ref-palette-primary`, `--ref-typescale-display-lg`, `--ref-spacing-md` (those are roles → sys layer)
- **System layer:** Shared, product-wide semantic roles — names describe purpose, values point to `--ref-*` only.
  `--sys-color-primary`, `--sys-typescale-body-lg`, `--sys-spacing-md`, `--sys-shape-sm`
- **Component layer:** Component- and region-specific slots — names reference specific components, values point to `--sys-*` only.

Rule: looking at a `--ref-*` name must immediately tell you its value. Looking at a `--sys-*` name must tell you its role.

## Design Principles

Ten universal principles guide implementation, including character-first visual focus, saturated accent colors on neutral surfaces, rounded interactive affordances, bold display typography, and layered surface depth using established elevation systems.

## Non-Negotiable Constraints

The framework prohibits hardcoded color literals, spacing values, animation durations, and display text in templates — all must derive from tokens, discovered motion systems, and i18n sources respectively.

---

## Notes for Cursor / Claude Code / Codex

The three Gates (Token / Composition / Component Reuse) and the `ref → sys → comp` token inheritance rule are **identical for all three agents**. Only invocation and stop-condition signaling differ.

### Claude Code
- **Auto-loaded:** `CLAUDE.md` carries the project-specific token list and the **Enforcement rules** block; this file is the abstract framework behind those rules.
- **Invoke a Gate:** the gate runs implicitly inside any `/build`, `/component`, `/audit`, or `/compare` slash command — those commands cite this file in their bodies.
- **Trigger a Token Gate stop:** when the agent reports *"missing token"* in chat, paste back: *"Do not invent. Add the token at the correct layer (ref → sys → comp) in tokens-ref.css / tokens-sys.css / tokens-comp.css and re-run the gate."*

### Cursor
- **Auto-loaded:** `.cursorrules` (legacy) **and** `.cursor/rules/00-governance.mdc` (modern, `alwaysApply: true`) — both carry the Enforcement rules; this file is the upstream framework reference.
- **Invoke a Gate:** Cursor has no slash commands. Either (a) reference this skill in the chat: `@skills/design-system-governance/SKILL.md run the Token Gate against the next change`, or (b) paste the relevant section from `start-here/KICKSTART.md`.
- **Drift symptom:** if Cursor starts inlining hex values in a component, paste the **Correction prompt** from `start-here/KICKSTART.md` — it explicitly invokes Token Gate cleanup.

### Codex CLI (OpenAI)
- **Auto-loaded:** `AGENTS.md` carries the 5 Non-negotiable rules at the top; this file is the upstream framework reference.
- **Invoke a Gate:** no slash commands and no `@`-syntax. Tell Codex explicitly:
  > *"Before generating component code, run the Token Gate from `skills/design-system-governance/SKILL.md`: list every CSS custom property the component needs by sys/comp role; for each, confirm it exists in the project's token files; stop and ask before introducing any hardcoded value."*
- **Composition Gate trigger:** when Codex proposes a new sub-component, prepend: *"First run the Component Reuse Gate (Phase 2 of `skills/ui-screenshot-to-storybook-product/SKILL.md`). Score against existing Storybook entries by intent / anatomy / props / states / coverage — only create new at total score < 6."*

### Universal rules (all three)
- **Never** allow the agent to add a hardcoded color, spacing, radius, or duration to "make the visual match" — fix the token first, then the component, then the screen. This is the layered fix order also enforced by `skills/ui-visual-parity/SKILL.md`.
- The Gates **block progress, not creativity**: when a token or component is missing, the correct response is to add it at the right layer, not to bypass the rule.
