import { ChevronRight, Info } from 'lucide-react'
import { Card } from './Card'
import { Chip } from './Chip'
import { Icon } from './Icon'
import './SentimentCard.css'

export interface SentimentMetric {
  label: string
  value: string
}

export interface SentimentCardProps {
  title: string
  link: string
  summary: string
  metrics: SentimentMetric[]
}

export function SentimentCard({ title, link, summary, metrics }: SentimentCardProps) {
  return (
    <Card className="sentiment-card">
      <div className="sentiment-card__header">
        <h2 className="sentiment-card__title">{title}</h2>
        <button className="sentiment-card__link" type="button">
          <Icon icon={Info} decorative tone="muted" />
          <span>{link}</span>
        </button>
      </div>
      <div className="sentiment-card__body">
        {metrics.map((metric) => (
          <div className="sentiment-card__metric" key={metric.label}>
            <span className="sentiment-card__metric-label">{metric.label}</span>
            <strong className="sentiment-card__metric-value">{metric.value}</strong>
          </div>
        ))}
        <Icon icon={ChevronRight} decorative />
      </div>
      <Chip selected className="sentiment-card__summary">
        {summary}
      </Chip>
    </Card>
  )
}
