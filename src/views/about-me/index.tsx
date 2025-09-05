import { Motion } from '@/components/motion'
import { SectionHeader } from '@/components/section-header'
import { about } from '@/data/about'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import { FaGraduationCap, FaLanguage } from 'react-icons/fa'
import { FiBriefcase, FiCpu } from 'react-icons/fi'

type Props = {
  className?: string
}

const statIcons: Record<string, React.FC<{ className: string }>> = {
  'about.stats.years': FiBriefcase,
  'about.stats.tech': FiCpu,
  'about.stats.languages': FaLanguage,
  'about.stats.degree': FaGraduationCap,
}

export function AboutMe({ className = '' }: Props) {
  const t = useTranslations()

  return (
    <section id='about-me' className={cn('py-24', className)}>
      <div className='container mx-auto px-4'>
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <SectionHeader>{t('about.header')}</SectionHeader>
          <p
            className={cn(
              'text-text-secondary dark:text-dark-text-muted mx-auto max-w-3xl text-lg leading-relaxed md:text-xl',
            )}
          >
            {t(about.summaryKey)}
          </p>
        </Motion>

        <div className='mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4'>
          {about.stats.map((stat, index) => {
            const Icon = statIcons[stat.labelKey]
            return (
              <Motion
                key={stat.labelKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className='group'
              >
                <div
                  className={cn(
                    'bg-surface dark:bg-dark-surface relative flex flex-col items-center overflow-hidden rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl',
                  )}
                >
                  {/* Gradient background effect */}
                  <div
                    className={cn(
                      'from-primary/5 dark:from-dark-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                    )}
                  ></div>

                  <div className='relative z-10 flex flex-col items-center'>
                    <div
                      className={cn(
                        'bg-primary/10 dark:bg-dark-primary/10 mb-4 w-fit rounded-full p-4 transition-transform duration-300 group-hover:scale-110',
                      )}
                    >
                      <Icon
                        className={cn('text-text dark:text-dark-text text-3xl')}
                      />
                    </div>
                    <p
                      className={cn(
                        'text-primary dark:text-dark-primary mb-2 text-4xl font-bold',
                      )}
                    >
                      +{stat.value}
                    </p>
                    <p
                      className={cn(
                        'text-text dark:text-dark-text font-medium',
                      )}
                    >
                      {t(stat.labelKey)}
                    </p>
                  </div>
                </div>
              </Motion>
            )
          })}
        </div>
      </div>
    </section>
  )
}
