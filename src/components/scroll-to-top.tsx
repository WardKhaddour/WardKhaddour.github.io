'use client'

import { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className='fixed right-2 bottom-8 z-50 cursor-pointer rounded-full bg-red-600 p-3 text-white shadow-lg transition hover:bg-red-500'
      aria-label='Scroll to top'
    >
      <FaChevronUp />
    </button>
  )
}
