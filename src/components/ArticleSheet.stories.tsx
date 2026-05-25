import type { Meta, StoryObj } from '@storybook/react-vite'
import { homeContent } from '../data/homeContent'
import { ArticleSheet } from './ArticleSheet'
import './story-layout.css'

const meta = {
  title: 'Components/ArticleSheet',
  component: ArticleSheet,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  render: (args) => (
    <div className="story-mobile-frame">
      <ArticleSheet {...args} />
    </div>
  ),
} satisfies Meta<typeof ArticleSheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { ...homeContent.article, open: true },
}

export const AllVariants: Story = Default
export const AllStates: Story = Default
