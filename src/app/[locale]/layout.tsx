import { Providers } from '@/components/providers'
import { ScrollToTop } from '@/components/scroll-to-top'
import { routing } from '@/i18n/routing'
import { Header } from '@/views'
import Footer from '@/views/footer'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const messages = (await import(`@/i18n/locales/${locale}.json`)).default
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <>
      <Providers locale={locale} messages={messages}>
        <div className='bg-background dark:bg-dark-background text-text dark:text-dark-text flex min-h-screen flex-col scroll-smooth transition-colors duration-300'>
          <Header />
          {children}
          <Footer />
        </div>
      </Providers>
      <ScrollToTop />
    </>
  )
}
