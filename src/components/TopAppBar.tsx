import { Bell, Moon, Search } from 'lucide-react'
import { Avatar } from './Avatar'
import { IconButton } from './IconButton'
import './TopAppBar.css'

export interface TopAppBarProps {
  brand: string
  brandImage?: string
  onThemeToggle?: () => void
}

export function TopAppBar({ brand, brandImage, onThemeToggle }: TopAppBarProps) {
  return (
    <header className="top-app-bar">
      <div className="top-app-bar__brand">
        <Avatar src={brandImage} alt={brand} size="lg" initials={brand.slice(0, 1)} />
      </div>
      <div className="top-app-bar__actions">
        <IconButton icon={Search} label="搜尋" />
        <IconButton icon={Moon} label="切換深淺色主題" onClick={onThemeToggle} />
        <IconButton icon={Bell} label="通知" />
      </div>
    </header>
  )
}
