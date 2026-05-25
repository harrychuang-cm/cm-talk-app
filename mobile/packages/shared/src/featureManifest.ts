export const featureManifest = {
  "schemaVersion": 1,
  "productName": "design-spec",
  "source": "product/PRD.md",
  "status": "placeholder",
  "features": [],
  "flows": [],
  "changeHistory": []
} as const

export type FeatureManifest = typeof featureManifest
export type FeatureDefinition = FeatureManifest['features'][number]
