import { routing } from '@/i18n/routing'
import { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function GET_APP_META_DATA({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : 'en',
    namespace: 'meta',
  })

  return {
    title: t('title'),
    description: t('description'),
    authors: [
      { name: 'Ward Khaddour', url: 'https://ward-khaddour.vercel.app' },
    ],
    keywords: t('keywords').split(','),
    alternates: {
      canonical: 'https://ward-khaddour.vercel.app/',
      languages: {
        ar: 'https://ward-khaddour.vercel.app/ar',
        en: 'https://ward-khaddour.vercel.app/en',
        de: 'https://ward-khaddour.vercel.app/de',
      },
    },

    icons: {
      icon: [
        {
          url: '/favicons/favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
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
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: 'https://ward-khaddour.vercel.app',
      siteName: t('openGraph.siteName'),
      images: [
        {
          url: 'https://ward-khaddour.vercel.app/og-image.png',
          width: 1200,
          height: 630,
          alt: t('openGraph.imageAlt'),
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: ['https://ward-khaddour.vercel.app/og-image.png'],
      creator: t('twitter.creator'),
    },
  }
}
