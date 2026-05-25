import type { Meta, StoryObj } from '@storybook/react-vite'
import { SectionHeader } from './SectionHeader'
import './story-layout.css'

const meta = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-surface">
      <SectionHeader {...args} />
    </div>
  ),
} satisfies Meta<typeof SectionHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { eyebrow: '今日優先追蹤', title: '重點總經資訊', meta: '09:30 更新' },
}

export const AllVariants: Story = {
  args: { title: 'News Feed' },
}

export const AllStates: Story = Default
