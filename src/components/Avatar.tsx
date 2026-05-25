import type { HTMLAttributes } from 'react'
import type { LucideIcon } from 'lucide-react'
import { User } from 'lucide-react'
import { Icon } from './Icon'
import './Avatar.css'

export type AvatarSize = 'sm' | 'md' | 'lg'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  initials?: string
  icon?: LucideIcon
  size?: AvatarSize
  disabled?: boolean
}

export function Avatar({ src, alt = '', initials, icon = User, size = 'md', disabled = false, className, ...props }: AvatarProps) {
  return (
    <div className={['ui-avatar', `ui-avatar--${size}`, disabled && 'ui-avatar--disabled', className].filter(Boolean).join(' ')} {...props}>
      {src ? <img className="ui-avatar__image" src={src} alt={alt} /> : initials ? <span>{initials.slice(0, 2)}</span> : <Icon icon={icon} decorative tone="muted" />}
    </div>
  )
}
