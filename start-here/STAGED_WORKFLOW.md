# Staged Workflow — design-spec

Use this guide when you want higher-quality output than a one-shot build. The goal is to keep each AI session short, persist decisions in files, and ask the user before crossing into the next riskier stage.

## How to run this workflow

1. Open `start-here/KICKSTART.md`.
2. Paste the **Recommended Path** prompt to run **Stage 1 — Design Analysis** only.
3. When the AI stops, review `start-here/SESSION_STATE.md`.
4. Choose the next step:
   - **Continue same session** if the context is still short and the decision is simple.
   - **Start a fresh session** if the previous stage was long, visual-heavy, or changed product direction.
   - **Run a scoped stage** for one screen, one component group, or one audit.
   - **Stop** for manual review.

## Context control rule

At every checkpoint, the AI MUST update `start-here/SESSION_STATE.md` before asking what to do next. A fresh session should read only the files listed in the next stage plus `SESSION_STATE.md`; do not paste the entire old conversation unless the user explicitly needs it.

## Reference inputs

- `design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json` and `design-reference/source-folder/files/`; inspect prototype docs/code as confirmed reference-only source
- `mobile/MOBILE_APP_ROADMAP.md` and `mobile/MOBILE_BUILD_MATRIX.json` for mobile target strategy

```
design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json
design-reference/source-folder/README.md
design-reference/source-folder/files/testing-demo-v2/ref/wise/docs/design-system.md
design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.css
design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.json
design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html
design-reference/source-folder/files/testing-demo-v2/talk-ui/homepage.css
```

---

## Stage 1 — Design Analysis

**Purpose:** extract design principles, design elements, and token intent before any implementation.

**Read first:**
- `CLAUDE.md`
- `design/reference-visual-analysis.md`
- `product/SCREEN_MANIFEST.json`
- `start-here/SESSION_STATE.md`
- Reference assets listed above
- `design/prototype-component-inventory.md`, `design/prototype-token-audit.md`, and `product/PROTOTYPE_SCREEN_MAP.md`
- `design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json`

**Prompt:**

```
Run Stage 1 — Design Analysis only.

Read CLAUDE.md, design/reference-visual-analysis.md, product/SCREEN_MANIFEST.json, start-here/SESSION_STATE.md, and these reference assets:
design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json
design-reference/source-folder/README.md
design-reference/source-folder/files/testing-demo-v2/ref/wise/docs/design-system.md
design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.css
design-reference/source-folder/files/testing-demo-v2/tokens/design-tokens.json
design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html
design-reference/source-folder/files/testing-demo-v2/talk-ui/homepage.css

Prototype Folder Analysis:
- Read `design-reference/source-folder/SOURCE_FOLDER_MANIFEST.json` first.
- Inspect the packaged prototype files under `design-reference/source-folder/files/`, prioritizing design-system docs, token/theme files, CSS variables, HTML entry pages, component examples, and product docs listed in the manifest.
- Treat the folder as confirmed design/product intent, but not as production code to copy. Extract behavior, component anatomy, states, token roles, and screen composition before implementation.
- Create `design/prototype-component-inventory.md` with component candidates, responsibilities, slots, variants, states, source file evidence, and Storybook story requirements.
- Create `design/prototype-token-audit.md` with observed CSS variables/tokens, hardcoded values worth tokenizing, typography/radius/spacing patterns, and gaps.
- Create `product/PROTOTYPE_SCREEN_MAP.md` mapping concrete prototype pages/routes to product screens and Storybook components.
- Candidate counts: 1 entry pages, 1 stylesheets, 2 token sources, 0 component sources, 0 product docs.
6. Also produce design/staged-design-analysis.md with shared design principles, design elements, M3 token summary, screen inventory, and open questions

Do not write app, component, Storybook, or token CSS code.
Update start-here/SESSION_STATE.md, then stop and ask me which next action to take.
```

**Outputs:**
- `design/staged-design-analysis.md`
- `design/prototype-component-inventory.md` and `design/prototype-token-audit.md` when using Prototype Folder source
- `product/PROTOTYPE_SCREEN_MAP.md` when using Prototype Folder source
- Updated `start-here/SESSION_STATE.md`

**Checkpoint question:** continue to Stage 2, start a fresh session, run a scoped stage, or stop.

---

## Stage 2 — Product Plan

**Purpose:** turn analysis into a build plan, component inventory, and optional Spectra change before writing UI code.

**Read first:**
- `start-here/SESSION_STATE.md`
- `design/staged-design-analysis.md`
- `design/prototype-component-inventory.md`, `design/prototype-token-audit.md`, and `product/PROTOTYPE_SCREEN_MAP.md` when using Prototype Folder source
- `product/PRD.md`, `product/PRODUCT_SPEC.json`, `product/FEATURE_MANIFEST.json`, `product/SCREEN_MANIFEST.json`
- `start-here/BUILD_PLAN.md` and `start-here/TASKS.md`

**Prompt:**

