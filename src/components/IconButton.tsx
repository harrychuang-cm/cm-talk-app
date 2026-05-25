import type { ButtonHTMLAttributes } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Search } from 'lucide-react'
import { Icon } from './Icon'
import './IconButton.css'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon
  label?: string
  active?: boolean
}

export function IconButton({ icon = Search, label = 'Icon action', active = false, className, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={['ui-icon-button', active && 'ui-icon-button--active', className].filter(Boolean).join(' ')}
      type="button"
      {...props}
    >
      <Icon icon={icon} decorative tone="primary" />
    </button>
  )
}
