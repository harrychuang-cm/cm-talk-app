import type { Meta, StoryObj } from '@storybook/react-vite'
import { FoundationPage } from './FoundationPage'

const meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
  render: () => (
    <FoundationPage
      title="Typography"
      intent="Dense Chinese market content uses strong display numerals, bold section titles, and compact metadata for scanning."
      model="Display roles are reserved for hero cards and metric values; body roles carry feed summaries and sheet copy."
      tokens={[
        { name: '--sys-font-display', role: 'Hero titles and large market values' },
        { name: '--sys-type-title-lg-size', role: 'Carousel and sheet titles' },
        { name: '--sys-type-title-md-size', role: 'Section and sentiment titles' },
        { name: '--sys-type-body-md-size', role: 'Primary reading text' },
        { name: '--sys-type-label-sm-size', role: 'Metadata, tags, nav labels' },
      ]}
      dos={['Keep Chinese headlines left aligned.', 'Use tabular numeric treatment for market numbers.', 'Clamp long feed titles.', 'Use label scale for metadata.']}
      donts={['Do not use hero-scale type inside compact cards.', 'Do not use negative tracking.', 'Do not center dense lists.', 'Do not use lorem ipsum.']}
    />
  ),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
