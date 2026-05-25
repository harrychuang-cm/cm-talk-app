import type { Meta, StoryObj } from '@storybook/react-vite'
import { homeContent } from '../data/homeContent'
import { TradeRail } from './TradeRail'
import './story-layout.css'

const meta = {
  title: 'Components/TradeRail',
  component: TradeRail,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-mobile-frame">
      <div className="story-surface">
        <TradeRail {...args} />
      </div>
    </div>
  ),
} satisfies Meta<typeof TradeRail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items: homeContent.trades },
}

export const AllVariants: Story = Default
export const AllStates: Story = Default
