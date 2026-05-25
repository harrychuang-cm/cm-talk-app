import './SectionHeader.css'

export interface SectionHeaderProps {
  eyebrow?: string
  title: string
  meta?: string
}

export function SectionHeader({ eyebrow, title, meta }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div>
        {eyebrow ? <span className="section-header__eyebrow">{eyebrow}</span> : null}
        <h2 className="section-header__title">{title}</h2>
      </div>
      {meta ? <span className="section-header__meta">{meta}</span> : null}
    </header>
  )
}
