import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'
import './story-layout.css'

const items = [
  { id: 'day', label: '今日', active: true },
  { id: 'week', label: '本週' },
  { id: 'month', label: '本月' },
]

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['underline', 'segmented'] },
  },
  render: (args) => (
    <div className="story-surface">
      <Tabs {...args} />
    </div>
  ),
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-stack">
      <Tabs items={items} />
      <Tabs items={items} variant="underline" />
    </div>
  ),
}

export const AllStates: Story = {
  args: { items: items.map((item, index) => (index === 2 ? { ...item, disabled: true } : item)) },
}
