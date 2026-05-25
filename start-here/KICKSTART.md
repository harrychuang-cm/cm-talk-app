# KICKSTART — design-spec — First Message to Your AI

> **Claude Code**: run `claude` in this directory — `CLAUDE.md` is read automatically. Use the slash commands in `.claude/commands/` (`/build`, `/audit`, `/compare`, `/component`, `/prd`, `/change`).
> **Cursor / VS Code**: open this folder — `.cursorrules` (legacy) **and** `.cursor/rules/*.mdc` (modern, 2025+) are both auto-loaded; governance rules apply always-on, visual-parity / screenshot-to-product rules trigger from your prompt phrasing. No native slash commands; paste one of the **Option** prompts below.
> **Codex CLI (OpenAI)**: run `codex` in this directory — `AGENTS.md` is read automatically. No slash commands; paste **Option Codex** below.
>
> Then paste one of the prompts below as your **first message**.

---

## Your prototype folder reference

This pack includes a **Prototype Folder** reference with **34** packaged files under `./design-reference/source-folder/files/`.

```
@design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json
@design-reference/source-folder/README.md
@design-reference/source-folder/files/testing-demo-v2/ref/wise/docs/design-system.md
@design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.css
@design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.json
@design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html
@design-reference/source-folder/files/testing-demo-v2/talk-ui/homepage.css
```

In Claude Code, attach a screenshot by typing `@design-reference/screen-0.png` directly in the chat.

---

## Step 0-B — Spectra Setup *(Recommended — skip if Spectra CLI is not available)*

Spectra gives this workspace **spec-driven change management**: every screen and feature
starts with a proposal + scenarios, tasks are tracked as checkboxes, and the full change
is archived when done. See `start-here/SPECTRA_SETUP.md` for a full reference.

**`openspec/config.yaml` is already present** in this workspace — no need to recreate it.

### Install Spectra (macOS / Linux)

```bash
curl -fsSL https://spectra.tools/install.sh | sh   # then: spectra --version
```

### Initialize

```bash
spectra init
```

---

### Claude Code

**Option A — use the /spectra-propose skill (if installed):**

Check first: `ls .claude/skills/spectra-propose/`

If the skill exists, run:
```
/spectra-propose "initial product build — design-spec"
```
The skill will guide you through proposal → specs → design → tasks in one session.

**Option B — use the CLI directly:**

```bash
spectra new change "initial-product-build" --agent claude
```

Then create artifacts in order:

```bash
# 1. Proposal — list all screens identified in Step 0-A
spectra new artifact proposal --change "initial-product-build" --stdin << 'EOF'
## Why
Build the full product UI for design-spec from the reference screenshots.

## What Changes
Implement all screens identified in the design analysis.

## Capabilities
### New Capabilities
- `screen-<name>`: one entry per screen from design-reference/

## Impact
- Affected code:
  - New: src/screens/, src/components/, src/styles/tokens.css
EOF

# 2. Spec — one per screen (repeat for each screen from Phase A)
spectra new artifact spec "screen-home" --change "initial-product-build" --stdin << 'EOF'
## ADDED Requirements
### Requirement: Home screen renders correctly
The home screen SHALL match the visual design in design-reference/screen-0.png.
#### Scenario: Home screen loads
- **WHEN** the user navigates to the root route
- **THEN** the home screen SHALL render with the correct layout and tokens
EOF

# 3. Tasks
spectra new artifact tasks --change "initial-product-build" --stdin << 'EOF'
## 1. Token setup
- [ ] 1.1 Populate tokens.css from Step 0-A design analysis output
## 2. Components
- [ ] 2.1 Build baseline components in Storybook
## 3. Screens
- [ ] 3.1 Implement home screen
EOF
```

Mark each task done as you implement:
```bash
spectra task done --change "initial-product-build" 1
```

---

### Cursor

Paste each command block below into the chat in order:

**Step 1 — Create the change:**
```
Run in terminal: spectra new change "initial-product-build" --agent cursor
```

**Step 2 — Create proposal (paste into terminal, one block at a time):**
Use the same CLI sequence as the Claude Code Option B above.
Reference `start-here/SPECTRA_SETUP.md` for the full command list.

