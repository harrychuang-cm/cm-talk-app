import type { InputHTMLAttributes, ReactNode } from 'react'
import { Label } from './Label'
import './Input.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  helper?: ReactNode
  error?: ReactNode
}

export function Input({ label, helper, error, id, className, disabled, ...props }: InputProps) {
  const inputId = id ?? `input-${String(label ?? 'field').replace(/\s+/g, '-').toLowerCase()}`
  return (
    <div className={['ui-input-field', error && 'ui-input-field--error', disabled && 'ui-input-field--disabled'].filter(Boolean).join(' ')}>
      {label ? (
        <Label htmlFor={inputId} error={Boolean(error)} disabled={disabled}>
          {label}
        </Label>
      ) : null}
      <input id={inputId} className={['ui-input', className].filter(Boolean).join(' ')} disabled={disabled} {...props} />
      {error || helper ? <span className="ui-input-field__helper">{error ?? helper}</span> : null}
    </div>
  )
}
