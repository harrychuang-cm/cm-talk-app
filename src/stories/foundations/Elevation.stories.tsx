import type { Meta, StoryObj } from '@storybook/react-vite'
import { FoundationPage } from './FoundationPage'

const meta = {
  title: 'Foundations/Elevation',
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
  render: () => (
    <FoundationPage
      title="Elevation"
      intent="Elevation is restrained: cards and rails lift subtly, while overlays and the mobile shell use stronger depth."
      model="Most hierarchy comes from surfaces and spacing; shadows are reserved for raised tiles, cards, nav, and sheets."
      tokens={[
        { name: '--sys-elevation-flat', role: 'Flat sections' },
        { name: '--sys-elevation-raised', role: 'Cards, tiles, BottomNav' },
        { name: '--sys-elevation-card', role: 'Higher emphasis cards' },
        { name: '--sys-elevation-overlay', role: 'App frame and modal sheets' },
      ]}
      dos={['Use raised only where the reference lifts.', 'Use overlay elevation for sheets.', 'Keep section headings flat.', 'Pair shadow with surface contrast.']}
      donts={['Do not shadow every row.', 'Do not use glow effects.', 'Do not rely on borders for all containment.', 'Do not invent depth levels.']}
    />
  ),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
