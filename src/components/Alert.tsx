import type { HTMLAttributes, ReactNode } from 'react'
import { X } from 'lucide-react'
import { IconButton } from './IconButton'
import './Alert.css'

export type AlertTone = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: AlertTone
  title?: ReactNode
  dismissible?: boolean
  onDismiss?: () => void
}

export function Alert({ tone = 'info', title, dismissible, onDismiss, children, className, ...props }: AlertProps) {
  return (
    <div className={['ui-alert', `ui-alert--${tone}`, className].filter(Boolean).join(' ')} role="status" {...props}>
      <span className="ui-alert__accent" aria-hidden="true" />
      <div className="ui-alert__body">
        {title ? <strong className="ui-alert__title">{title}</strong> : null}
        <div className="ui-alert__content">{children}</div>
      </div>
      {dismissible ? <IconButton icon={X} label="關閉通知" onClick={onDismiss} /> : null}
    </div>
  )
}
