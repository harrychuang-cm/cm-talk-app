import type { ReactNode } from 'react'
import './AppShell.css'

export interface AppShellProps {
  children?: ReactNode
  nav?: ReactNode
}

export function AppShell({ children, nav }: AppShellProps) {
  return (
    <main className="app-shell">
      <div className="app-shell__content">{children}</div>
      {nav}
    </main>
  )
}
