import type { Meta, StoryObj } from '@storybook/react-vite'
import { homeContent } from '../data/homeContent'
import { FeedList } from './FeedList'
import './story-layout.css'

const meta = {
  title: 'Components/FeedList',
  component: FeedList,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-mobile-frame">
      <FeedList {...args} />
    </div>
  ),
} satisfies Meta<typeof FeedList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    subtitle: 'Talk君觀點與小編整理',
    title: 'News Feed',
    trades: homeContent.trades,
    items: homeContent.feed,
  },
}

export const AllVariants: Story = Default
export const AllStates: Story = Default
