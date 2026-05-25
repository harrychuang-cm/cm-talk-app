import type { ButtonHTMLAttributes } from 'react'
import './Tabs.css'

export type TabsVariant = 'underline' | 'segmented'

export interface TabItem extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  id: string
  label: string
  active?: boolean
}

export interface TabsProps {
  items?: TabItem[]
  variant?: TabsVariant
  ariaLabel?: string
}

export function Tabs({ items = [], variant = 'segmented', ariaLabel = 'Tabs' }: TabsProps) {
  return (
    <div className={['ui-tabs', `ui-tabs--${variant}`].join(' ')} role="tablist" aria-label={ariaLabel}>
      {items.map(({ id, label, active, className, ...buttonProps }) => (
        <button
          key={id}
          aria-selected={active}
          className={['ui-tabs__item', active && 'ui-tabs__item--active', className].filter(Boolean).join(' ')}
          role="tab"
          type="button"
          {...buttonProps}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
