import { useEffect, useState } from 'react'
import { FileText, Home, MessageCircle, User, Users } from 'lucide-react'
import {
  AppShell,
  ArticleSheet,
  BottomNav,
  FeedList,
  HeroCarousel,
  MacroSection,
  SentimentCard,
  ShortcutRail,
  TopAppBar,
} from '../components'
import { homeContent } from '../data/homeContent'
import './DesignSpecHomeScreen.css'

const navItems = [
  { id: 'home', label: '首頁', icon: Home, active: true },
  { id: 'community', label: '社團', icon: Users },
  { id: 'content', label: '內容', icon: FileText },
  { id: 'chat', label: 'chat', icon: MessageCircle },
  { id: 'me', label: '我的', icon: User },
]

export function DesignSpecHomeScreen() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [sheetOpen, setSheetOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <AppShell nav={<BottomNav items={navItems} />}>
      <TopAppBar
        brand={homeContent.app.brand}
        brandImage={homeContent.app.brandImage}
        onThemeToggle={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
      />
      <section className="home-section home-section--sentiment">
        <SentimentCard {...homeContent.app.sentiment} />
      </section>
      <ShortcutRail items={homeContent.shortcuts} />
      <HeroCarousel slides={homeContent.hero.slides} onPrimarySlideClick={() => setSheetOpen(true)} />
      <MacroSection {...homeContent.macro} />
      <FeedList subtitle="Talk君觀點與小編整理" title="News Feed" trades={homeContent.trades} items={homeContent.feed} />
      <ArticleSheet {...homeContent.article} open={sheetOpen} onClose={() => setSheetOpen(false)} />
    </AppShell>
  )
}
