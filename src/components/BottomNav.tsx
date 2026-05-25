import type { ButtonHTMLAttributes } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Icon } from './Icon'
import './BottomNav.css'

export interface BottomNavItem extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  id: string
  label: string
  icon: LucideIcon
  active?: boolean
  badge?: string
}

export interface BottomNavProps {
  items?: BottomNavItem[]
  ariaLabel?: string
}

export function BottomNav({ items = [], ariaLabel = 'Primary navigation' }: BottomNavProps) {
  return (
    <nav className="ui-bottom-nav" aria-label={ariaLabel}>
      {items.map(({ id, label, icon, active, badge, className, ...buttonProps }) => (
        <button
          key={id}
          aria-current={active ? 'page' : undefined}
          className={['ui-bottom-nav__item', active && 'ui-bottom-nav__item--active', className].filter(Boolean).join(' ')}
          type="button"
          {...buttonProps}
        >
          <span className="ui-bottom-nav__icon">
            <Icon icon={icon} decorative tone={active ? 'primary' : 'muted'} />
            {badge ? <span className="ui-bottom-nav__badge">{badge}</span> : null}
          </span>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  )
}
