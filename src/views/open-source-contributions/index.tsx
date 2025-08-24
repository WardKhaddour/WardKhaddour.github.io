import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { collaborations } from '@/data/collaborations'
import { cn } from '@/utils/cn'
import { FaGithub, FaStar } from 'react-icons/fa'

type Props = {
  className?: string
}

export function OpenSource({ className = '' }: Props) {
  return (
    <section id='open-source' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <SectionHeader>Open Source Contributions</SectionHeader>
          <SectionDescription>
            Projects I&apos;ve contributed to and helped improve
          </SectionDescription>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {collaborations.map(collab => (
            <div
              key={collab.id}
              className={cn(
                'rounded-xl p-6 shadow-lg transition-shadow hover:shadow-xl',
                'bg-surface dark:bg-dark-surface',
              )}
            >
              <div className='mb-4 flex items-center gap-4'>
                <div className={cn('rounded-full p-3')}>
                  <FaGithub
                    className={cn('text-2xl', 'text-icon dark:text-dark-icon')}
                  />
                </div>
                <div>
                  <h3
                    className={cn(
                      'text-lg font-bold',
                      'text-text dark:text-dark-text',
                    )}
                  >
                    {collab.name}
                  </h3>
                  <div
                    className={cn('flex items-center gap-1', 'text-yellow-500')}
                  >
                    <FaStar />
                    <span
                      className={cn(
                        'text-sm',
                        'text-text-secondary dark:text-dark-text-muted',
                      )}
                    >
                      {collab.stars} stars
                    </span>
                  </div>
                </div>
              </div>
              <p
                className={cn(
                  'mb-4',
                  'text-text-secondary dark:text-dark-text-muted',
                )}
              >
                {collab.description}
              </p>
              <a
                href={collab.url}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  'inline-flex items-center hover:underline',
                  'text-primary dark:text-dark-primary',
                )}
              >
                View on GitHub
                <svg
                  className='ml-1 h-4 w-4'
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
