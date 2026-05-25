import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bot } from 'lucide-react'
import { Avatar } from './Avatar'
import './story-layout.css'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-surface">
      <Avatar {...args} />
    </div>
  ),
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { initials: '君', size: 'lg' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-row">
      <Avatar initials="君" size="sm" />
      <Avatar initials="AI" />
      <Avatar icon={Bot} size="lg" />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface story-row">
      <Avatar initials="君" />
      <Avatar initials="停" disabled />
    </div>
  ),
}
