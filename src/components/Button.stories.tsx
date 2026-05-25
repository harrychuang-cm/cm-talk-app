import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRight } from 'lucide-react'
import { Button } from './Button'
import { Icon } from './Icon'
import './story-layout.css'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'inverse', 'ghost'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-surface">
      <Button {...args} />
    </div>
  ),
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: '閱讀判讀', variant: 'secondary', iconAfter: <Icon icon={ArrowRight} decorative /> },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-row">
      <Button>主要操作</Button>
      <Button variant="secondary">閱讀判讀</Button>
      <Button variant="inverse">平台操作</Button>
      <Button variant="ghost">說明</Button>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface story-row">
      <Button>Default</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
}
