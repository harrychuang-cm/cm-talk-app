import './ShortcutRail.css'

export interface ShortcutItem {
  label: string
  image?: string
}

export interface ShortcutRailProps {
  items: ShortcutItem[]
}

export function ShortcutRail({ items }: ShortcutRailProps) {
  return (
    <section className="shortcut-rail" aria-label="快速入口">
      <div className="shortcut-rail__track">
        {items.map((item) => (
          <button className="shortcut-tile" key={item.label} type="button">
            <span className="shortcut-tile__icon">{item.image ? <img src={item.image} alt="" /> : null}</span>
            <strong className="shortcut-tile__label">{item.label}</strong>
          </button>
        ))}
      </div>
    </section>
  )
}
