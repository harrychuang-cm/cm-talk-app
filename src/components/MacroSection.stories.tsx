import type { Meta, StoryObj } from '@storybook/react-vite'
import { homeContent } from '../data/homeContent'
import { MacroSection } from './MacroSection'
import './story-layout.css'

const meta = {
  title: 'Components/MacroSection',
  component: MacroSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-mobile-frame">
      <MacroSection {...args} />
    </div>
  ),
} satisfies Meta<typeof MacroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: homeContent.macro,
}

export const AllVariants: Story = Default
export const AllStates: Story = Default
