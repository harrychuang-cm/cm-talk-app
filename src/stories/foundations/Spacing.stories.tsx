import type { Meta, StoryObj } from '@storybook/react-vite'
import { FoundationPage } from './FoundationPage'

const meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
  render: () => (
    <FoundationPage
      title="Spacing"
      intent="The product uses 20px mobile gutters, compact row rhythm, and bounded horizontal rails to prevent page-level overflow."
      model="Spacing is a 4px-based scale with larger page and section aliases for mobile scanning."
      tokens={[
        { name: '--sys-space-xs', role: 'Icon/label gaps' },
        { name: '--sys-space-md', role: 'Inline gaps inside rows' },
        { name: '--sys-space-xl', role: 'Section/internal card rhythm' },
        { name: '--sys-space-page-inline', role: 'Mobile page gutter' },
        { name: '--comp-bottom-nav-height', role: 'Reserved bottom space' },
      ]}
      dos={['Keep horizontal scroll inside rails.', 'Reserve space for BottomNav.', 'Use compact card internals.', 'Preserve 20px gutters.']}
      donts={['Do not add landing-page whitespace.', 'Do not allow body horizontal scroll.', 'Do not wrap every section in a card.', 'Do not use raw spacing in components.']}
    />
  ),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
