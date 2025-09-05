'use client'

import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function DownloadResume() {
  const [isLoading, setIsLoading] = useState(false)
  const t = useTranslations()
  const handleDownload = async () => {
    setIsLoading(true)
    try {
      const link = document.createElement('a')
      link.href = '/Ward_Khaddour.pdf'
      link.download = 'Ward_Khaddour_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading the file:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className={cn(
        'cursor-pointer rounded-lg border px-6 py-3 transition-all duration-300',

        'text-primary border-border hover:-translate-y-1 hover:shadow-xl',

        'dark:border-dark-border dark:text-dark-text',
      )}
    >
      {isLoading ? t('hero.downloading') : t('hero.downloadResume')}
    </button>
  )
}
