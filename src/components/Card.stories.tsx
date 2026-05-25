import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'
import './story-layout.css'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'muted', 'elevated', 'outlined'] },
    interactive: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-surface">
      <Card {...args} />
    </div>
  ),
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Talk君整理市場參與度、美元與殖利率三個訊號。' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-stack">
      <Card>Default card</Card>
      <Card variant="muted">Muted card</Card>
      <Card variant="elevated">Elevated card</Card>
      <Card variant="outlined">Outlined card</Card>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface">
      <Card interactive>Interactive hover card</Card>
    </div>
  ),
}
