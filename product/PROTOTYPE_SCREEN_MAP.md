# Prototype Screen Map

Populate this before implementing screens from a Prototype Folder.

## Entry Candidates

- `design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html`

## Screen Map

| Prototype page/file | Product route | Screen component | Product function | Storybook components required | Notes |
|---------------------|---------------|------------------|------------------|-------------------------------|-------|
| `design-reference/source-folder/files/testing-demo-v2/talk-ui/index.html` | `/` | `DesignSpecHomeScreen` | Talk君 market/content home for sentiment, AI shortcuts, featured articles, macro data, trade ideas, feed, and fixed primary navigation | `AppShell`, `TopAppBar`, `SentimentCard`, `ShortcutRail`, `HeroCarousel`, `SectionHeader`, `MacroSection`, `TradeRail`, `FeedList`, `ArticleSheet`, `BottomNav` | `index.html` is a shell; concrete UI comes from `homepage.js` and `homepage.css`. Rebuilt through production Storybook components only. |

## Reconstruction Rule

Concrete pages must be rebuilt by composing production Storybook components. Do not copy page-level prototype HTML/CSS into product routes.
