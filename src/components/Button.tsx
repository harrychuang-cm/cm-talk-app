import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'ghost'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  loading?: boolean
  iconAfter?: ReactNode
  iconBefore?: ReactNode
}

export function Button({
  variant = 'primary',
  loading = false,
  iconAfter,
  iconBefore,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={['ui-button', `ui-button--${variant}`, className].filter(Boolean).join(' ')}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      {loading ? <span className="ui-button__spinner" aria-hidden="true" /> : iconBefore}
      <span className="ui-button__label">{children}</span>
      {iconAfter}
    </button>
  )
}