```
Run Stage 2 — Product Plan only.

Read start-here/SESSION_STATE.md, design/staged-design-analysis.md, design/prototype-component-inventory.md and design/prototype-token-audit.md if present, product/PROTOTYPE_SCREEN_MAP.md if present, product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json, product/SCREEN_MANIFEST.json, start-here/BUILD_PLAN.md, and start-here/TASKS.md.

Produce:
1. A screen plan: | Screen | Route | Reference | Primary components | Product behavior |
2. A component inventory: | Component | Responsibility | Screens | Reuse/extend/new decision | Storybook stories |
3. A Component Reuse Gate table for any likely shared component
4. A revised implementation order for Stage 3 and Stage 4
5. If Spectra is available, create or update an initial product-build change; if not, keep using start-here/TASKS.md

Do not write implementation code.
Update start-here/SESSION_STATE.md, then stop and ask me to approve or edit the plan before Stage 3.
```

**Outputs:**
- Approved screen/component plan in chat or a new planning file
- Optional Spectra change artifacts
- Updated `start-here/SESSION_STATE.md`

**Checkpoint question:** approve plan, revise plan, fresh session for Stage 3, or stop.

---

## Stage 3 — Token Foundations

**Purpose:** build the token layer and Storybook foundation docs before app-specific screens.

**Read first:**
- `start-here/SESSION_STATE.md`
- `design/staged-design-analysis.md`
- `design/prototype-token-audit.md` when using Prototype Folder source
- `skills/design-system-governance/SKILL.md`
- `skills/ui-screenshot-to-storybook-product/SKILL.md`
- `start-here/TASKS.md`

**Prompt:**

```
Run Stage 3 — Token Foundations only.

Read start-here/SESSION_STATE.md, design/staged-design-analysis.md, design/prototype-token-audit.md if present, skills/design-system-governance/SKILL.md, skills/ui-screenshot-to-storybook-product/SKILL.md, and start-here/TASKS.md.

Implement only:
1. src/styles/tokens-ref.css, tokens-sys.css, tokens-comp.css, and tokens.css
2. app + Storybook token imports and dark/light theme attributes
3. Storybook foundation pages for Color, Typography, Spacing, Shape, Elevation, and Iconography
4. the shared Icon component and story

Do not build product screens yet.
Run the token hardcoded-value audit listed in start-here/TASKS.md.
Update start-here/SESSION_STATE.md with files changed and verification results, then stop and ask what scoped build should run next.
```

**Outputs:**
- Token CSS layer
- Foundation guide stories
- Updated `start-here/SESSION_STATE.md`

**Checkpoint question:** choose one screen/component group for Stage 4, start fresh session, or run an audit.

---

## Stage 4 — Scoped Build

**Purpose:** implement one screen or one component group at a time.

**Read first:**
- `start-here/SESSION_STATE.md`
- `design/staged-design-analysis.md`
- `design/prototype-component-inventory.md` and `product/PROTOTYPE_SCREEN_MAP.md` when using Prototype Folder source
- Existing token and Storybook files
- The reference screenshot for the selected screen

**Prompt:**

```
Run Stage 4 — Scoped Build for: <screen or component group>.

Read start-here/SESSION_STATE.md, design/staged-design-analysis.md, design/prototype-component-inventory.md and product/PROTOTYPE_SCREEN_MAP.md if present, the relevant reference screenshot or prototype folder entry, existing token files, existing Storybook stories, and skills/ui-screenshot-to-storybook-product/SKILL.md.

For this scope only:
1. Run the Component Reuse Gate
2. Build or extend Storybook-documented components
3. Verify stories before composing the screen
4. Compose the screen only from documented components
5. Run a scoped build or smoke check

Do not modify unrelated screens.
Update start-here/SESSION_STATE.md with completed scope, files changed, verification results, and recommended next scope.
Stop and ask me what to run next.
```

**Outputs:**
- One verified screen or component group
- Updated `start-here/SESSION_STATE.md`

**Checkpoint question:** next screen, visual parity for this screen, fresh session, or stop.

---

## Stage 5 — Visual Parity

**Purpose:** compare the built UI against the reference assets and apply token-first fixes.

**Read first:**
- `start-here/SESSION_STATE.md`
- `skills/ui-visual-parity/SKILL.md`
- Relevant reference screenshot(s)
- Running app URL or target screen file

**Prompt:**

```
Run Stage 5 — Visual Parity for: <all screens or one screen>.

Read start-here/SESSION_STATE.md and skills/ui-visual-parity/SKILL.md.
Compare the implementation against the relevant design-reference screenshot(s).
Output a table: | Block | Expected | Actual | Difference | Owner layer | Fix |

Apply fixes in this order only: token → primitive → component variant/props → composition → page-only style.
Never add hardcoded hex, px, rgba, radius, or shadow values to make the visual match.
Update start-here/SESSION_STATE.md with gaps fixed, gaps remaining, and verification commands run.
```

**Outputs:**
- Visual parity discrepancy table
- Token-first fixes
- Updated `start-here/SESSION_STATE.md`

---

## Sub-agent guidance

Default context-control mechanism: **fresh sessions plus `SESSION_STATE.md`**.

Use sub-agent only for bounded review tasks:
- visual parity audit for one screen
- hardcoded token audit
- docs cross-check between README, KICKSTART, BUILD_PLAN, and TASKS
- independent component inventory review before Stage 4

Avoid sub-agent for concurrent write tasks:
- do not let two agents edit the same token files
- do not let two agents implement components that depend on each other
- do not let one agent edit screen composition while another changes the component contract it imports

If sub-agents are used, the primary agent remains responsible for merging findings, updating `SESSION_STATE.md`, and running final verification.