**Step 3 — Apply tasks:**
After creating tasks, tell Cursor: *"Use `spectra task done --change initial-product-build <id>` to mark each task complete as you implement it."*

---

### Codex CLI

Codex can run shell commands directly. Paste this sequence:

```bash
# Create the initial change
spectra new change "initial-product-build" --agent codex

# Create proposal
spectra new artifact proposal --change "initial-product-build" --stdin << 'EOF'
## Why
Build the full product UI for design-spec from design-reference/ assets.
## What Changes
Implement all screens identified in Step 0-A design analysis.
## Capabilities
### New Capabilities
- `initial-screens`: all screens from reference screenshots
## Impact
- Affected code:
  - New: src/screens/, src/components/, src/styles/tokens.css
EOF

# Create spec per screen (one per reference image)
spectra new artifact spec "initial-screens" --change "initial-product-build" --stdin << 'EOF'
## ADDED Requirements
### Requirement: All reference screens are implemented
Each screen from design-reference/ SHALL be implemented to match the reference visual.
#### Scenario: Screen matches reference
- **WHEN** the screen route is loaded
- **THEN** the layout, tokens, and components SHALL match the design-reference/ screenshot
EOF

# Create tasks
spectra new artifact tasks --change "initial-product-build" --stdin << 'EOF'
## 1. Foundation
- [ ] 1.1 Populate tokens.css from Step 0-A design analysis
- [ ] 1.2 Build baseline Storybook components
## 2. Screens
- [ ] 2.1 Implement each screen from design-reference/
EOF

# Validate before starting
spectra validate "initial-product-build"

# Mark tasks done as you implement (replace <id> with task number)
# spectra task done --change "initial-product-build" <id>
```

---

## Recommended Path — staged first build

Use this path when quality matters. It keeps each AI session short, writes a durable handoff to
`start-here/SESSION_STATE.md`, and asks you what to do before moving into the next stage.

Open `start-here/STAGED_WORKFLOW.md` for the full stage-by-stage guide. Start with this
Design Analysis-only prompt:

```
Read these files first:
1. CLAUDE.md
2. start-here/STAGED_WORKFLOW.md
3. start-here/SESSION_STATE.md
4. design/reference-visual-analysis.md
5. product/SCREEN_MANIFEST.json
6. mobile/MOBILE_APP_ROADMAP.md
7. mobile/MOBILE_BUILD_MATRIX.json
8. product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json
9. design/prototype-component-inventory.md
10. design/prototype-token-audit.md
11. product/PROTOTYPE_SCREEN_MAP.md
12. design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json

Then read the reference inputs:
@design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json
@design-reference/source-folder/README.md
@design-reference/source-folder/files/testing-demo-v2/ref/wise/docs/design-system.md
@design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.css
@design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.json
@design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html
@design-reference/source-folder/files/testing-demo-v2/talk-ui/homepage.css

Run Stage 1 — Design Analysis only from start-here/STAGED_WORKFLOW.md.
Do not write app, component, Storybook, or token CSS code yet.

Outputs required before stopping:
Prototype Folder Analysis:
- Read `design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json` first.
- Inspect the packaged prototype files under `design-reference/source-folder/files/`, prioritizing design-system docs, token/theme files, CSS variables, HTML entry pages, component examples, and product docs listed in the manifest.
- Treat the folder as confirmed design/product intent, but not as production code to copy. Extract behavior, component anatomy, states, token roles, and screen composition before implementation.
- Create `design/prototype-component-inventory.md` with component candidates, responsibilities, slots, variants, states, source file evidence, and Storybook story requirements.
- Create `design/prototype-token-audit.md` with observed CSS variables/tokens, hardcoded values worth tokenizing, typography/radius/spacing patterns, and gaps.
- Create `product/PROTOTYPE_SCREEN_MAP.md` mapping concrete prototype pages/routes to product screens and Storybook components.
- Candidate counts: 1 entry pages, 1 stylesheets, 2 token sources, 0 component sources, 0 product docs.
- Also write `design/staged-design-analysis.md` with Step 0-A-1 principles, Step 0-A-2 design elements, Step 0-A-3 token JSON summary, screen inventory, and open questions.
- start-here/SESSION_STATE.md updated with completed stage, key decisions, open questions, and recommended next prompt

After updating SESSION_STATE.md, stop and ask me to choose the next action:
A) Continue to Stage 2 in this same session
B) Start a fresh AI session using start-here/SESSION_STATE.md as the handoff
C) Run a scoped single-screen/component stage
D) Stop for manual review
```

