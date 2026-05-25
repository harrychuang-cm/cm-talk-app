import { Bookmark } from 'lucide-react'
import { Avatar } from './Avatar'
import { Chip } from './Chip'
import { IconButton } from './IconButton'
import { SectionHeader } from './SectionHeader'
import { TradeRail, type TradeItem } from './TradeRail'
import './FeedList.css'

export interface FeedItem {
  author: string
  role: string
  time: string
  avatar: string
  title: string
  summary: string
  tags: string[]
  image: string
}

export interface FeedListProps {
  subtitle: string
  title: string
  trades: TradeItem[]
  items: FeedItem[]
}

export function FeedList({ subtitle, title, trades, items }: FeedListProps) {
  return (
    <section className="feed-section">
      <SectionHeader eyebrow={subtitle} title={title} />
      <TradeRail items={trades} />
      <div className="feed-list">
        {items.map((item) => (
          <article className="feed-card" key={`${item.author}-${item.time}`}>
            <header className="feed-card__author">
              <Avatar src={item.avatar} alt={item.author} />
              <div>
                <strong>{item.author}</strong>
                <span>{item.role} · {item.time}</span>
              </div>
              <IconButton icon={Bookmark} label="收藏文章" />
            </header>
            <div className="feed-card__body">
              <div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="feed-card__tags">
                  {item.tags.map((tag) => (
                    <Chip key={tag} selected>
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>
              <img className="feed-card__thumb" src={item.image} alt="" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
