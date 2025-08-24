import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { blogPosts } from '@/data/blog-posts'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { FiCalendar, FiClock } from 'react-icons/fi'

type Props = {
  className?: string
}

export function BlogSection({ className = '' }: Props) {
  return (
    <section id='blog' className={cn('py-20', '', className)}>
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <SectionHeader>Latest Articles</SectionHeader>
          <SectionDescription>
            Thoughts, tutorials and insights about modern web development
          </SectionDescription>
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
                <h3
                  className={cn(
                    'mb-3 text-xl font-bold',
                    'text-text dark:text-dark-text',
                  )}
                >
                  {post.title}
                </h3>
                <p
                  className={cn(
                    'mb-4',
                    'text-text-secondary dark:text-dark-text-muted',
                  )}
                >
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
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FiClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className='px-6 pb-6'>
                <Link
                  href={post.link}
                  target='_blank'
                  className={cn(
                    'font-medium hover:underline',
                    'text-primary dark:text-dark-primary',
                  )}
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
