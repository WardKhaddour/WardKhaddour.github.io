import { getTranslations } from 'next-intl/server'

export async function GET_APP_LD() {
  const t = await getTranslations('ld')

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ward Khaddour',
    url: 'https://ward-khaddour.vercel.app',
    image: 'https://ward-khaddour.vercel.app/og-image.png',
    jobTitle: t('jobTitle'),
    worksFor: {
      '@type': 'Organization',
      name: t('worksFor'),
    },
    sameAs: [
      'https://github.com/WardKhaddour',
      'https://linkedin.com/in/ward-khaddour',
    ],
    knowsAbout: t('knowsAbout').split(','),
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: t('alumniOf'),
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SY',
      addressLocality: t('addressLocality'),
    },
  }
}
