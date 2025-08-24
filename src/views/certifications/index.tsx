import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { certifications } from '@/data/certifications'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { FiCalendar, FiExternalLink } from 'react-icons/fi'

type Props = {
  className?: string
}

export function CertificationsSection({ className = '' }: Props) {
  return (
    <section id='certifications' className={cn('py-20', '', className)}>
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <SectionHeader>Licenses & Certifications</SectionHeader>
          <SectionDescription>
            Professional credentials and specialized training I&apos;ve
            completed
          </SectionDescription>
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
                <h3
                  className={cn(
                    'mb-3 text-xl font-bold',
                    'text-text dark:text-dark-text',
                  )}
                >
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
                <p
                  className={cn(
                    'mb-4 text-sm',
                    'text-text-secondary dark:text-dark-text-muted',
                  )}
                >
                  Credential ID: {cert.credentialId}
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
                  <span>Verify credential</span>
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
