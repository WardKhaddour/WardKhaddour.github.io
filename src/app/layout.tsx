import { ScrollToTop } from '@/components/scroll-to-top'
import { ThemeProvider } from '@/store/theme-provider'
import '@/styles/globals.css'
import { Header } from '@/views'
import Footer from '@/views/footer'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Script from 'next/script'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ward Khaddour | Full Stack Web Developer - Next.js, React, Nest.js',
  description:
    'Ward Khaddour is a full stack JavaScript developer specializing in React, Next.js, Nest.js, and modern web technologies. Portfolio, projects, and contact info.',
  authors: [{ name: 'Ward Khaddour', url: 'https://ward-khaddour.vercel.app' }],
  keywords: [
    'Ward Khaddour',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Nest.js',
    'TypeScript',
    'JavaScript',
    'Portfolio',
    'Web Development',
  ],
  alternates: {
    canonical: 'https://ward-khaddour.vercel.app/',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicons/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/favicons/apple-touch-icon.png', type: 'image/png' }],
    other: [
      {
        rel: 'icon',
        url: '/favicons/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicons/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicons/site.webmanifest',
  openGraph: {
    title: 'Ward Khaddour | Full Stack JavaScript Developer',
    description: 'Explore projects and skills in React, Next.js, and Nest.js.',
    url: 'https://ward-khaddour.vercel.app',
    siteName: 'Ward Khaddour Portfolio',
    images: [
      {
        url: 'https://ward-khaddour.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ward Khaddour Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ward Khaddour | Full Stack Developer',
    description: 'Explore my work in modern web development.',
    images: ['https://ward-khaddour.vercel.app/og-image.png'],
    creator: '@WardKhaddour',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning className='no-js dark'>
      <head>
        <Script
          id='ld-json'
          type='application/ld+json'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ward Khaddour',
              url: 'https://ward-khaddour.vercel.app',
              image: 'https://ward-khaddour.vercel.app/og-image.png',
              jobTitle: 'Full Stack Web Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance / Remote',
              },
              sameAs: [
                'https://github.com/WardKhaddour',
                'https://linkedin.com/in/ward-khaddour',
              ],
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Nest.js',
                'Node.js',
                'PostgreSQL',
                'Tailwind CSS',
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Tishreen University',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'SY',
                addressLocality: 'Latakia',
              },
            }),
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
        <ThemeProvider>
          <div className='bg-background dark:bg-dark-background text-text dark:text-dark-text flex min-h-screen flex-col scroll-smooth transition-colors duration-300'>
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
