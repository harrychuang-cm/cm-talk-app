export const appManifest = {
  "appName": "design-spec",
  "slug": "design-spec",
  "screens": [
    {
      "id": "prototype-screen-1",
      "route": "/",
      "title": "DesignSpecHomeScreen"
    }
  ]
} as const

export type AppScreen = (typeof appManifest.screens)[number]
export type AppRoute = AppScreen['route']
