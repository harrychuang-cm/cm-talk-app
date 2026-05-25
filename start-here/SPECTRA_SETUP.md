# Spectra Setup Guide

Spectra is a **spec-driven development CLI** that structures your work as:
propose a change → apply it task by task → archive when done.

It gives this workspace trackable specs, scenarios, and tasks from day one —
and ensures every future feature or fix goes through the same governed loop.

---

## Install (macOS / Linux)

```bash
curl -fsSL https://spectra.tools/install.sh | sh
```

Verify: `spectra --version`

---

## Initialize this project

Run once in the workspace root:

```bash
spectra init
```

This creates `openspec/` (already present in this ZIP with a pre-filled `config.yaml`
for **design-spec** targeting **mobile**).

---

## Core workflow: propose → apply → archive

| Phase | Command | What happens |
|-------|---------|--------------|
| **Propose** | `spectra new change "<name>"` | Creates a change folder with proposal, design, specs, and tasks artifacts |
| **Apply** | `spectra task done --change "<name>" <id>` | Marks each task complete as you implement it |
| **Archive** | `spectra archive "<name>"` | Moves the completed change to `openspec/archive/` |

---

## Command quick-reference

| Command | Purpose |
|---------|---------|
| `spectra new change "<name>" --agent claude` | Create a new change (optimised for Claude Code) |
| `spectra new artifact proposal --change "<name>" --stdin` | Write the proposal artifact |
| `spectra new artifact spec <cap-name> --change "<name>" --stdin` | Write a spec for one capability |
| `spectra new artifact design --change "<name>" --stdin` | Write the technical design doc |
| `spectra new artifact tasks --change "<name>" --stdin` | Write the task checklist |
| `spectra task done --change "<name>" <task-id>` | Mark a task complete |
| `spectra status --change "<name>"` | Show artifact DAG and readiness |
| `spectra analyze "<name>"` | Check cross-artifact consistency |
| `spectra validate "<name>"` | Validate all artifacts |
| `spectra list` | List all active changes |
| `spectra archive "<name>"` | Archive a completed change |

---

## Recommended usage in this workspace

1. **Initial product build** → see Step 0-B in `start-here/KICKSTART.md` for the exact
   command sequence to create the initial change covering all screens.
2. **Each new feature** → `spectra new change "add-<feature-name>"` → propose → apply → archive.
3. **Bug fixes** → same loop; use the Bug Fix proposal template.
4. **Design token updates** → propose a refactor change; the Token Gate in `skills/`
   enforces that every token value change is governed.

---

## Claude Code slash commands (if skills are installed)

| Slash command | Equivalent |
|---------------|-----------|
| `/spectra-propose <description>` | Full propose workflow in one command |
| `/spectra-apply <name>` | Full apply loop with progress tracking |
| `/spectra-archive` | Archive the current change |

Check if skills are available: `ls .claude/skills/`
