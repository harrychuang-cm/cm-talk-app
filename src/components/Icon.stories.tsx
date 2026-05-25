import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell, Home, Search } from 'lucide-react'
import { Icon } from './Icon'
import './story-layout.css'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['default', 'muted', 'primary'] },
    size: { control: 'select', options: ['sm', 'md'] },
    decorative: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-surface">
      <Icon {...args} />
    </div>
  ),
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { icon: Search, label: 'Search', tone: 'primary' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-row">
      <Icon icon={Search} label="Search" tone="primary" />
      <Icon icon={Bell} label="Alerts" tone="muted" />
      <Icon icon={Home} label="Home" tone="default" />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface story-row">
      <Icon icon={Search} label="Informative icon" decorative={false} tone="primary" />
      <Icon icon={Bell} decorative tone="muted" />
    </div>
  ),
}
