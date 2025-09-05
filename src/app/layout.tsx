import { GET_APP_LD } from '@/meta/app-ld'
import { GET_APP_META_DATA } from '@/meta/app-meta'
import '@/styles/globals.css'
import { Open_Sans } from 'next/font/google'
import Script from 'next/script'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = GET_APP_META_DATA

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const APP_LD = await GET_APP_LD()
  return (
    <html lang='en' suppressHydrationWarning className='no-js dark'>
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
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
