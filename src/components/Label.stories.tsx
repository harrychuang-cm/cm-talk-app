import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './Label'
import './story-layout.css'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-surface">
      <Label {...args} />
    </div>
  ),
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Email', helper: '用於接收市場提醒' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-stack">
      <Label>Default</Label>
      <Label required>Required</Label>
      <Label helper="輔助說明">With helper</Label>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface story-stack">
      <Label error>Invalid field</Label>
      <Label disabled>Disabled field</Label>
    </div>
  ),
}
