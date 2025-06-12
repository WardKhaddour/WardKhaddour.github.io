'use client'

import { useTheme } from '@/store/theme-provider'
import { FaMoon, FaSun } from 'react-icons/fa6'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700 transition-all'
      aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <FaSun className='h-5 w-5' />
      ) : (
        <FaMoon className='h-5 w-5' />
      )}
    </button>
  )
}
