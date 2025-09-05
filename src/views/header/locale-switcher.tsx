'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { cn } from '@/utils/cn'
import { Locale, useLocale } from 'next-intl'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState, useTransition } from 'react'
import { FaGlobe } from 'react-icons/fa6'

const localeNames = {
  en: 'English',
  de: 'Deutsch',
  ar: 'العربية',
}

const localeIcons = {
  en: '🇺🇸',
  de: '🇩🇪',
  ar: '🇸🇦',
}

export function LocaleSwitcher() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function changeLocale(nextLocale: Locale) {
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params }, { locale: nextLocale })
      setIsOpen(false)
    })
  }

  return (
    <div className='relative inline-block' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          'inline-flex items-center gap-2 rounded-xl border-2 border-transparent p-2',
          'text-text dark:text-dark-text hover:border-primary/50 dark:hover:border-dark-primary/50 transition-all duration-300',
          'focus:ring-primary/20 dark:focus:ring-dark-primary/20 focus:ring-4 focus:outline-none',
          'transform hover:scale-105 disabled:opacity-50',
        )}
      >
        <FaGlobe className='h-4 w-4' />
        <span className='text-sm font-medium'>{locale.toUpperCase()}</span>
        <svg
          className={cn(
            'h-4 w-4 transition-transform duration-300',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      <div
        className={cn(
          'border-border dark:border-dark-border bg-background dark:bg-dark-background absolute top-full right-0 z-50 mt-2 w-48 origin-top-right rounded-xl border p-2 shadow-lg',
          'transform transition-all duration-300',
          isOpen
            ? 'scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0',
        )}
      >
        {Object.entries(localeNames).map(([code, name]) => (
          <button
            key={code}
            onClick={() => changeLocale(code as Locale)}
            className={cn(
              'flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-left transition-all duration-200',
              'hover:bg-primary/10 dark:hover:bg-dark-primary/10',
              locale === code && 'bg-primary/20 dark:bg-dark-primary/20',
            )}
          >
            <span className='text-lg'>
              {localeIcons[code as keyof typeof localeIcons]}
            </span>
            <span className='flex-1 font-medium'>{name}</span>
            {locale === code && (
              <div className='bg-primary dark:bg-dark-primary h-2 w-2 rounded-full' />
            )}
          </button>
        ))}
      </div>

      {isPending && (
        <div className='bg-background/80 dark:bg-dark-background/80 absolute inset-0 flex items-center justify-center rounded-xl'>
          <div className='border-primary dark:border-dark-primary h-5 w-5 animate-spin rounded-full border-2 border-t-transparent dark:border-t-transparent' />
        </div>
      )}
    </div>
  )
}
