import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dropdown } from './Dropdown'
import './story-layout.css'

const options = [
  { value: 'macro', label: '總經' },
  { value: 'stocks', label: '美股' },
  { value: 'community', label: '社團' },
]

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-surface story-card-demo">
      <Dropdown {...args} />
    </div>
  ),
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: '內容分類', placeholder: '選擇分類', options },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-stack story-card-demo">
      <Dropdown label="分類" options={options} defaultValue="macro" />
      <Dropdown label="含提示" helper="用於首頁篩選" options={options} />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface story-stack story-card-demo">
      <Dropdown label="Error" error="請選擇分類" options={options} />
      <Dropdown label="Disabled" disabled options={options} defaultValue="stocks" />
    </div>
  ),
}
