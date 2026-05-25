# App Design System 規範

本文件依據 `ref/` 內 6 張 iOS 參考截圖反推產品樣式，並以 `design-system-governance` 的 `ref -> sys -> comp` 三層規則建立第一版設計系統。此規範是針對目前參考 UI 的設計語言，不代表 Wise 官方設計系統。

## Phase 0 專案盤點

| 項目 | 發現 | 決策 |
|---|---|---|
| Token naming | 專案沒有既有 token 檔 | 新建 `wise-ref-*`、`wise-sys-*`、`wise-comp-*` |
| Token layer | 無既有分層 | 建立 `ref -> sys -> comp` 三層，不允許 comp 直接引用 ref |
| Grid / layout | 無程式碼，只見 iOS mobile screenshots | 建立 mobile-first 單欄、20px page padding、固定 bottom nav |
| Animation keyframes | 無既有 keyframe | 新建 `wise-enter-up`、`wise-fade-in` 前綴 |
| Shared components | 無 `src/components` 或 Storybook | 本次只建立規範與 token，不新增元件 |
| i18n source | 無 `locales/` 或 i18n 設定 | 未來實作時所有 display text 必須接 i18n |

參考圖尺寸約為 1180 x 2676，即 3x iOS 截圖，邏輯寬度約 393px。底部 Mobbin 浮水印列不列入 app design system。

## 產品理解

這是一個金流和卡片管理 app。它需要在「可信任、資訊清楚」與「品牌有記憶點」之間取得平衡：日常操作畫面保持白底、清楚層級、足夠留白；關鍵品牌或狀態畫面使用強烈深綠底、螢光綠 CTA、大型圖像與重磅標題，讓產品不落入一般銀行 app 的保守樣式。

核心 UI 特徵：

- 高對比白底與深綠底並存。
- Primary blue `#2A4AFF` 作為主要 CTA、active icon、進度條與 focus state。
- 大型極粗 display typography 用在 onboarding、success、promo card。
- 圓形 icon button、膠囊 CTA、圓角卡片，降低金融產品的距離感。
- 列表資訊密度高，但每列都有穩定的 icon、title、amount、meta 層級。
- 圖像使用帶材質感的 3D 插畫或卡片圖，不以抽象漸層當主視覺。

## 設計原則

1. **Money first, action second**
   金額、卡片、交易分類與轉帳狀態永遠是第一層資訊；CTA 明確但不壓過金流內容。

2. **Calm default, bold moment**
   日常操作使用白底與黑字建立信任；onboarding、success、promo 等高情緒節點才使用滿版深綠、亮綠或暖黃色。

3. **High contrast with paired foregrounds**
   每個背景色都必須有 `on-*` foreground token，不假設白字或黑字可直接套用。

4. **Friendly operational density**
   內容可以密，但觸控目標必須大。列表列距、48px 以上 icon button、56px CTA 是基本可用性底線。

5. **Brand through geometry and texture**
品牌感來自高飽和 primary blue、深色 brand surface、圓形/膠囊幾何與具材質感插畫，而不是大量裝飾邊框或背景花紋。

6. **Component hierarchy over decoration**
   頁面用 app bar、section title、card、list row、bottom nav 組成，避免一次性排版。視覺變化應透過 token variant 表達。

7. **Explicit interactive states**
   hover、pressed、focus-visible、disabled 都必須定義。金融操作不得只有靜態樣式，鍵盤與輔助科技狀態需要同等清楚。

## Token 架構

Token 檔案：

- CSS custom properties: [`tokens/design-tokens.css`](../tokens/design-tokens.css)
- Design Tokens JSON: [`tokens/design-tokens.json`](../tokens/design-tokens.json)

分層規則：

| Layer | 角色 | 命名規則 | 例子 |
|---|---|---|---|
| `ref` | 原始值，只描述色階、尺寸、字級、陰影等 primitive | 不可出現 button/card/nav 等元件語彙 | `--wise-ref-color-green-300` |
| `sys` | 產品共用語意，所有元件都可引用 | 描述 surface、action、border、type、space 等角色 | `--wise-sys-color-action-primary` |
| `comp` | 元件或區塊槽位 | 只引用 `sys`，可出現 component 名稱 | `--wise-comp-button-primary-container` |

硬性規則：

- 元件程式碼不得寫 `#hex`、`rgb()`、`hsl()` 色值。
- 元件程式碼不得寫裸 spacing、radius、font size、shadow。
- `comp` token 不得直接引用 `ref` token。
- 背景 token 必須有對應 foreground token。
- 動畫 duration、easing 必須走 token。
- 使用者可見文字必須由 i18n 來源提供。

