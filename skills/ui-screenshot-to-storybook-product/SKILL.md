---
name: ui-screenshot-to-storybook-product
description: >-
  Turns an uploaded UI screenshot into a token-backed implementation plan: inventory
  UI building blocks, extend Storybook first with the project's design tokens, then
  compose product screens from documented components only. Use when the user attaches
  a UI mockup, screenshot, or Figma export; asks to implement a screen from an image;
  or wants to sync a visual design into Storybook and the app without one-off styles.
---

# UI Screenshot → Storybook → Product

Use this workflow **together with** design-system governance (Token Gate, Composition Gate, `ref → sys → comp`). **Never** skip governance because a reference image exists.

**Where to load governance from**

- **Extracted design-spec zip from cm-ai-ui-explorer:** read [`./design-system-governance/SKILL.md`](./design-system-governance/SKILL.md) in that folder.
- **Any other product repo:** use that repo’s governance doc, or the `design-system-governance` skill if installed for Cursor / Claude Code.

## When to use

- The user (or tool) provides **one or more UI images** (mockup, production screenshot, Figma PNG).
- The goal is to land the UI in **Storybook as the source of truth**, then **compose the product app** from those exports.

## Inputs the agent must collect

1. **Image(s)** — full viewport or focused region; note platform (web/mobile) if ambiguous.
2. **Project map** — where tokens live (`tokens.css`, `globals.css`, `extracted-design-tokens/design-tokens.json`, or cm-ui-library imports), where components live (`src/components`, `vendor/cm-ui-library`), Storybook config (`.storybook/`).
3. **Existing catalog** — use Storybook MCP when available (`list-all-documentation`, then `get-documentation` / `get-documentation-for-story`) and run a quick file search for `*.stories.*` so new work **reuses** before inventing. Component names from the screenshot are hypotheses, not required filenames.

## Phase 1 — Visual parsing (no code yet)

From the image, produce a structured **UI inventory**:

| ID | Block | Type (atom / molecule / organism / template) | Visible states | Notes |
|----|-------|---------------------------------------------|----------------|-------|

- Call out **navigation**, **data display** (tables, charts, KPI cards), **forms**, **dialogs**, **lists**, **empty/loading/error** if visible or implied.
- Mark **repeated patterns** (same card row, chip row, toolbar) once — they become **one** shared component.
- Record **approximate hierarchy** (sections top → bottom) for later page composition.

## Phase 2 — Map to design system & tokens

1. **Match** each inventory row to an **existing** Storybook component or cm-ui-library primitive when possible. Match by intent, anatomy, slots, variants, states, and documented props — not by exact component name. For example, a screenshot block called `DateTab` should usually map to an existing `Tab`, `Tabs`, `SegmentedControl`, `FilterTabs`, or `ChipGroup` if the behavior is selectable labels.
2. For gaps, run the **Token Gate**: list required **sys/comp** roles (surface, on-surface, outline, spacing, radius, motion). If missing, **stop** and ask to add tokens (see governance skill) — no hex/rgb literals in JSX/CSS.
3. **Composition Gate**: if a block needs a child that does not exist, prefer **splitting** into smaller shared pieces over a monolithic screen component.

### Component Reuse Gate

Before creating any new component, produce this table:

| Requested block | Candidate | Evidence source | Intent match 0-3 | Anatomy match 0-3 | Props/variants match 0-2 | States match 0-1 | Token/story coverage 0-1 | Total /10 | Decision |
|-----------------|-----------|-----------------|------------------|-------------------|--------------------------|------------------|--------------------------|-----------|----------|

Decision rules:

- **8-10**: reuse the existing component; do not create a duplicate.
- **6-7**: extend or wrap the existing component; add missing props/stories there.
- **0-5**: create a new component only after documenting why candidates do not fit.

Use Storybook MCP for evidence when available:

- `list-all-documentation` to discover candidates.
- `get-documentation` to verify props, slots, variants, and examples.
- `get-documentation-for-story` when a specific story is the closest match.
- `get-storybook-story-instructions` before adding or changing stories.

## Phase 3 — Storybook first (implementation order)

**Design System Architect (role):** Before hand-writing many component stories, **research the project’s design tokens** (from `CLAUDE.md`, `extracted-design-tokens/design-tokens.json`, and global CSS) and add **Foundations** documentation **inside Storybook** — as **`.tsx` guide components only** with **CSF `.stories.tsx`** under a **Foundations** group (**do not** use **`.jsx`** or **`.mdx`** for these guides). Cover at minimum **Color guide**, **Typography guide**, **Spacing & layout guide**, **Shape / radius guide**, **Elevation** (if the system uses shadow levels), and **Iconography guide**. Every guide must explain **design intent**, **token / component contract**, **usage rules**, **visual examples**, and **do / don't** guidance, and the page layout itself must use a **bento-style documentation composition** with fixed section templates: Color = hero summary / semantic swatches / dark-light comparison / rules / examples / do-don't; Typography = hero summary / scale grid / role mapping / rules / examples / do-don't; Spacing = hero summary / spacing scale / layout rules / composition examples / do-don't; Shape = hero summary / radius ladder / control-vs-card mapping / rules / examples / do-don't; Elevation = hero summary / elevation scale / usage-by-surface / examples / do-don't; Iconography = hero summary / icon source + wrapper contract / size-stroke matrix / semantic-accessibility rules / examples / do-don't. Also add a shared **`Icon` component** so screens do not scatter raw icon imports or inline SVG. These pages are the **auditable contract** for designers and devs; **update them whenever tokens change**.

