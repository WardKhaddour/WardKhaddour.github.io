import { Motion } from '@/components/motion'
import { about } from '@/data/about'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import DownloadResume from './download-resume'

type Props = {
  className?: string
}

export function Hero({ className = '' }: Props) {
  const t = useTranslations()

  return (
    <section
      id='home'
      className={`flex min-h-screen items-center py-16 ${className}`}
    >
      <div className='w-full'>
        <div className='flex w-full flex-col items-center justify-between gap-16 lg:flex-row'>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='lg:w-1/2'
          >
            <div className='space-y-6'>
              <p className='text-text dark:text-dark-text my-0 text-xl font-medium tracking-wide'>
                {t('hero.greeting')}
              </p>
              <div>
                <h1 className='text-primary dark:text-dark-primary text-5xl leading-tight font-bold lg:text-7xl'>
                  {t(about.nameKey)}
                </h1>
                <h2 className='text-text-secondary dark:text-dark-text-muted mt-2 text-2xl font-semibold lg:text-3xl'>
                  {t(about.roleKey)}
                </h2>
              </div>
              <p className='text-text-secondary dark:text-dark-text-muted max-w-lg text-lg leading-relaxed lg:text-xl'>
                {t(about.summaryKey)}
              </p>
              <div className='xs:flex-row flex flex-col gap-4 pt-4'>
                <a
                  href='#projects'
                  className='bg-primary hover:bg-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 transform rounded-lg px-8 py-4 text-center font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                >
                  {t('hero.viewWork')}
                </a>
                <DownloadResume />
              </div>
            </div>
          </Motion>

          <Motion
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='lg:w-1/2'
          >
            <div className='relative mx-auto flex w-full justify-center lg:justify-end'>
              <div className='relative'>
                <div className='from-primary/10 to-primary/5 dark:from-dark-primary/10 dark:to-dark-primary/5 absolute -inset-4 rounded-full bg-gradient-to-r blur-md'></div>
                <Image
                  src='/developer-illustration.png'
                  alt={t('hero.altImage')}
                  width={500}
                  height={500}
                  className='relative object-contain drop-shadow-xl ltr:-scale-x-100'
                  priority
                />
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  )
}