**Recommended after Stage 1:** choose **B** if the analysis was long or included multiple screenshots. A fresh session with `SESSION_STATE.md` usually gives cleaner implementation behavior than carrying the whole chat forward.

---

## Option A — Full product build (advanced / quick prototype)

Use this only when you accept less checkpoint control, such as a quick prototype or a very small one-screen reference. For production-quality builds, use **Recommended Path** above.

Paste this as your **first message** and let the AI follow Phase A → E:

```
Read these files first, in order:
1. CLAUDE.md
2. design/reference-visual-analysis.md
3. start-here/BUILD_PLAN.md
4. start-here/TASKS.md
5. product/SCREEN_MANIFEST.json
6. mobile/MOBILE_APP_ROADMAP.md
7. mobile/MOBILE_BUILD_MATRIX.json
8. product/PRD.md
9. product/PRODUCT_SPEC.json
10. product/FEATURE_MANIFEST.json
11. product/docs/product-change-workflow.md
12. skills/design-system-governance/SKILL.md
13. skills/ui-screenshot-to-storybook-product/SKILL.md

Then analyze the reference UI from the prototype folder:
@design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json
@design-reference/source-folder/README.md
@design-reference/source-folder/files/testing-demo-v2/ref/wise/docs/design-system.md
@design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.css
@design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.json
@design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html
@design-reference/source-folder/files/testing-demo-v2/talk-ui/homepage.css

Follow Phase A → E in strict order — do NOT write code before Phase B is confirmed.

Product workspace rule:
- Treat this folder as a from-zero product implementation workspace.
- Build and visually validate the web product first.
- Use `mobile/apps/mobile-webview` for Phase 1 app delivery after the web app has a URL.
- Use `mobile/apps/mobile-react-native` for Phase 2 native screens only after a screen has passed web visual QA.
- Keep `mobile/packages/shared/src/appManifest.ts` aligned with `product/SCREEN_MANIFEST.json`.
- Treat `product/PRD.md`, `product/PRODUCT_SPEC.json`, and `product/FEATURE_MANIFEST.json` as product functionality sources. If PRD content is still placeholder, ask for the real PRD before inventing major product behavior.
- For future additions or edits, use `product/changes/CHANGE_REQUEST_TEMPLATE.md` and the `/change` workflow instead of regenerating the app.

Phase A — Visual inventory (no code)
For each prototype page or concrete UI entry, first write a compact reference reading:
- Layout anatomy: fixed / scrollable / overlay regions
- Alignment system: gutters, columns, baselines, numeric alignment
- Surface model: which blocks are truly cards/sheets vs flat sections
- Content realism: row counts, label lengths, number/date formats, truncation, metadata
- Interaction evidence: active/selected/disabled/menu/nav states
- Component boundaries: reusable components vs layout wrappers

Then output a table with one row per visual block:
| Block | Color roles (from CLAUDE.md Dark Theme) | Spacing tier | Typography tier | Interactive? | Component mapping |

Color mapping rules:
- Darkest canvas area = background
- Card/sheet one step lighter = surfaceContainer
- Brightest CTA / active tab = primary
- Body text on dark = onSurface, metadata/secondary = onSurfaceVariant
- Green price movement = bullish (never primary), Red = bearish (never error)

Spacing tiers: compact ~48px row / standard ~64px row / hero 120px+ block
Typography tiers: display (largest balance) / headline / title (section headers) / body (row text) / label (metadata)

Anti-demo constraints:
- Do not add hero sections, decorative gradients, glassmorphism, glow effects, oversized empty cards, or illustration panels unless visible in the reference.
- Do not wrap every section in a card; preserve the reference's surface model.
- Do not inflate whitespace, rounding, shadows, saturation, or icon density beyond the screenshot.
- Do not use lorem ipsum, generic SaaS slogans, or perfectly symmetrical placeholder data.

Phase B — Component inventory
Output: | Component | Responsibility | Appears in screens |
Before Phase C, run a Component Reuse Gate against Storybook/source:
| Requested block | Existing candidate | Score /10 | Decision: reuse / extend / new |
Score by intent, anatomy, props/variants, states, and story coverage — not exact name.
Example: a clip named DateTab should reuse Tab/Tabs/SegmentedControl/ChipGroup when the behavior is selectable labels.
Stop and wait for my approval before Phase C.

Phase C — Storybook-first implementation
For each component: src/components/Name.tsx + Name.stories.tsx (Default, AllVariants, AllStates).
All values via var(--…) CSS tokens — zero hardcoded hex.
Install and connect Storybook MCP first: npx storybook add @storybook/addon-mcp, run Storybook in one terminal, then run npx mcp-add --type http --url "http://localhost:6006/mcp" --scope project in another terminal (adjust port if needed).
Use list-all-documentation / get-documentation before using props, get-storybook-story-instructions before writing stories, and run-story-tests after story changes when available.
If the reuse gate says reuse/extend, update the existing component and story instead of creating a same-looking new component under the requested name.
Verify in npx storybook dev before the next component.

Phase D — Compose product screens
Screen files import ONLY Phase C components. Match reference screenshots block by block.
If a block needs a missing component, go back to Phase B/C — no inline one-off JSX.

Phase E — Final audit
Run: grep -rE '#[0-9a-fA-F]{3,6}' src/components src/pages 2>/dev/null | grep -v '\.stories\.'
Fix all violations. Confirm dark/light toggle works. Confirm bullish/bearish are visually distinct from primary/error in every chart.
```

