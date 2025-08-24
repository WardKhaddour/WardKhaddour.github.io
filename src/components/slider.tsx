'use client'

import { cn } from '@/utils/cn'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type Props = {
  slides: React.ReactNode[]
  slidesPerView?: number
  breakpoints?: { [width: number]: number }
  showArrows?: boolean
  showDots?: boolean
  renderPrevArrow?: (scrollPrev: () => void) => React.ReactNode
  renderNextArrow?: (scrollNext: () => void) => React.ReactNode
  renderDot?: (props: {
    index: number
    isActive: boolean
    onClick: () => void
  }) => React.ReactNode
  options?: Parameters<typeof useEmblaCarousel>[0]
  onSlideChange?: (index: number) => void
  className?: string
}

export const Slider: React.FC<Props> = ({
  slides,
  slidesPerView = 1,
  breakpoints = {},
  showArrows = false,
  showDots = false,
  options,
  onSlideChange,
  className = '',
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options || { align: 'start', dragFree: false, loop: true },
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(slidesPerView)

  const updateSlidesPerView = useCallback(() => {
    const width = window.innerWidth
    let newSlidesPerView = slidesPerView
    Object.keys(breakpoints)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach(bp => {
        if (width >= bp) newSlidesPerView = breakpoints[bp]
      })
    setVisibleSlides(newSlidesPerView)
  }, [breakpoints, slidesPerView])

  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [updateSlidesPerView])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap()
      setSelectedIndex(index)
      onSlideChange?.(index)
    }
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSlideChange])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()
  const scrollTo = (index: number) => emblaApi?.scrollTo(index)

  return (
    <div className={cn('relative h-fit w-full', className)}>
      <div className={cn('h-full cursor-grab overflow-hidden')} ref={emblaRef}>
        <div className='flex' style={{ gap: '1rem' }}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={cn(
                'flex-[0_0_auto]',
                idx === slides.length - 1 && 'pe-4',
              )}
              style={{ width: `${100 / visibleSlides}%` }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            className={cn(
              'absolute top-1/2 -left-2 z-10 hidden -translate-x-4 -translate-y-1/2 cursor-pointer rounded-full p-2 shadow-md transition-colors sm:block md:-left-5',
              'bg-surface dark:bg-dark-surface hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary',
            )}
            aria-label='Previous'
          >
            <FaChevronLeft className={cn('text-icon dark:text-dark-icon')} />
          </button>

          <button
            onClick={scrollNext}
            className={cn(
              'absolute top-1/2 -right-2 z-10 hidden translate-x-4 -translate-y-1/2 cursor-pointer rounded-full p-2 shadow-md transition-colors sm:block md:-right-5',
              'bg-surface dark:bg-dark-surface hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary',
            )}
            aria-label='Next'
          >
            <FaChevronRight className={cn('text-icon dark:text-dark-icon')} />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && (
        <div className='mt-8 flex justify-center gap-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                'h-3 w-3 cursor-pointer rounded-full transition-colors',
                selectedIndex === index
                  ? 'bg-primary dark:bg-dark-primary'
                  : 'bg-border-muted dark:bg-dark-border-muted',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
