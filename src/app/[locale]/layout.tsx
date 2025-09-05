import { Providers } from '@/components/providers'
import { ScrollToTop } from '@/components/scroll-to-top'
import { routing } from '@/i18n/routing'
import { GET_APP_LD } from '@/meta/app-ld'
import { GET_APP_META_DATA } from '@/meta/app-meta'
import '@/styles/globals.css'
import { Header } from '@/views'
import Footer from '@/views/footer'
import { hasLocale } from 'next-intl'
import { Open_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = GET_APP_META_DATA

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const APP_LD = await GET_APP_LD()
  const { locale } = await params
  const messages = (await import(`@/i18n/locales/${locale}.json`)).default
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
      className='no-js dark'
    >
      <head>
        <link
          rel='alternate'
          href='https://ward-khaddour.vercel.app/en'
          hrefLang='en'
        />
        <link
          rel='alternate'
          href='https://ward-khaddour.vercel.app/ar'
          hrefLang='ar'
        />
        <link
          rel='alternate'
          href='https://ward-khaddour.vercel.app/de'
          hrefLang='de'
        />
        <link
          rel='alternate'
          href='https://ward-khaddour.vercel.app'
          hrefLang='x-default'
        />
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