---

## Option Codex — adapted for OpenAI Codex CLI

Codex auto-loads `AGENTS.md` (not `CLAUDE.md`) and has **no slash commands** and **no `@file` syntax**. Paste this as your first message — it explicitly instructs Codex to read every file the slash commands would have loaded:

```
You are working in a design-spec workspace generated by cm-ai-ui-explorer. AGENTS.md has been auto-loaded.

Read these files in order before doing anything else:
1. CLAUDE.md (full design spec — read in full)
2. design/reference-visual-analysis.md
3. start-here/BUILD_PLAN.md
4. start-here/TASKS.md
5. product/SCREEN_MANIFEST.json
6. product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json
7. product/docs/product-change-workflow.md
8. mobile/MOBILE_APP_ROADMAP.md, mobile/MOBILE_BUILD_MATRIX.json
9. skills/design-system-governance/SKILL.md and principles.md
10. skills/ui-screenshot-to-storybook-product/SKILL.md
11. skills/ui-visual-parity/SKILL.md

Then read the reference inputs:
design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json
design-reference/source-folder/README.md
design-reference/source-folder/files/testing-demo-v2/ref/wise/docs/design-system.md
design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.css
design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.json
design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html
design-reference/source-folder/files/testing-demo-v2/talk-ui/homepage.css
(If your Codex mode is vision-capable, parse them visually. Otherwise ask me to describe them or paste OCR text — do not invent visual details.)

Now follow the Phase A → E workflow from skills/ui-screenshot-to-storybook-product/SKILL.md and CLAUDE.md, in strict order:

Phase A — Visual inventory (NO code).
For each prototype page or concrete UI entry, write the reference reading (layout anatomy, alignment system, surface model, content realism, interaction evidence, component boundaries) and a table:
| Block | Color roles (from CLAUDE.md Dark Theme) | Spacing tier | Typography tier | Interactive? | Component mapping |
Apply the Reference Fidelity Protocol from CLAUDE.md — no hero sections, gradients, glassmorphism, or AI-demo flourishes unless the reference shows them.

Phase B — Component inventory.
Output: | Component | Responsibility | Appears in screens |
Then run the Component Reuse Gate:
| Requested block | Existing candidate | Score /10 | Decision: reuse / extend / new |
STOP and ask me to confirm before Phase C, unless I explicitly said "proceed autonomously".

Phase C — Storybook-first.
For each component: src/components/Name.tsx + Name.stories.tsx (Default, AllVariants, AllStates), tags: ['autodocs'], all values via var(--…) tokens. Install Storybook MCP per CLAUDE.md before deciding props. Verify in npx storybook dev.

Phase D — Compose product screens from Phase C exports only. No inline JSX duplicating documented components.

Phase E — Token audit:
grep -rE '#[0-9a-fA-F]{3,6}' src/components src/pages 2>/dev/null | grep -v '\.stories\.'
Fix all violations. Confirm dark/light toggle works. Confirm bullish/bearish stay distinct from primary/error.

Translation rules (since Codex has no @-syntax):
- "@design-reference/screen-N.png" in any spec means: read the file at "design-reference/screen-N.png".
- "@skills/.../SKILL.md" means: read and follow the file at "skills/.../SKILL.md".
- ".claude/commands/<name>.md" describes a workflow you should execute by reading that file.
```

