import type { LucideIcon, LucideProps } from 'lucide-react'
import { HelpCircle } from 'lucide-react'
import './Icon.css'

export type IconTone = 'default' | 'muted' | 'primary'
export type IconSize = 'sm' | 'md'

export interface IconProps extends Omit<LucideProps, 'color' | 'size'> {
  icon?: LucideIcon
  label?: string
  decorative?: boolean
  tone?: IconTone
  size?: IconSize
}

export function Icon({
  icon: Glyph = HelpCircle,
  label,
  decorative = !label,
  tone = 'default',
  size = 'md',
  className,
  ...props
}: IconProps) {
  return (
    <Glyph
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : label}
      className={['ui-icon', `ui-icon--${tone}`, `ui-icon--${size}`, className].filter(Boolean).join(' ')}
      focusable="false"
      strokeWidth="var(--comp-icon-stroke)"
      {...props}
    />
  )
}
