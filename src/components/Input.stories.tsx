import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'
import './story-layout.css'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
  render: (args) => (
    <div className="story-surface story-card-demo">
      <Input {...args} />
    </div>
  ),
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: '提醒關鍵字', placeholder: 'NVDA, CPI, FOMC', helper: '以逗號分隔' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-stack story-card-demo">
      <Input label="Default" placeholder="輸入內容" />
      <Input label="With helper" helper="最多 3 組關鍵字" placeholder="關鍵字" />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface story-stack story-card-demo">
      <Input label="Focused" placeholder="點擊聚焦" />
      <Input label="Error" error="請至少輸入一個關鍵字" defaultValue="" />
      <Input label="Disabled" disabled value="已停用" readOnly />
    </div>
  ),
}
