import type { LabelHTMLAttributes, ReactNode } from 'react'
import './Label.css'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
  error?: boolean
  disabled?: boolean
  helper?: ReactNode
}

export function Label({ required, error, disabled, helper, children, className, ...props }: LabelProps) {
  return (
    <label
      className={['ui-label', error && 'ui-label--error', disabled && 'ui-label--disabled', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <span className="ui-label__text">
        {children}
        {required ? <span className="ui-label__required"> *</span> : null}
      </span>
      {helper ? <span className="ui-label__helper">{helper}</span> : null}
    </label>
  )
}
