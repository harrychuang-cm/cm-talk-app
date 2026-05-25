import { Bookmark } from 'lucide-react'
import { Button } from './Button'
import { Icon } from './Icon'
import { IconButton } from './IconButton'
import { X } from 'lucide-react'
import './ArticleSheet.css'

export interface ArticleSheetPoint {
  label: string
  text: string
}

export interface ArticleSheetProps {
  open?: boolean
  eyebrow: string
  source: string
  title: string
  summary: string
  image: string
  points: ArticleSheetPoint[]
  onClose?: () => void
}

export function ArticleSheet({ open = false, eyebrow, source, title, summary, image, points, onClose }: ArticleSheetProps) {
  if (!open) return null
  return (
    <div className="article-sheet-backdrop">
      <section className="article-sheet" role="dialog" aria-modal="true" aria-labelledby="article-sheet-title">
        <span className="article-sheet__handle" />
        <header className="article-sheet__header">
          <div>
            <span className="article-sheet__eyebrow">{eyebrow}</span>
            <h2 id="article-sheet-title">{title}</h2>
            <span className="article-sheet__source">{source}</span>
          </div>
          <IconButton className="article-sheet__close" icon={X} label="關閉文章" onClick={onClose} />
        </header>
        <img className="article-sheet__media" src={image} alt="" />
        <p className="article-sheet__summary">{summary}</p>
        <div className="article-sheet__points">
          {points.map((point) => (
            <article key={point.label}>
              <strong>{point.label}</strong>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
        <Button iconAfter={<Icon icon={Bookmark} decorative />}>收藏判讀</Button>
      </section>
    </div>
  )
}
