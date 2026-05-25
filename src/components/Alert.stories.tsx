import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'
import './story-layout.css'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    dismissible: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-surface">
      <Alert {...args} />
    </div>
  ),
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { title: '市場提醒', children: 'CPI 公布前波動可能升高。' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="story-surface story-stack">
      <Alert title="Info">市場情緒偏進攻。</Alert>
      <Alert tone="success" title="Success">收藏完成。</Alert>
      <Alert tone="warning" title="Warning">資料更新延遲。</Alert>
      <Alert tone="error" title="Error">無法載入文章。</Alert>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="story-surface">
      <Alert dismissible title="Dismissible">可關閉的提示。</Alert>
    </div>
  ),
}
