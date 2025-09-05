import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { Slider } from '@/components/slider'
import { projects } from '@/data/projects'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

type Props = {
  className?: string
}

export function Projects({ className = '' }: Props) {
  const t = useTranslations('projects')

  return (
    <section
      id='projects'
      className={cn('bg-background dark:bg-dark-background py-24', className)}
    >
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <SectionHeader>{t('header')}</SectionHeader>
          <SectionDescription>{t('description')}</SectionDescription>
        </div>

        <Slider
          showArrows
          showDots
          slidesPerView={1}
          breakpoints={{
            ['1024']: 2,
          }}
          slides={projects.map(project => {
            const pt = {
              title: t(`items.${project.id}.title`),
              shortDescription: t(`items.${project.id}.shortDescription`),
              details: t.raw(`items.${project.id}.details`) as string[],
              tags: t.raw(`items.${project.id}.tags`) as string[],
            }

            return (
              <div
                key={project.id}
                className={cn(
                  'child:child:mx-0 rtl:child:child:float-end w-full flex-shrink-0 rounded-2xl shadow-lg transition-all duration-300 lg:px-4',
                  'bg-surface dark:bg-dark-surface border-border dark:border-dark-border border hover:shadow-xl',
                  'flex h-full flex-col',
                )}
              >
                <div className='flex h-full flex-col p-8'>
                  {/* Project Header with Links */}
                  <div className='mb-6 flex items-start justify-between'>
                    <div className='flex-1'>
                      <h3 className='text-text dark:text-dark-text mb-3 text-2xl font-bold'>
                        {pt.title}
                      </h3>
                      <p className='text-text-secondary dark:text-dark-text-muted text-lg leading-relaxed'>
                        {pt.shortDescription}
                      </p>
                    </div>

                    <div className='ml-4 flex items-center space-x-3'>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-text-secondary dark:text-dark-text-muted hover:text-primary dark:hover:text-dark-primary flex items-center justify-center rounded-full bg-gray-100 p-2 transition-colors dark:bg-gray-800'
                          aria-label='View live project'
                        >
                          <FiExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-text-secondary dark:text-dark-text-muted hover:text-primary dark:hover:text-dark-primary flex items-center justify-center rounded-full bg-gray-100 p-2 transition-colors dark:bg-gray-800'
                          aria-label='View source code'
                        >
                          <FiGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  {pt.details && (
                    <div className='mb-6 flex-1'>
                      <h4 className='text-text-secondary dark:text-dark-text-muted mb-3 text-sm font-semibold tracking-wide uppercase'>
                        {t('keyFeatures')}
                      </h4>
                      <ul className='space-y-2'>
                        {pt.details
                          .slice(0, 3)
                          .map((detail: string, index: number) => (
                            <li key={index} className='flex items-start'>
                              <span className='text-primary dark:text-dark-primary mt-1 mr-2'>
                                •
                              </span>
                              <span className='text-text-secondary dark:text-dark-text-muted'>
                                {detail}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Tags */}
                  <div className='mb-6'>
                    <div className='flex flex-wrap gap-2'>
                      {pt.tags.slice(0, 4).map((tag: string) => (
                        <span
                          key={tag}
                          className={cn(
                            'rounded-full px-3 py-1 text-sm font-medium',
                            'bg-primary/10 dark:bg-dark-primary/10 text-text dark:text-dark-text',
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        />
      </div>
    </section>
  )
}