For every **new or extended** shared block:

1. Implement the component using **only** token-backed styles (`var(--…)` aligned with this project's contract).
2. Add or update a **co-located** `.stories.tsx` (CSF3, `tags: ['autodocs']`, meaningful `argTypes`).
3. Cover at minimum: **Default**, **variants**, **interactive states** (hover/focus/disabled as applicable), and **light/dark** if the product has both.
4. **Verify** in `storybook dev` before importing the block into a route or page.

**Rule:** Product routes **import from** the shared component layer / Storybook-documented modules — they do not re-implement the same markup and styles inline.

### Background images and photos (raster content rule)

When the reference shows a **photo, hero banner, profile picture, illustration, or any raster artwork**, do **NOT** recreate it with code:

- ❌ No CSS gradients / SVG / emoji / hand-coded shapes pretending to be the image
- ❌ No third-party hotlinked placeholders (\`lorem-picsum\`, \`placeholder.com\`, \`unsplash random\`, etc.)
- ❌ No 0×0 empty container — that destroys the layout rhythm

**Default**: replace the image with a token-driven \`background-color\` (closest existing surface role: \`--color-placeholder\`, \`--color-surface-container\`, \`--surface-2\`, etc. — never a literal hex). Preserve width, height, aspect-ratio, border-radius, and surrounding spacing. Add a marker:
\`<div role="img" aria-label="<reference description>" data-placeholder="image" style={{ background: 'var(--color-surface-container)', aspectRatio: '16 / 9', borderRadius: 'var(--radius-md)' }} />\`

**Optional auto-generation** is allowed **only if** the project declares image-generation tooling (a documented npm script / MCP server / API endpoint) **and** the required API key exists in \`.env\`. Otherwise, stop at the placeholder — the user will swap in real images later.

For the full decision tree (placeholder color choice, marker conventions, summary-table format), see \`skills/ui-visual-parity/SKILL.md\` → **Background Images and Photos**.

## Phase 4 — Assemble the product screen

1. Create a **page-level** module (e.g. `src/pages/…` or `src/app/…`) that **only composes** documented components and layout primitives.
2. Map layout to the screenshot **section by section**; use the same spacing/radius tokens as in stories.
3. Wire **data** (props, hooks, loaders) **after** the visual shell matches the reference at the token level.
4. Compare side-by-side with the **uploaded image** and `./reference/` screenshots from this pack if present.

## Quality checklist (before calling the screen "done")

- [ ] No hardcoded colors, spacing, radius, or animation durations outside the token system.
- [ ] **Foundations** guides exist in Storybook (color, typography, spacing, shape/radius, elevation if applicable, and iconography) and match live tokens.
- [ ] A shared `Icon` component exists; product screens do not scatter raw inline SVG as the default icon strategy.
- [ ] Every new reusable block has a Storybook story reviewed in isolation.
- [ ] Page file contains composition and data wiring — not a second copy of design-system markup.
- [ ] Governance **Ask** prompts were used if a token or child component was missing.

## Tooling notes (Cursor / Claude Code / Codex)

This skill is consumable by all three IDE/CLI agents. The **content of every phase above applies identically** — only the *invocation* and *file-attachment* mechanism differs.

### Claude Code
- **Auto-loaded spec:** `CLAUDE.md` is read at session start.
- **Attach image:** type `@reference/screen-1.png` directly in chat — the vision-capable model will read it.
- **Invoke this skill:** type `/build` (full Phase A→E) or `/component <Name>` for a single block; both commands live in `.claude/commands/` and explicitly cite this skill file.
- **Reference this skill:** `@skills/ui-screenshot-to-storybook-product/SKILL.md` if you want the agent to re-read it mid-session.

### Cursor
- **Auto-loaded spec:** `.cursorrules` is read at session start; `CLAUDE.md` is also picked up as project context.
- **Attach image:** drag the screenshot from `./reference/` into the chat panel, or use `@reference/screen-1.png` syntax.
- **Reference this skill:** `@skills/ui-screenshot-to-storybook-product/SKILL.md` — Cursor has no native slash commands, so paste the prompts from `start-here/KICKSTART.md` (Option A / Option B) as your first message.

### Codex CLI (OpenAI)
- **Auto-loaded spec:** `AGENTS.md` is read at session start. It tells Codex to also read `CLAUDE.md`, this skill, the governance skill, and the relevant references.
- **Attach image:** Codex does not support `@file` syntax for images in plain mode. Either (a) instruct it explicitly: *"Read the screenshot at `./reference/screen-1.png` and parse it as the visual source for Phase A"*, or (b) for vision-capable Codex modes, drop the file path into the prompt as an explicit input.
- **Invoke this skill:** Codex has no slash commands. Paste the **Option Codex** prompt from `start-here/KICKSTART.md` as your first message; it instructs Codex to read this file and follow Phase A→E.
- **Conflict resolution:** when the image and `CLAUDE.md` disagree, prefer the token spec + governance — restate this rule explicitly in the prompt because Codex tends to over-trust raw visuals.

### Universal rules (all three)
- If the repo includes `CLAUDE.md` from this generator, treat it as the **written spec**; the image is an additional or overriding **visual** reference — resolve conflicts explicitly (prefer token spec + governance).
- Reuse before invent: always run the **Component Reuse Gate** in Phase 2 before generating new component files, regardless of which agent you are using.
