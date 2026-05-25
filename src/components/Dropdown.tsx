import type { SelectHTMLAttributes } from 'react'
import { Label } from './Label'
import './Dropdown.css'

export interface DropdownOption {
  value: string
  label: string
}

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  helper?: string
  error?: string
  placeholder?: string
  options?: DropdownOption[]
}

export function Dropdown({ label, helper, error, placeholder, options = [], id, disabled, className, ...props }: DropdownProps) {
  const selectId = id ?? `dropdown-${String(label ?? 'field').replace(/\s+/g, '-').toLowerCase()}`
  return (
    <div className={['ui-dropdown-field', error && 'ui-dropdown-field--error'].filter(Boolean).join(' ')}>
      {label ? (
        <Label htmlFor={selectId} error={Boolean(error)} disabled={disabled}>
          {label}
        </Label>
      ) : null}
      <select id={selectId} className={['ui-dropdown', className].filter(Boolean).join(' ')} disabled={disabled} {...props}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error || helper ? <span className="ui-dropdown-field__helper">{error ?? helper}</span> : null}
    </div>
  )
}
