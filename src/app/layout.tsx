import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '../store/theme-provider'
import './globals.css'

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
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    apple: [{ url: '/favicons/apple-touch-icon.png', type: 'image/png' }],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicons/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicons/android-chrome-512x512.png',
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
    <html
      lang='en'
      suppressHydrationWarning
      className='no-js dark'
    >
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
          <div className='bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col scroll-smooth '>
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <ScrollToTop />
      </body>
    </html>
  )
}
