import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileText, Home, MessageCircle, User, Users } from 'lucide-react'
import { BottomNav } from './BottomNav'
import './story-layout.css'

const items = [
  { id: 'home', label: '首頁', icon: Home, active: true },
  { id: 'community', label: '社團', icon: Users },
  { id: 'content', label: '內容', icon: FileText },
  { id: 'chat', label: 'chat', icon: MessageCircle },
  { id: 'me', label: '我的', icon: User },
]

const meta = {
  title: 'Components/BottomNav',
  component: BottomNav,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-mobile-frame">
      <BottomNav {...args} />
    </div>
  ),
} satisfies Meta<typeof BottomNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items },
}

export const AllVariants: Story = {
  args: { items: items.map((item, index) => ({ ...item, active: index === 2 })) },
}

export const AllStates: Story = {
  args: { items: items.map((item, index) => (index === 4 ? { ...item, disabled: true, badge: '2' } : item)) },
}