## 色彩系統

主色由 primary blue `#2A4AFF` 與深色 brand surface 構成。輔色不是平均使用，而是用於資料分類、promo surface 或插畫承接。

| 角色 | Token | 用途 |
|---|---|---|
| Default surface | `--wise-sys-color-surface` | app 主要白底 |
| Default text | `--wise-sys-color-on-surface` | 標題、金額、主要文案 |
| Muted surface | `--wise-sys-color-surface-muted` | icon button、輕量容器 |
| Muted text | `--wise-sys-color-on-surface-muted` | 次要 label、percentage、subtitle |
| Brand surface | `--wise-sys-color-surface-brand` | success、passcode、brand-heavy screen |
| On brand | `--wise-sys-color-on-surface-brand` | 深綠底上的大型亮綠標題 |
| Primary action | `--wise-sys-color-action-primary` | 主要 CTA、active chip |
| On primary action | `--wise-sys-color-on-action-primary` | CTA 文字與 icon |
| Inverse action | `--wise-sys-color-action-inverse` | Apple Wallet、Apple sign-in 類型黑底 CTA |
| Warm feature | `--wise-sys-color-surface-feature-warm` | 黃色「Do more」功能卡 |
| Deep feature | `--wise-sys-color-surface-feature-deep` | 深酒紅 promo card |
| Focus ring | `--wise-sys-color-focus-ring` | keyboard focus-visible outline |

資料分類色：

| 類別 | Token |
|---|---|
| Shopping | `--wise-comp-category-shopping-color` |
| Eating out | `--wise-comp-category-eating-color` |
| General | `--wise-comp-category-general-color` |
| Bills | `--wise-comp-category-bills-color` |
| Groceries | `--wise-comp-category-groceries-color` |
| Transfer / positive | `--wise-comp-category-transfer-color` |

色彩使用比例建議：

- 70% white / neutral surface。
- 20% green action、active state、brand highlight。
- 10% feature surfaces 或 chart/category colors。
- 深綠滿版只用於完成、驗證、強品牌節點，不用於所有日常頁。

## 字體與排版

參考 UI 的主體接近 iOS system sans，但品牌標題有極重、寬大、緊密的 display 語感。實作建議：

- UI font: `--wise-sys-font-family-ui`，預設 `Inter` / `SF Pro Text` fallback。
- Display font: `--wise-sys-font-family-display`，預設 `Inter Tight` / `Arial Black` / `SF Pro Display` fallback。
- Letter spacing 固定使用 `0`，避免負 tracking 造成小尺寸可讀性問題。

| Role | Size token | Weight | 用途 |
|---|---|---|---|
| Display XL | `--wise-sys-type-display-xl-size` | `--wise-sys-font-weight-display` | onboarding hero 超大型標題 |
| Display LG | `--wise-sys-type-display-lg-size` | `--wise-sys-font-weight-display` | success / promo 強標題 |
| Title XL | `--wise-sys-type-title-xl-size` | `--wise-sys-font-weight-title` | page title，如 Cards |
| Title LG | `--wise-sys-type-title-lg-size` | `--wise-sys-font-weight-title` | section title，如 Recent contacts |
| Title MD | `--wise-sys-type-title-md-size` | `--wise-sys-font-weight-title` | list row title、card title |
| Body LG | `--wise-sys-type-body-lg-size` | regular / label | CTA、重要 subtitle |
| Body MD | `--wise-sys-type-body-md-size` | regular | 一般內容 |
| Label SM | `--wise-sys-type-label-sm-size` | semibold | 輔助標籤、nav label |

排版規則：

- 金額與標題使用 bold，但不壓縮文字。
- Page title 與 section title 左對齊，形成快速掃描路徑。
- 大型 display title 可置中，但只用於 onboarding 或完成狀態。
- Button 文字使用 body-lg + semibold，不使用 all caps。

## 間距與布局

Mobile-first 單欄規則：

- Page inline padding: `--wise-sys-space-page-inline`，20px。
- Section stack: `--wise-sys-space-stack-lg` 至 `--wise-sys-space-stack-xl`。
- Row inline gap: `--wise-sys-space-inline-lg`。
- Bottom nav height: `--wise-comp-bottom-nav-height`。
- App bar height: `--wise-comp-app-bar-height`。

建議 layout pattern：