For a single-screen Codex run, replace the Phase A→E block above with:

```
Implement the screen at design-reference/screen-0.png following skills/ui-screenshot-to-storybook-product/SKILL.md. Run Phase 1 (visual parsing) → Phase 2 (token mapping + Component Reuse Gate) → Phase 3 (Storybook) → Phase 4 (screen composition). All values via var(--…) tokens. Stop and ask me to confirm the component list before writing code.
```

---

## Option D — Autonomous full build

Use this when you want the AI to keep going without pausing after Phase B:

```
Read CLAUDE.md, design/reference-visual-analysis.md, start-here/BUILD_PLAN.md, start-here/TASKS.md, product/SCREEN_MANIFEST.json,
mobile/MOBILE_APP_ROADMAP.md, mobile/MOBILE_BUILD_MATRIX.json,
product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json, product/docs/product-change-workflow.md,
skills/design-system-governance/SKILL.md, and skills/ui-screenshot-to-storybook-product/SKILL.md.

Proceed autonomously through Phase A → E. Do not stop for approval unless:
- a required reference image or asset is missing
- two materially different product interpretations are equally likely
- dependency installation or build tooling fails
- the extracted tokens conflict with the screenshots in a way that changes the visual direction

At the end of each phase, write a short checkpoint summary, update the relevant checklist items from start-here/TASKS.md, then continue.
Before final response, run the verification commands in start-here/TASKS.md and report pass/fail with any remaining visual gaps.
```

---

## Option B — Single screen

```
Read CLAUDE.md and design/reference-visual-analysis.md. Implement the screen shown in @design-reference/screen-0.png.

Follow skills/ui-screenshot-to-storybook-product/SKILL.md:
1. First describe the screenshot's layout anatomy, alignment system, surface model, content density, and interaction evidence.
2. Parse the screenshot into a UI inventory table:
   | Block | Color roles | Spacing tier | Typography tier | Interactive? |
3. Map each block to the matching token vars from CLAUDE.md
4. Implement src/components/BlockName.tsx + BlockName.stories.tsx per block
5. Compose the screen from those components only — no screen file until stories pass Storybook review
```

---

## Option C — Incremental (manual control)

Start with:
```
Read CLAUDE.md and design/reference-visual-analysis.md. List all components needed for this app grouped as:
- Shared (appears in 3+ screens)
- Semi-shared (2 screens)
- Unique (1 screen)
Inventory only — no code yet.
```

Then for each component:
```
Implement [ComponentName] per the CLAUDE.md spec.
Requirements:
- All values via var(--…) CSS tokens, zero hardcoded hex
- src/components/ComponentName.tsx + ComponentName.stories.tsx
- Stories: Default, AllVariants, AllStates
- Use Storybook MCP docs/tools before choosing props or story patterns
- Confirm visually in npx storybook dev before the next component
```

---

## Slash commands (Claude Code only)

If this pack was opened in Claude Code, type these to trigger pre-written workflows:

