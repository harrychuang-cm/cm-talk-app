import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from './Chip'
import './story-layout.css'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-surface">
      <Chip {...args} />
    </div>
  ),
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'VIP' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-row">
      <Chip>總經</Chip>
      <Chip variant="outlined">美股</Chip>
      <Chip selected>VIP</Chip>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface story-row">
      <Chip selected>Selected</Chip>
      <Chip disabled>Disabled</Chip>
    </div>
  ),
}
