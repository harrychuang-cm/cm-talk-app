import type { Meta, StoryObj } from '@storybook/react-vite'
import { homeContent } from '../data/homeContent'
import { SentimentCard } from './SentimentCard'
import './story-layout.css'

const meta = {
  title: 'Components/SentimentCard',
  component: SentimentCard,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-mobile-frame">
      <div className="story-stack">
        <SentimentCard {...args} />
      </div>
    </div>
  ),
} satisfies Meta<typeof SentimentCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: homeContent.app.sentiment,
}

export const AllVariants: Story = Default
export const AllStates: Story = Default
