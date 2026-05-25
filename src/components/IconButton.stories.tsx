import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell, Search } from 'lucide-react'
import { IconButton } from './IconButton'
import './story-layout.css'

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-surface">
      <IconButton {...args} />
    </div>
  ),
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { icon: Search, label: '搜尋' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-row">
      <IconButton icon={Search} label="搜尋" />
      <IconButton icon={Bell} label="通知" active />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface story-row">
      <IconButton icon={Search} label="搜尋" />
      <IconButton icon={Bell} label="通知" disabled />
    </div>
  ),
}
