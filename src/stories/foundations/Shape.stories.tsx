import type { Meta, StoryObj } from '@storybook/react-vite'
import { FoundationPage } from './FoundationPage'

const meta = {
  title: 'Foundations/Shape',
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
  render: () => (
    <FoundationPage
      title="Shape"
      intent="Rounded cards, pill controls, and circular icon targets create a friendly finance/content app without glass effects."
      model="Controls use pill radius; cards use medium-to-large rounded corners; sheets use only top rounding."
      tokens={[
        { name: '--sys-radius-pill', role: 'Buttons, chips, nav item active state' },
        { name: '--sys-radius-lg', role: 'Content cards' },
        { name: '--sys-radius-xl', role: 'Hero and shortcut tiles' },
        { name: '--sys-radius-sheet', role: 'Bottom sheet top corners' },
      ]}
      dos={['Use pills for CTAs.', 'Use larger radii for hero cards.', 'Keep row lists flat unless raised in reference.', 'Match sheet top rounding.']}
      donts={['Do not square off controls.', 'Do not nest cards inside cards.', 'Do not outline every card.', 'Do not vary radii ad hoc.']}
    />
  ),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
