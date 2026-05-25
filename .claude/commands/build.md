Start the full Phase A→E product build for this app (target platform: **mobile**).

Read CLAUDE.md, start-here/STAGED_WORKFLOW.md, start-here/SESSION_STATE.md, start-here/BUILD_PLAN.md, start-here/TASKS.md, product/PRD.md, product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json, product/SCREEN_MANIFEST.json, mobile/MOBILE_APP_ROADMAP.md, mobile/MOBILE_BUILD_MATRIX.json, skills/design-system-governance/SKILL.md, and skills/ui-screenshot-to-storybook-product/SKILL.md.

Attach reference screenshots using @design-reference/screen-N.png syntax in your next message.

Then follow this exact order:

**Checkpoint discipline** — If the user did not explicitly ask for autonomous execution, update `start-here/SESSION_STATE.md` and ask what to do next after Phase A, after Phase B, after Token/Foundations setup, and after each completed screen. Offer: continue in this session, start a fresh session using `SESSION_STATE.md`, run a scoped next stage, or stop.

**Phase 0 — Product requirements** — If product/PRD.md is still placeholder content, continue with the visual/reference workflow but do not invent major product behavior. If a real PRD is present, run the /prd workflow first and reconcile product/PRODUCT_SPEC.json, product/FEATURE_MANIFEST.json, product/SCREEN_MANIFEST.json, and mobile/packages/shared before Phase A.

**Phase A** — For each screenshot, first summarize layout anatomy, alignment system, surface model, content realism, interaction evidence, and component boundaries. Then output a table: | Block | Color roles (from CLAUDE.md Dark Theme) | Spacing tier (compact/standard/hero) | Typography tier (display/headline/title/body/label) | Interactive? | Component mapping |
No code in Phase A.

Apply the Reference Fidelity Protocol in CLAUDE.md. Do not add hero sections, decorative gradients, glassmorphism, excessive cards, generic placeholder content, or "AI demo" visual flourishes unless the reference clearly shows them.

**Phase B** — Distill into: | Component | Responsibility | Appears in screens |
Also list the 12 mandatory baseline components if not already covered: Button, Input, Card, Modal/Dialog, Label, Alert, Badge/Chip, Avatar, BottomNav, Icon, Tab, Dropdown. Map every reference screenshot to the route/component in product/SCREEN_MANIFEST.json.
Before Phase C, run the Component Reuse Gate: query Storybook MCP and source/stories for semantically similar components, then output | Requested block | Existing candidate | Score /10 | Decision: reuse / extend / new |.
Wait for user approval before Phase C unless the user explicitly asked for autonomous execution.

**Phase C** — Implement components in order: (1) baseline layer first (Button → Input → Card → Modal/Dialog → Label → Alert → Badge/Chip → Avatar → BottomNav → Icon → Tab → Dropdown), then app-specific. For each: src/components/Name.tsx + Name.stories.tsx with tags: ['autodocs'] (Default, AllVariants, AllStates). Verify in npx storybook dev.
Before writing or changing component props, connect Storybook MCP per CLAUDE.md and use list-all-documentation / get-documentation / get-storybook-story-instructions. Run run-story-tests after story changes when available.

**Phase D** — Compose screens from Phase C exports only. No inline JSX that duplicates a documented component.

**Phase E** — Complete start-here/TASKS.md verification: app build, Storybook, hardcoded value audit, responsive smoke checks, and reference comparison.
Fix all violations. Verify dark/light toggle. Confirm semantic chart/status colors are distinct from primary/error where applicable.


---

## Phase F — UI Visual Parity Check *(建議在交付前執行)*

Phase E 已完成。建議進行視覺比對，逐畫面確認實作結果與 `design-reference/` 截圖的對齊程度，找出色差、間距偏移、圓角不一致等細節。

### 如何執行

**Claude Code：**
```
/compare                     # 全畫面比對（所有截圖 vs 所有畫面）
/compare HomeScreen          # 指定畫面
/compare screen-1.png        # 指定截圖
```

**Cursor / Codex：**
貼上 `.claude/commands/compare.md` 全文，或直接執行：
```
Follow skills/ui-visual-parity/SKILL.md to compare the implementation against design-reference/ screenshots.
```

### 💡 模型建議：GPT-5.5 Vision

GPT-5.5（vision 版本）在以下視覺比對任務上有顯著優勢：
- **多張截圖同時分析**：可一次比較 3–5 張截圖，找出跨畫面的系統性偏差
- **細微色差辨識**：對 5–10% 的色彩偏移有更高靈敏度，適合 token 對齊驗證
- **間距與對齊偏差**：能精確量測 2–4px 的間距差異與基線不對齊

建議在校對階段切換至 GPT-5.5，以獲得更精準的比對結果。

### 選擇下一步

**A)** 執行 `/compare`（全畫面比對）
**B)** 執行 `/compare <ScreenName>`（指定畫面）
**C)** 跳過，直接交付

---
