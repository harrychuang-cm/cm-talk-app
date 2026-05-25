import type { HTMLAttributes, ReactNode } from 'react'
import './Card.css'

export type CardVariant = 'default' | 'muted' | 'elevated' | 'outlined'

export interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: CardVariant
  interactive?: boolean
  children?: ReactNode
}

export function Card({ variant = 'default', interactive = false, className, children, ...props }: CardProps) {
  return (
    <article
      className={['ui-card', `ui-card--${variant}`, interactive && 'ui-card--interactive', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </article>
  )
}
