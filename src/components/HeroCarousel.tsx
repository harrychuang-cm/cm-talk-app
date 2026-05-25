import { useCallback, useState, type CSSProperties, type UIEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from './Button'
import { Icon } from './Icon'
import './HeroCarousel.css'

export interface HeroSlide {
  eyebrow: string
  title: string
  body: string
  cta: string
  image: string
}

export interface HeroCarouselProps {
  slides: HeroSlide[]
  onPrimarySlideClick?: () => void
}

export function HeroCarousel({ slides, onPrimarySlideClick }: HeroCarouselProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const handleTrackScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget
    const slideElements = Array.from(track.querySelectorAll<HTMLElement>('.hero-card'))

    if (slideElements.length === 0) {
      return
    }

    const styles = window.getComputedStyle(track)
    const paddingInlineStart = Number.parseFloat(styles.paddingInlineStart) || 0
    const viewportStart = track.scrollLeft + paddingInlineStart
    let nextIndex = 0
    let shortestDistance = Number.POSITIVE_INFINITY

    slideElements.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - viewportStart)

      if (distance < shortestDistance) {
        shortestDistance = distance
        nextIndex = index
      }
    })

    setActiveSlideIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex))
  }, [])

  return (
    <section className="hero-carousel" aria-label="首頁重點輪播">
      <div className="hero-carousel__track" onScroll={handleTrackScroll}>
        {slides.map((slide, index) => (
          <article
            className={['hero-card', index === 2 && 'hero-card--light'].filter(Boolean).join(' ')}
            key={slide.title}
            onClick={index === 0 ? onPrimarySlideClick : undefined}
            role={index === 0 ? 'button' : undefined}
            style={{ '--hero-image': `url(${slide.image})` } as CSSProperties}
            tabIndex={index === 0 ? 0 : undefined}
          >
            <span className="hero-card__eyebrow">{slide.eyebrow}</span>
            <h2 className="hero-card__title">{slide.title}</h2>
            <p className="hero-card__body">{slide.body}</p>
            <Button variant={index === 2 ? 'primary' : 'secondary'} iconAfter={<Icon icon={ArrowRight} decorative />}>
              {slide.cta}
            </Button>
          </article>
        ))}
      </div>
      <div className="hero-carousel__dots" aria-hidden="true">
        {slides.map((slide, index) => (
          <span className={['hero-carousel__dot', index === activeSlideIndex && 'hero-carousel__dot--active'].filter(Boolean).join(' ')} key={slide.title} />
        ))}
      </div>
    </section>
  )
}
