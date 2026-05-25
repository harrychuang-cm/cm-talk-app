import type { Meta, StoryObj } from '@storybook/react-vite'
import { homeContent } from '../data/homeContent'
import { HeroCarousel } from './HeroCarousel'
import './story-layout.css'

const meta = {
  title: 'Components/HeroCarousel',
  component: HeroCarousel,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-mobile-frame">
      <HeroCarousel {...args} />
    </div>
  ),
} satisfies Meta<typeof HeroCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: homeContent.hero,
}

export const AllVariants: Story = Default
export const AllStates: Story = Default
