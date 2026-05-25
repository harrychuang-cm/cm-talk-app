import { ArrowRight } from 'lucide-react'
import { Card } from './Card'
import { Icon } from './Icon'
import { SectionHeader } from './SectionHeader'
import './MacroSection.css'

export interface MacroItem {
  label: string
  value: string
  meta: string
  tone: 'brand' | 'warm' | 'cool' | 'neutral'
}

export interface MacroInsight {
  title: string
  body: string
  icon: string
}

export interface MacroSectionProps {
  subtitle: string
  title: string
  updatedAt: string
  items: MacroItem[]
  insight: MacroInsight
}

export function MacroSection({ subtitle, title, updatedAt, items, insight }: MacroSectionProps) {
  return (
    <section className="macro-section">
      <SectionHeader eyebrow={subtitle} title={title} meta={updatedAt} />
      <div className="macro-grid">
        {items.map((item) => (
          <article className={['macro-card', `macro-card--${item.tone}`].join(' ')} key={item.label}>
            <span className="macro-card__label">{item.label}</span>
            <strong className="macro-card__value">{item.value}</strong>
            <span className="macro-card__meta">{item.meta}</span>
          </article>
        ))}
      </div>
      <Card className="insight-card">
        <img className="insight-card__icon" src={insight.icon} alt="" />
        <div className="insight-card__copy">
          <strong>{insight.title}</strong>
          <div className="insight-card__body-row">
            <p>{insight.body}</p>
            <button className="insight-card__action" type="button" aria-label="開啟直播筆記">
              <Icon icon={ArrowRight} decorative />
            </button>
          </div>
        </div>
      </Card>
    </section>
  )
}
