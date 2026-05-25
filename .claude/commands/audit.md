Audit this codebase for design system compliance against CLAUDE.md.

Run these checks and report results:

1. Hardcoded colors:
   grep -rE '#[0-9a-fA-F]{3,6}|rgba?\(' src/components src/pages src/screens 2>/dev/null | grep -v '\.stories\.'

2. Inline style violations (color/background without var(--)):
   grep -rn 'style={{' src/components 2>/dev/null | grep -E '"(color|background|borderRadius|padding|margin):' | grep -v 'var(--'

3. Missing token definitions — verify tokens.css contains:
   --color-bullish, --color-bearish, --color-background, --color-surface-container,
   --color-primary, --color-on-surface, --radius-cmp-button, --radius-cmp-card,
   --shadow-sm (or --shadow-1), --space-sm, --font-family

4. Component autodocs coverage — verify reusable component stories carry tags: ['autodocs'] (foundation stories intentionally opt out):
   grep -rL "autodocs" src/components --include="*.stories.tsx" 2>/dev/null

For every violation: identify the correct var(--…) from CLAUDE.md and apply the fix inline.
Report: ✅ clean OR violations fixed with file:line references.
