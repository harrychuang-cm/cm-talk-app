# Phase 2 — design-spec React Native Scaffold

This target is for true native screens. Start here after the web screen has passed visual QA, then convert one screen at a time.

## Run

```bash
cd mobile/apps/mobile-react-native
npm install
npm run start
```

## Conversion rule

Do not convert every web component mechanically. Promote a screen to native only when it benefits from native navigation, gestures, device APIs, offline behavior, or performance.
