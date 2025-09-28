'use client'

import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import { FaGithub, FaStar } from 'react-icons/fa'

type Props = {
  className?: string
}

export function OpenSource({ className = '' }: Props) {
  const t = useTranslations('openSource')
  const collaborations = t.raw('collaborations') as {
    id?: number
    name: string
    description: string
    url: string
    stars: string
  }[]

  return (
    <section id='open-source' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <SectionHeader>{t('title')}</SectionHeader>
          <SectionDescription>{t('description')}</SectionDescription>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {collaborations.map((collab, index) => (
            <div
              key={collab.id ?? index}
              className={cn(
                'rounded-xl p-6 shadow-lg transition-shadow hover:shadow-xl',
                'bg-surface dark:bg-dark-surface',
              )}
            >
              <div className='mb-4 flex items-center gap-4'>
                <div className='rounded-full p-3'>
                  <FaGithub className='text-icon dark:text-dark-icon text-2xl' />
                </div>
                <div>
                  <h3 className='text-text dark:text-dark-text text-lg font-bold'>
                    {collab.name}
                  </h3>
                  <div className='flex items-center gap-1 text-yellow-500'>
                    <FaStar />
                    <span className='text-text-secondary dark:text-dark-text-muted text-sm'>
                      {collab.stars}
                    </span>
                  </div>
                </div>
              </div>
              <p className='text-text-secondary dark:text-dark-text-muted mb-4'>
                {collab.description}
              </p>
              <a
                href={collab.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary dark:text-dark-primary inline-flex items-center hover:underline'
              >
                {t('viewOnGithub')}
                <svg
                  className='ml-1 h-4 w-4 rtl:-scale-x-100'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
