'use client'

import { ThemeProvider } from '@/store/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { Locale, NextIntlClientProvider } from 'next-intl'

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode
  locale: Locale
  messages: Record<string, string>
}) {
  return (
    <ThemeProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
      <Analytics />
    </ThemeProvider>
  )
}
