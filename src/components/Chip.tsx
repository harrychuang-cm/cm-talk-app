import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import './Chip.css'

export type ChipVariant = 'filled' | 'outlined'

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant
  selected?: boolean
  disabled?: boolean
  children?: ReactNode
}

export function Chip({ variant = 'filled', selected = false, disabled = false, className, children, ...props }: ChipProps) {
  return (
    <span
      aria-disabled={disabled || undefined}
      className={[
        'ui-chip',
        `ui-chip--${variant}`,
        selected && 'ui-chip--selected',
        disabled && 'ui-chip--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}

export interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ChipVariant
  selected?: boolean
}

export function ChipButton({ variant = 'filled', selected = false, className, children, ...props }: ChipButtonProps) {
  return (
    <button
      className={['ui-chip', 'ui-chip--button', `ui-chip--${variant}`, selected && 'ui-chip--selected', className]
        .filter(Boolean)
        .join(' ')}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
