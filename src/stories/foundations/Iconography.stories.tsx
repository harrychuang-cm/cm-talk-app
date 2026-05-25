import type { Meta, StoryObj } from '@storybook/react-vite'
import { FoundationPage } from './FoundationPage'

const meta = {
  title: 'Foundations/Iconography',
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
  render: () => (
    <FoundationPage
      title="Iconography"
      intent="Lucide icons are wrapped by the shared Icon and IconButton contracts so size, stroke, color, and accessibility stay consistent."
      model="Informative icons receive labels; decorative icons stay hidden from assistive technology. Product image icons remain bitmap assets."
      tokens={[
        { name: '--comp-icon-size-md', role: 'Standard icon size' },
        { name: '--comp-icon-stroke', role: 'Stroke width' },
        { name: '--comp-icon-primary-fg', role: 'Active and primary icon color' },
        { name: '--comp-icon-button-size', role: 'Touch target' },
      ]}
      dos={['Use Icon for lucide glyphs.', 'Use IconButton for tappable icons.', 'Preserve bitmap product icons.', 'Provide labels for icon-only buttons.']}
      donts={['Do not scatter inline SVG.', 'Do not use unfamiliar icons without labels.', 'Do not shrink touch targets.', 'Do not recolor status icons with primary.']}
    />
  ),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
