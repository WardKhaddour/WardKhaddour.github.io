import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import { FiCalendar, FiClock } from 'react-icons/fi'

type Props = {
  className?: string
}

export function BlogSection({ className = '' }: Props) {
  const t = useTranslations('blog')
  const blogPosts = t.raw('list') as {
    id: number
    title: string
    excerpt: string
    date: string
    readTime: string
    tags: string[]
    link: string
  }[]

  return (
    <section id='blog' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <SectionHeader>{t('title')}</SectionHeader>
          <SectionDescription>{t('description')}</SectionDescription>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {blogPosts.map(post => (
            <article
              key={post.id}
              className={cn(
                'overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-xl',
                'bg-surface dark:bg-dark-surface',
              )}
            >
              <div className='p-6'>
                <div className='mb-4 flex flex-wrap gap-2 overflow-hidden'>
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className={cn(
                        'rounded-full px-3 py-1 text-sm whitespace-nowrap',
                        'bg-primary-light dark:bg-dark-primary-light',
                        'text-text dark:text-dark-text',
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className='text-text dark:text-dark-text mb-3 text-xl font-bold'>
                  {post.title}
                </h3>
                <p className='text-text-secondary dark:text-dark-text-muted mb-4'>
                  {post.excerpt}
                </p>
                <div
                  className={cn(
                    'flex items-center justify-between text-sm',
                    'text-text-muted dark:text-dark-text-muted',
                  )}
                >
                  <div className='flex items-center gap-2'>
                    <FiCalendar />
                    <span>{post.date}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FiClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className='px-6 pb-6'>
                <a
                  href={post.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary dark:text-dark-primary inline-flex items-center hover:underline'
                >
                  {t('readArticle')}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
