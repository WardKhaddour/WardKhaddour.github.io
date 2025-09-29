import { Providers } from '@/components/providers'
import { ScrollToTop } from '@/components/scroll-to-top'
import { routing } from '@/i18n/routing'
import { GET_APP_LD } from '@/meta/app-ld'
import { GET_APP_META_DATA } from '@/meta/app-meta'
import '@/styles/globals.css'
import { Header } from '@/views'
import Footer from '@/views/footer'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Open_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'

const openSans = Open_Sans({ subsets: ['latin'] })

export const generateMetadata = GET_APP_META_DATA

export const dynamic = 'force-static'
export const generateStaticParams = () => {
  return routing.locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = (await import(`@/i18n/locales/${locale}.json`)).default
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const APP_LD = await GET_APP_LD(locale)

  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
      className='no-js dark'
    >
      <head>
        <Script
          id='ld-json'
          type='application/ld+json'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(APP_LD),
          }}
        />
        <noscript>
          <style>{`
            .no-js .js-dependent  {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js');`,
          }}
        />
      </head>
      <body className={openSans.className}>
        <Providers locale={locale} messages={messages}>
          <div className='bg-background dark:bg-dark-background text-text dark:text-dark-text flex min-h-screen flex-col scroll-smooth transition-colors duration-300'>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
        <ScrollToTop />
      </body>
    </html>
  )
}
