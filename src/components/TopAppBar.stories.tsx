import type { Meta, StoryObj } from '@storybook/react-vite'
import { homeContent } from '../data/homeContent'
import { TopAppBar } from './TopAppBar'
import './story-layout.css'

const meta = {
  title: 'Components/TopAppBar',
  component: TopAppBar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-mobile-frame">
      <TopAppBar {...args} />
    </div>
  ),
} satisfies Meta<typeof TopAppBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { brand: homeContent.app.brand, brandImage: homeContent.app.brandImage },
}

export const AllVariants: Story = {
  args: { brand: 'Talk君' },
}

export const AllStates: Story = Default
