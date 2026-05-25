import type { Meta, StoryObj } from '@storybook/react-vite'
import { homeContent } from '../data/homeContent'
import { ShortcutRail } from './ShortcutRail'
import './story-layout.css'

const meta = {
  title: 'Components/ShortcutRail',
  component: ShortcutRail,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-mobile-frame">
      <ShortcutRail {...args} />
    </div>
  ),
} satisfies Meta<typeof ShortcutRail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items: homeContent.shortcuts },
}

export const AllVariants: Story = Default
export const AllStates: Story = Default
