import './TradeRail.css'

export interface TradeItem {
  type: 'buy' | 'sell'
  action: string
  ticker: string
  company: string
  date: string
  position: string
  reason: string
}

export interface TradeRailProps {
  items: TradeItem[]
}

export function TradeRail({ items }: TradeRailProps) {
  return (
    <div className="trade-rail" aria-label="Talk君交易動態">
      <div className="trade-rail__track">
        {items.map((item) => (
          <article className={['trade-card', item.type === 'sell' && 'trade-card--sell'].filter(Boolean).join(' ')} key={`${item.ticker}-${item.date}`}>
            <div className="trade-card__topline">
              <span className="trade-card__badge">{item.action}</span>
              <span className="trade-card__date">{item.date}</span>
            </div>
            <div className="trade-card__symbol">
              <strong>{item.ticker}</strong>
              <span>{item.company}</span>
            </div>
            <span className="trade-card__position">{item.position}</span>
            <p>{item.reason}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
