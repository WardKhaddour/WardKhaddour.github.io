'use client'

import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type Props<T> = {
  slides: T[]
  children: React.ReactNode
}

export default function Slider<T>({ slides, children }: Props<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className='container mx-auto'>
      <div className='relative'>
        <div
          className='overflow-hidden'
          ref={emblaRef}
        >
          <div className='flex'>{children}</div>
        </div>

        {/* Prev Button */}
        <button
          onClick={scrollPrev}
          className='absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 -translate-x-4 cursor-pointer bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hidden sm:block z-10'
          aria-label='Previous'
        >
          <FaChevronLeft className='text-gray-800 dark:text-white' />
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className='absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 translate-x-4 cursor-pointer bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hidden sm:block z-10'
          aria-label='Next'
        >
          <FaChevronRight className='text-gray-800 dark:text-white' />
        </button>
      </div>

      {/* Dots */}
      <div className='flex justify-center mt-8 gap-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              selectedIndex === index
                ? 'bg-red-600'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
