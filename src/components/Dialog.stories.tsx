import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dialog } from './Dialog'
import './story-layout.css'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
  },
  render: (args) => (
    <div className="story-mobile-frame">
      <Dialog {...args} />
    </div>
  ),
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { open: true, title: 'CPI 前的持倉檢查', children: '整理市場參與度、美元與殖利率三個訊號。', actionLabel: '收藏判讀' },
}

export const AllVariants: Story = {
  args: { open: true, title: '文章摘要', children: '底部浮層用於文章詳情與快速操作。' },
}

export const AllStates: Story = {
  render: () => (
    <div className="story-mobile-frame">
      <Dialog open title="Open" actionLabel="確認">
        開啟狀態
      </Dialog>
    </div>
  ),
}
