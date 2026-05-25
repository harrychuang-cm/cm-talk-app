import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'
import { IconButton } from './IconButton'
import './Dialog.css'

export interface DialogProps {
  open?: boolean
  title?: ReactNode
  children?: ReactNode
  actionLabel?: ReactNode
  onAction?: () => void
  onClose?: () => void
}

export function Dialog({ open = false, title, children, actionLabel, onAction, onClose }: DialogProps) {
  if (!open) return null

  return (
    <div className="ui-dialog-backdrop" role="presentation">
      <section className="ui-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <header className="ui-dialog__header">
          <h2 id="dialog-title" className="ui-dialog__title">
            {title}
          </h2>
          <IconButton icon={X} label="關閉" onClick={onClose} />
        </header>
        <div className="ui-dialog__body">{children}</div>
        {actionLabel ? (
          <footer className="ui-dialog__actions">
            <Button onClick={onAction}>{actionLabel}</Button>
          </footer>
        ) : null}
      </section>
    </div>
  )
}
