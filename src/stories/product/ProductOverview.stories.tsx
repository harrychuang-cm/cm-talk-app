import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProductOverview } from './ProductOverview'

const meta = {
  title: 'Product/Overview',
  component: ProductOverview,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductOverview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
