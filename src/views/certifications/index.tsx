import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiCalendar, FiExternalLink } from 'react-icons/fi'

type Props = {
  className?: string
}

export function CertificationsSection({ className = '' }: Props) {
  const t = useTranslations('certifications')
  const certifications = t.raw('list') as {
    name: string
    from: string
    credentialId: string
    date: string
    link: string
  }[]

  return (
    <section id='certifications' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <SectionHeader>{t('title')}</SectionHeader>
          <SectionDescription>{t('description')}</SectionDescription>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {certifications.map(cert => (
            <article
              key={cert.credentialId}
              className={cn(
                'overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-xl',
                'bg-surface dark:bg-dark-surface',
              )}
            >
              <div className='p-6'>
                <div className='mb-4'>
                  <span
                    className={cn(
                      'inline-block rounded-full px-3 py-1 text-sm',
                      'bg-primary-light dark:bg-dark-primary-light',
                      'text-text dark:text-dark-text',
                    )}
                  >
                    {cert.from}
                  </span>
                </div>
                <h3 className='text-text dark:text-dark-text mb-3 text-xl font-bold'>
                  {cert.name}
                </h3>
                <div
                  className={cn(
                    'mb-4 flex items-center gap-2 text-sm',
                    'text-text-muted dark:text-dark-text-muted',
                  )}
                >
                  <FiCalendar />
                  <span>{cert.date}</span>
                </div>
                <p className='text-text-secondary dark:text-dark-text-muted mb-4 text-sm'>
                  {t('credentialId')}: {cert.credentialId}
                </p>
              </div>
              <div className='px-6 pb-6'>
                <Link
                  href={cert.link}
                  target='_blank'
                  className={cn(
                    'flex items-center gap-2 font-medium hover:underline',
                    'text-primary dark:text-dark-primary',
                  )}
                >
                  <span>{t('verify')}</span>
                  <FiExternalLink className='text-sm' />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
