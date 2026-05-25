import type { DesignTokens } from './types'

export const tokenSnapshot = {
  "meta": {
    "appName": "design-spec"
  },
  "color": {
    "primary": "#000",
    "onPrimary": "#fff",
    "primaryContainer": "#000",
    "onPrimaryContainer": "#fff",
    "secondary": "#000",
    "onSecondary": "#fff",
    "secondaryContainer": "#000",
    "onSecondaryContainer": "#fff",
    "error": "#f00",
    "onError": "#fff",
    "background": "#000",
    "onBackground": "#fff",
    "surface": "#000",
    "onSurface": "#fff",
    "surfaceVariant": "#000",
    "onSurfaceVariant": "#fff",
    "surfaceContainer": "#000",
    "outline": "#000",
    "outlineVariant": "#000",
    "inverseSurface": "#fff",
    "inversePrimary": "#000",
    "scrim": "#000",
    "bullish": "#26a69a",
    "bearish": "#ef5350"
  },
  "typography": {
    "fontFamily": "system-ui",
    "displayLarge": {
      "size": "57px",
      "weight": "400",
      "lineHeight": "64px"
    },
    "displayMedium": {
      "size": "45px",
      "weight": "400",
      "lineHeight": "52px"
    },
    "displaySmall": {
      "size": "36px",
      "weight": "400",
      "lineHeight": "44px"
    },
    "headlineLarge": {
      "size": "32px",
      "weight": "400",
      "lineHeight": "40px"
    },
    "headlineMedium": {
      "size": "28px",
      "weight": "400",
      "lineHeight": "36px"
    },
    "headlineSmall": {
      "size": "24px",
      "weight": "400",
      "lineHeight": "32px"
    },
    "titleLarge": {
      "size": "22px",
      "weight": "400",
      "lineHeight": "28px"
    },
    "titleMedium": {
      "size": "16px",
      "weight": "500",
      "lineHeight": "24px"
    },
    "titleSmall": {
      "size": "14px",
      "weight": "500",
      "lineHeight": "20px"
    },
    "bodyLarge": {
      "size": "16px",
      "weight": "400",
      "lineHeight": "24px"
    },
    "bodyMedium": {
      "size": "14px",
      "weight": "400",
      "lineHeight": "20px"
    },
    "bodySmall": {
      "size": "12px",
      "weight": "400",
      "lineHeight": "16px"
    },
    "labelLarge": {
      "size": "14px",
      "weight": "500",
      "lineHeight": "20px"
    },
    "labelMedium": {
      "size": "12px",
      "weight": "500",
      "lineHeight": "16px"
    },
    "labelSmall": {
      "size": "11px",
      "weight": "500",
      "lineHeight": "16px"
    }
  },
  "shape": {
    "none": "0px",
    "extraSmall": "4px",
    "small": "8px",
    "medium": "12px",
    "large": "16px",
    "extraLarge": "28px",
    "full": "9999px"
  },
  "spacing": {
    "base": "4px",
    "scale": "4",
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "xxl": "48px"
  },
  "elevation": {
    "level0": "none",
    "level1": "0 1px 2px rgba(0,0,0,0.3)",
    "level2": "0 2px 6px rgba(0,0,0,0.3)",
    "level3": "0 4px 8px rgba(0,0,0,0.3)",
    "level4": "0 6px 10px rgba(0,0,0,0.3)",
    "level5": "0 8px 12px rgba(0,0,0,0.3)"
  }
} satisfies Partial<DesignTokens>
