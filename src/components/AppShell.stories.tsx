import type { Meta, StoryObj } from '@storybook/react-vite'
import { Home, User } from 'lucide-react'
import { AppShell } from './AppShell'
import { BottomNav } from './BottomNav'
import { Card } from './Card'
import './story-layout.css'

const meta = {
  title: 'Components/AppShell',
  component: AppShell,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AppShell nav={<BottomNav items={[{ id: 'home', label: '首頁', icon: Home, active: true }, { id: 'me', label: '我的', icon: User }]} />}>
      <div className="story-surface">
        <Card>Scrollable mobile app shell</Card>
      </div>
    </AppShell>
  ),
}

export const AllVariants: Story = Default
export const AllStates: Story = Default