| Command | What it does |
|---------|-------------|
| `/build` | Starts Phase A → E full product build |
| `/prd [file]` | Ingests or refreshes product requirements into PRD / product spec / feature manifest |
| `/change [file]` | Applies an incremental product change without regenerating the whole app |
| `/audit` | Audits codebase for hardcoded values and token violations |
| `/compare [screen/page]` | Compares current UI against all references, or one target such as `screen-2` / `Dashboard` |
| `/component Button` | Implements a specific component with Storybook stories |

---

## Slash command equivalents for Cursor / Codex

Cursor and Codex have no slash commands. The full source for each command is in `.claude/commands/<name>.md` — read that file for the complete instructions. Below are **paste-ready short prompts** that produce the same behavior; replace placeholder values (`<ComponentName>`, `<screen>`, `<file>`) before pasting. For more aggressive automation, paste the entire body of the matching `.claude/commands/<name>.md` file instead.

### `/audit` — token & hardcoded-value audit

```
Audit this codebase for design system compliance against CLAUDE.md. Run these checks and report results:
1. grep -rE '#[0-9a-fA-F]{3,6}|rgba?\(' src/components src/pages src/screens 2>/dev/null | grep -v '\.stories\.'
2. grep -rn 'style={{' src/components 2>/dev/null | grep -E '"(color|background|borderRadius|padding|margin):' | grep -v 'var(--'
3. Verify tokens.css contains: --color-bullish, --color-bearish, --color-background, --color-surface-container, --color-primary, --color-on-surface, --radius-cmp-button, --radius-cmp-card, --shadow-sm, --space-sm, --font-family
4. grep -rL "autodocs" src/components --include="*.stories.tsx" 2>/dev/null
For every violation: identify the correct var(--…) from CLAUDE.md and apply the fix inline. Report: ✅ clean OR violations fixed with file:line references.
```

### `/compare` — visual parity audit

```
Follow skills/ui-visual-parity/SKILL.md to compare a reference UI against an implementation target. Inputs: <screenshot path or screen name or URL or TSX file — any combination>.

Run in this order:
1. Discovery — find reference screenshots and entry points; identify the styling system and tokens.
2. Target Resolution — apply the priority order (screenshot+URL > screenshot+file > screenshot+route > screenshot only > URL/route only > file only > empty). Ask before editing if multiple plausible matches exist.
3. Comparison — output: | Block | Expected (reference) | Actual (implementation) | Difference | Owner | Fix |
4. Precision — stabilize render conditions, inspect computed styles, map measurements to tokens.
5. Component-First Fix Strategy — layered order: token → primitive → component variant/props → composition → page-only style. State which layer owns each fix before editing.
6. Cite evidence per fix (screenshot observation / computed style / token value / component source).

Never apply a hardcoded hex/px/rgba in a screen file to make a visual match. If a value is missing as a token, add the token first.
```

### `/component` — implement a single component

```
Implement <ComponentName> following CLAUDE.md and skills/ui-screenshot-to-storybook-product/SKILL.md.

Custom requirements (optional): <short spec — variants, states, behavior, reference image>.

Steps:
1. Run the Component Reuse Gate first:
   | Requested block | Candidate | Evidence source | Intent /3 | Anatomy /3 | Props/variants /2 | States /1 | Token/story coverage /1 | Total /10 | Decision |
   Reuse at 8-10, extend at 6-7, create new only at 0-5 with explicit justification.
2. If new wins, create src/components/<ComponentName>.tsx using only var(--…) tokens — zero hardcoded hex.
3. Create src/components/<ComponentName>.stories.tsx with: Default, AllVariants, AllStates (hover/focus/disabled/loading/error as applicable), tags: ['autodocs'].
4. Use Storybook MCP (list-all-documentation, get-documentation, get-storybook-story-instructions) before deciding props.
5. Verify in npx storybook dev before reporting done.
```

### `/prd` — ingest or refresh product requirements

