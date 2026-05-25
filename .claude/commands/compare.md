Follow the workflow in skills/ui-visual-parity/SKILL.md to compare a reference UI against an implementation target and apply focused visual fixes using the project's tokens and shared components. Treat visual repair as a design-system exercise — trace each mismatch back to its owner before editing.

Input: $ARGUMENTS

Supported input forms (see the Inputs section of the skill for full details):
- Empty input: discover all reference screenshots and pair each with the likely page in src/pages/, src/screens/, src/app/, src/routes/, or component/story files.
- Screenshot only: `/compare screen-2`, `/compare design-reference/screen-2.png`, `/compare designs/dashboard.png`, or attach an image.
- URL or route only: `/compare http://localhost:5173/markets`, `/compare /dashboard`.
- File only: `/compare src/pages/Dashboard.tsx`, `/compare Dashboard.tsx`, `/compare Dashboard.stories.tsx`.
- Screenshot + URL/route/file: any combination as documented in the skill.

Run the skill in this order, citing evidence at each step:

1. **Discovery** — find reference screenshots (check `reference/`, `references/`, `screenshots/`, `design/`, `designs/`, `mockups/`, `spec/`, `specs/`, `public/`), entry points (src/pages, src/screens, src/app, app/, pages/, src/routes, src/components, Storybook stories), and the project's styling system (Tailwind, CSS modules, CSS-in-JS, design tokens, theme files, cm-ui-library).
2. **Target Resolution** — apply the priority order in the skill (screenshot+URL > screenshot+file > screenshot+route > screenshot only > URL/route only > file only > empty). If multiple plausible matches exist, list candidates and ask before editing.
3. **Comparison Workflow** — for each selected screen: describe the reference's visual structure; inspect the implementation source and its imported components; trace component ownership (shared component / primitive / page composition / ad hoc markup); cross-reference colors/spacing/typography/radius/elevation against tokens. Output a discrepancy table:
   | Block | Expected (reference) | Actual (implementation) | Difference | Owner | Fix |
4. **Precision Workflow** — stabilize render conditions (viewport, color scheme, fonts, mock data); compare by region; inspect computed styles (`font-size`, `line-height`, `color`, `padding`, `border-radius`, `box-shadow`, layout); map measurements to tokens; use screenshot diff after fixes; set explicit tolerance for anti-aliasing/subpixel artifacts.
5. **Evidence Requirements** — every planned fix must cite evidence (screenshot observation, computed style, token value, component source, or story).
6. **Component-First Fix Strategy — non-negotiable order:**
   1. **Token/theme layer** first: repeated color/spacing/typography/radius/shadow/elevation values.
   2. **Primitive/shared component layer**: fix the owner, not the page instance.
   3. **Composition/layout layer**: layout, ordering, section spacing, responsive structure.
   4. **Page-only style layer**: only when the difference is unique to the selected target and no shared owner exists.
   State which layer owns each fix before editing.
7. **Regression Guardrails** — when changing tokens, themes, primitives, or shared component defaults, inspect representative call sites or stories before/after. Prefer variants/props/slots over breaking shared defaults.
8. **Stop Conditions** — stop and ask before editing when the reference is ambiguous, the target cannot be rendered, multiple matches are equally plausible, or the fix would change product behavior, copy, data flow, accessibility semantics, or shared component defaults with unclear blast radius.

**Never apply a hardcoded hex, raw px, or rgba() value in a screen file to achieve a visual match. If a value does not exist as a token, add the token first at the correct layer.**

Cross-reference all token values against the Dark/Light Theme sections in CLAUDE.md (or the discovered token files in this project). Do not rewrite unrelated screens or components — keep changes scoped to visual parity.
