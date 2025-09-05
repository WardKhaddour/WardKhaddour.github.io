'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { layoutPadding } from '@/constants/class-names'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { LocaleSwitcher } from './locale-switcher'

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const t = useTranslations('header')
  const navItems = [
    { name: t('about'), href: '/#about-me' },
    { name: t('projects'), href: '/#projects' },
    { name: t('skills'), href: '/#skills' },
    { name: t('work'), href: '/#experience' },
    { name: t('contact'), href: '/#contact' },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <header
        className={cn(
          'border-border bg-background/80 dark:border-dark-border dark:bg-dark-background/80 sticky top-0 z-40 border-b-2 backdrop-blur-sm',
          layoutPadding,
        )}
      >
        <div className='py-4'>
          <div className='flex items-center justify-between'>
            <Link href='/#home' className=''>
              <Image
                className='h-10 w-24 object-cover'
                src='/logo.png'
                alt=''
                width={75}
                height={75}
              />
            </Link>

            <nav className='hidden items-center justify-between gap-8 lg:flex'>
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-text hover:text-primary-hover dark:text-dark-text dark:hover:text-dark-primary-hover transition-colors'
                >
                  {item.name}
                </Link>
              ))}
              <LocaleSwitcher />
              <ThemeToggle />
            </nav>

            <div className='flex items-center space-x-4 lg:hidden'>
              <LocaleSwitcher />
              <ThemeToggle />
              <button
                onClick={toggleSidebar}
                className='text-text hover:text-primary-hover dark:text-dark-text dark:hover:text-dark-primary-hover transition-colors'
                aria-label='Toggle menu'
              >
                {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-300 ease-in-out lg:hidden ${
          isSidebarOpen
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <div
          className='bg-overlay dark:bg-dark-overlay absolute inset-0'
          onClick={toggleSidebar}
          role='button'
          onKeyDown={() => {}}
          tabIndex={-1}
        />

        <div
          className={`border-border bg-surface dark:border-dark-border dark:bg-dark-surface absolute top-18 right-0 h-full w-64 border-l transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex h-full flex-col p-6'>
            <nav className='flex flex-col space-y-6'>
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleSidebar}
                  className='text-text hover:text-primary-hover dark:text-dark-text dark:hover:text-dark-primary-hover text-lg transition-colors'
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