```css
.screen {
  min-height: 100dvh;
  background: var(--wise-comp-screen-background);
  color: var(--wise-comp-screen-foreground);
  padding-inline: var(--wise-comp-screen-padding-inline);
  padding-block: var(--wise-comp-screen-padding-block);
}
```

Responsive 規則：

- 主要產品體驗以 390px iOS 寬度為基準。
- 600px 以上可增加內容 max-width，但不要把 mobile 操作元件任意拉寬。
- 960px 以上若做 web/tablet，可改為雙欄資訊區，但 bottom nav 應轉成 side nav 或 top-level tab。

## 圓角、陰影與深度

| Role | Token | 用途 |
|---|---|---|
| Control radius | `--wise-sys-radius-control` | CTA、chip、pill |
| Icon radius | `--wise-sys-radius-icon` | 圓形 icon button |
| Card SM | `--wise-sys-radius-card-sm` | 實體卡片、carousel card |
| Card MD | `--wise-sys-radius-card-md` | 一般內容卡 |
| Card LG | `--wise-sys-radius-card-lg` | promo / feature card |
| Raised | `--wise-sys-elevation-raised` | 輕量浮起容器 |
| Card | `--wise-sys-elevation-card` | 卡片 carousel |
| Overlay | `--wise-sys-elevation-overlay` | modal、sheet、重要浮層 |

原則：

- 大部分日常資訊保持 flat，靠字級與間距建立層級。
- 只有可互動或可滑動的實體卡片使用明顯陰影。
- Promo card 使用高彩 surface 與插畫，不靠陰影做裝飾。

## Motion

Motion token：

- Fast: `--wise-sys-motion-duration-fast`
- Standard: `--wise-sys-motion-duration-standard`
- Slow: `--wise-sys-motion-duration-slow`
- Ambient: `--wise-sys-motion-duration-ambient`
- Easing: `--wise-sys-motion-easing-standard`、`--wise-sys-motion-easing-emphasized`

Keyframes：

- `wise-enter-up`: section 或 list row 進場。
- `wise-fade-in`: overlay、illustration、success state。

規則：

- Entrance stagger 以 60-80ms 遞增，使用 CSS custom property 控制 delay。
- Hover/pressed 只允許 lift、scale 或 focus-fade 類型，不做多餘彈跳。
- `prefers-reduced-motion: reduce` 時 duration token 會歸零。

## 元件規格

以下是未來元件實作的 minimum contract。若新增 component，必須先確認 comp token 存在。

### Screen

- Background: `--wise-comp-screen-background`
- Foreground: `--wise-comp-screen-foreground`
- Padding inline/block: `--wise-comp-screen-padding-inline`、`--wise-comp-screen-padding-block`
- 所有 page section 不做巢狀 card 包 card。

### App Bar

- Height: `--wise-comp-app-bar-height`
- Container: `--wise-comp-app-bar-background`
- Foreground: `--wise-comp-app-bar-foreground`
- Back/settings/utility icon 使用 `--wise-comp-icon-button-*`
- 左右 action 大小保持一致，中心 title 可用 `Title MD`。

### Button

Primary button：

- Container: `--wise-comp-button-primary-container`
- Foreground: `--wise-comp-button-primary-foreground`
- Height: `--wise-comp-button-height`
- Radius: `--wise-comp-button-radius`
- Padding: `--wise-comp-button-padding-inline`

States：

- Hover: `--wise-comp-button-primary-hover-container`
- Pressed: `--wise-comp-button-primary-pressed-container`
- Focus-visible: `--wise-comp-button-focus-ring`
- Disabled: opacity 可由 future sys state token 補上，不在元件內硬寫。

Inverse button 用於 Apple sign-in、Add to Apple Wallet 這類平台 CTA：

- Container: `--wise-comp-button-inverse-container`
- Foreground: `--wise-comp-button-inverse-foreground`

### Icon Button

- Size: `--wise-comp-icon-button-size`
- Container: `--wise-comp-icon-button-container`
- Foreground: `--wise-comp-icon-button-foreground`
- Radius: `--wise-comp-icon-button-radius`
- 48px 是最小觸控尺寸，不建立更小的 tappable icon。

### Bottom Nav

- Height: `--wise-comp-bottom-nav-height`
- Background: `--wise-comp-bottom-nav-background`
- Border: `--wise-comp-bottom-nav-border`
- Active: `--wise-comp-bottom-nav-active`
- Inactive: `--wise-comp-bottom-nav-inactive`

規則：

