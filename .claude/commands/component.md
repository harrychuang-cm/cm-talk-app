Implement a new design system component following CLAUDE.md and any custom requirements in the command.

Input: $ARGUMENTS

Supported input forms:
- Name only: `/component Card`.
- Name + short spec: `/component PriceCard compact card with title, value, delta, sparkline, loading state`.
- Name + detailed requirements: `/component TradeTicket needs buy/sell tabs, amount input, estimated fee, confirm CTA, disabled and error states`.
- Name + reference source: `/component NewsCard match design-reference/screen-2.png news list item`.

First parse the input:
1. Treat the first meaningful word or PascalCase phrase as the component name.
2. Treat the remaining text as custom requirements: visual style, content model, variants, states, behavior, accessibility, or reference files.
3. Find the closest matching component in CLAUDE.md (Standard Component Design Specs or Discovered Components section).
4. If custom requirements conflict with CLAUDE.md tokens, keep the custom behavior but still use the closest valid token roles. Ask the user before inventing new tokens.
5. Treat the component name as a hypothesis. Before creating a new file, query Storybook MCP and existing stories/source for candidates with similar intent/anatomy/variants/states even if the names differ (e.g. DateTab → Tab/SegmentedControl/ChipGroup).
6. If the component name or requirements are ambiguous, ask one concise clarification before writing code.

Implementation steps:
1. Produce a Component Reuse Gate table:
   | Requested block | Candidate | Evidence source | Intent match 0-3 | Anatomy match 0-3 | Props/variants match 0-2 | States match 0-1 | Token/story coverage 0-1 | Total /10 | Decision |
   Reuse at 8-10, extend/wrap at 6-7, create new only at 0-5 with a short explanation.
2. If reuse/extend wins, update that existing component and its co-located story. If new wins, create src/components/<ComponentName>.tsx:
   - All colors, radii, spacing, and typography via var(--…) CSS tokens only — zero hardcoded hex.
   - Match CLAUDE.md token roles, dimensions, variants, and the custom requirements from Input.
   - Include typed props for required content, variants, states, and callbacks.
   - Add accessible labels, keyboard support, and semantic HTML when interactive.
3. Create or update src/components/<ComponentName>.stories.tsx:
   - Default story.
   - AllVariants story covering visual variants from CLAUDE.md and Input.
   - AllStates story covering hover/focus/disabled/loading/error/empty states when applicable.
   - ExampleWithData story when the custom requirements describe realistic product content.
   - tags: ['autodocs'].
4. Run npx storybook dev and verify the story matches the spec visually.
5. Report: component and stories ready, or list what still needs adjustment.
