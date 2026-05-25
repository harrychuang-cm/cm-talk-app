# Change Requests

Use this folder for incremental product changes after the initial build.

Do not ask the AI to regenerate the whole app for a change. Add a focused file using `CHANGE_REQUEST_TEMPLATE.md`, then run:

```
/change product/changes/<date>-<change-name>.md
```

The AI should update PRD/spec/manifests first, then patch only the affected components, screens, routes, shared models, and mobile scaffold files.