- 4 個主要目的地：Home、Card、Recipients、Payments。
- Active state 同時改變 icon 與 label 顏色。
- Label 使用 semibold，避免只靠顏色傳達狀態。

### Card

Base card：

- Background: `--wise-comp-card-background`
- Foreground: `--wise-comp-card-foreground`
- Radius: `--wise-comp-card-radius`
- Padding: `--wise-comp-card-padding`
- Gap: `--wise-comp-card-gap`
- Shadow: `--wise-comp-card-shadow`

Promo card：

- Warm variant: `--wise-comp-promo-card-background-warm` / `--wise-comp-promo-card-foreground-warm`
- Deep variant: `--wise-comp-promo-card-background-deep` / `--wise-comp-promo-card-foreground-deep`
- Radius: `--wise-comp-promo-card-radius`
- Padding: `--wise-comp-promo-card-padding`

### Avatar / Contact

- Size: `--wise-comp-avatar-size`
- Background: `--wise-comp-avatar-background`
- Foreground: `--wise-comp-avatar-foreground`
- Border: `--wise-comp-avatar-border`
- Initials avatar 使用 2 字元上限，外加 brand badge 時 badge 不遮住 initials。

### List Row / Spending Category

- Gap: `--wise-comp-list-row-gap`
- Padding block: `--wise-comp-list-row-padding-block`
- Icon size: `--wise-comp-list-row-icon-size`
- Meta color: `--wise-comp-list-row-meta-color`

結構：

1. 左側圓形 category icon。
2. 中間 title 與 progress indicator。
3. 右側 amount 與 percentage。

### Onboarding / Success

Onboarding：

- Background: `--wise-comp-onboarding-background`
- Foreground: `--wise-comp-onboarding-foreground`
- Progress: `--wise-comp-onboarding-progress`
- Title 使用 display family、heavy weight。

Success：

- Background: `--wise-comp-success-background`
- Foreground: `--wise-comp-success-foreground`
- Body foreground: `--wise-comp-success-body-foreground`
- 深綠底頁面必須使用 paired foreground，不得直接使用黑字。

## 圖像與 iconography

圖像：

- 使用有材質、可辨識物件的 3D 或 bitmap asset，例如地球、卡片、紙飛機、購物袋。
- 不用純漸層 SVG 當主視覺。
- 圖像應承接產品情境：卡片頁顯示實體/數位卡、轉帳顯示金流、功能推廣顯示具體操作物件。

Icon：

- 功能 icon 使用線性圖示，stroke 視覺重量一致。
- 圓形容器 icon 與底部 nav icon 要有不同層級：nav icon 更輕、active 更深綠。
- 不熟悉的 icon 必須有 tooltip 或 accessible label。

## Accessibility

- 所有 CTA 高度至少 56px。
- Icon-only button 必須有 accessible name。
- 色彩不作為唯一狀態指示，active label 需加粗或搭配 shape/position。
- Focus ring 使用 `--wise-sys-color-focus-ring`，不移除 outline。
- 深色背景必須使用 `onSurfaceInverse` 或 `onSurfaceBrand`。
- 圖像若只作裝飾，使用空 alt；若傳達狀態，需有語意文字。

## Storybook 與實作治理

目前專案尚未有元件或 Storybook。本次沒有新增元件，因此沒有 stories。未來每個元件至少要補：

- `Default`
- `Hover`
- `FocusVisible`
- `Disabled`
- Composite component 需提供組裝 story，並列出使用了哪些子元件。

實作前檢查：

1. 先查是否有既有 shared component。
2. 若缺語意，先補 `sys` token。
3. 若缺元件槽位，再補 `comp` token。
4. 元件只能引用 `comp` token。
5. 每次新增 token 要同步更新 CSS 與 JSON。

## 參考畫面對應

| 參考圖 | 觀察重點 |
|---|---|
| `Wise iOS 6.png` | Onboarding，白底、地球金幣圖像、超粗黑 display title、雙 primary button、黑底平台 CTA |
| `Wise iOS 24.png` | Success/passcode，深綠滿版、亮綠 title 與 CTA、白色 body text |
| `Wise iOS 47.png` | Home 上半部，profile chip、earn CTA、promo card、transfer calculator、bottom nav |
| `Wise iOS 49.png` | Home 下半部，contact avatar、黃色 feature cards、section hierarchy |
| `Wise iOS 158.png` | Spending analysis，月份 selector、金額摘要、category list、資料分類色 |
| `Wise iOS 389.png` | Cards，card carousel、圓形 action buttons、Apple Wallet CTA、bottom nav active state |