```
Ingest or refresh product requirements following the workflow in product/docs/product-change-workflow.md.

Input: <path to PRD file, or paste of PRD content, or "empty" to re-read existing product/PRD.md>.

Steps:
1. Read CLAUDE.md, product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json, product/SCREEN_MANIFEST.json, mobile/MOBILE_BUILD_MATRIX.json, and mobile/packages/shared/src/appManifest.ts.
2. Normalize the provided PRD into product/PRD.md preserving the user's intent and unresolved questions.
3. Update product/PRODUCT_SPEC.json (productName, targetUsers, goals, nonGoals, coreJobs, domainEntities, businessRules, nonFunctionalRequirements, successMetrics, openQuestions).
4. Update product/FEATURE_MANIFEST.json (id, name, priority, status, user stories, acceptance criteria, data requirements, affected screens, related flows, dependencies).
5. Reconcile FEATURE_MANIFEST against SCREEN_MANIFEST. Add missing screen mappings as proposals; do not delete existing screens unless the PRD explicitly removes them.
6. Update mobile/packages/shared/src/productRequirements.ts and featureManifest.ts from the JSON manifests.
7. Auto-generate product/flows/uiux-flow.json (validate against product/templates/UIUX_FLOW.schema.json; one node per screen; edges = navigation transitions; position: null for all nodes).
8. Update start-here/TASKS.md with PRD/feature/screen/flow follow-up tasks.

Output a coverage table: | Requirement | Source | Feature mapping | Screen mapping | Flow node id | Status | Open question |
Stop after manifest, flow, and task updates unless I explicitly ask for implementation.
```

### `/change` — apply an incremental product change

```
Apply an incremental product change following product/docs/product-change-workflow.md. Do not rebuild the project from scratch.

Input: <path to change request file, or inline change description>.

Steps:
1. Read CLAUDE.md, product/docs/product-change-workflow.md, product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json, product/SCREEN_MANIFEST.json, mobile/MOBILE_BUILD_MATRIX.json, and mobile/packages/shared/src/appManifest.ts, start-here/TASKS.md, and the change request.
2. Classify: add feature / modify feature / remove feature / change flow / change copy / mobile-native promotion / non-functional requirement.
3. Output a delta plan before editing: | Area | Current state | Requested change | Files to update | Verification |
4. Update product docs first (PRD only for product-level changes; features/, flows/, manifests, mobile/packages/shared, product/flows/uiux-flow.json).
5. Then update Storybook components, screens, routes, data models, and mobile scaffold only where affected.
6. Run scoped verification plus full build when code changes.

Final report: change summary / docs updated / components changed / tests run / open questions.
Preserve unrelated behavior and visual decisions.
```

> **Tip for Cursor:** all the slash command bodies are full markdown — you can also just attach the file with `@.claude/commands/<name>.md` and say "follow this exactly with input: …".
> **Tip for Codex:** AGENTS.md already loads at session start. To run a command, prepend "Follow .claude/commands/<name>.md with input: …" — Codex will read the file and execute the workflow.

---

## Correction prompt — paste when AI drifts

```
Stop. Audit the last component you wrote:
1. List every hardcoded color, spacing, or radius value
2. Replace each with the correct var(--…) from tokens.css aligned with CLAUDE.md
3. If a token is missing from tokens.css, add it now before continuing
Do not move to the next component until this audit passes.
```

---

## Pre-ship checklist

- [ ] `tokens.css` defines every `--color-*`, `--radius-cmp-*`, `--space-*` from the spec
- [ ] `product/PRD.md`, `product/PRODUCT_SPEC.json`, `product/FEATURE_MANIFEST.json`, and `product/SCREEN_MANIFEST.json` agree on implemented features and screens
- [ ] `--color-bullish` and `--color-bearish` exist independently of `--color-primary` / `--color-error`
- [ ] Every reusable component has a `.stories.tsx` (Default + variants + states)
- [ ] Storybook MCP is installed with `@storybook/addon-mcp`, connected via `mcp-add`, and used for component docs/story/test checks
- [ ] Component Reuse Gate completed for every clip/collage/requested component; no duplicate component was created only because the suggested name differed
- [ ] Product screen files contain only `import` + composition — no inline design-system markup
- [ ] Dark ↔ light theme toggle switches all colors simultaneously with zero hardcoded values
- [ ] Running app visually matches the screenshots in `./design-reference/`
