import type { Meta, StoryObj } from '@storybook/react-vite'
import { FoundationPage } from './FoundationPage'

const meta = {
  title: 'Foundations/Color',
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
  render: () => (
    <FoundationPage
      title="Color"
      intent="Talk君 uses calm light surfaces, blue primary action, lime secondary calls to action, and restrained semantic colors for market content."
      model="Color flows ref → sys → comp. Dark mode swaps system roles while component slots remain stable."
      tokens={[
        { name: '--sys-color-background', role: 'Page canvas', swatch: 'var(--sys-color-background)' },
        { name: '--sys-color-surface-raised', role: 'Cards and tiles', swatch: 'var(--sys-color-surface-raised)' },
        { name: '--sys-color-primary', role: 'Primary actions and active states', swatch: 'var(--sys-color-primary)' },
        { name: '--sys-color-secondary', role: 'Hero CTA accent', swatch: 'var(--sys-color-secondary)' },
        { name: '--sys-color-bullish', role: 'Positive/transfer data only', swatch: 'var(--sys-color-bullish)' },
        { name: '--sys-color-bearish', role: 'Negative/sell data only', swatch: 'var(--sys-color-bearish)' },
      ]}
      dos={['Use surface steps for depth.', 'Use primary for navigation and actions.', 'Keep bullish/bearish separate from brand/error.', 'Pair every surface with its foreground.']}
      donts={['Do not add decorative glows.', 'Do not use primary for bullish values.', 'Do not outline every card.', 'Do not hardcode hex in components.']}
    />
  ),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
