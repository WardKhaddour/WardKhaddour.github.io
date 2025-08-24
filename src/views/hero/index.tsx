import { Motion } from '@/components/motion'
import { about } from '@/data/about'
import Image from 'next/image'
import DownloadResume from './download-resume'

type Props = {
  className?: string
}

export function Hero({ className = '' }: Props) {
  return (
    <section
      id='home'
      className={`flex min-h-screen items-center pt-16 ${className}`}
    >
      <div className='w-full'>
        <div className='flex w-full flex-col items-center justify-between gap-16 md:flex-row'>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='md:w-1/2'
          >
            <div className='space-y-6'>
              <p className='text-text dark:text-dark-text my-0 text-xl font-medium tracking-wide'>
                Hello, I&apos;m
              </p>
              <div>
                <h1 className='text-primary dark:text-dark-primary text-5xl leading-tight font-bold md:text-7xl'>
                  {about.name}
                </h1>
                <h2 className='text-text-secondary dark:text-dark-text-muted mt-2 text-2xl font-semibold md:text-3xl'>
                  Full Stack Developer
                </h2>
              </div>
              <p className='text-text-secondary dark:text-dark-text-muted max-w-lg text-lg leading-relaxed md:text-xl'>
                {about.description}
              </p>
              <div className='xs:flex-row flex flex-col gap-4 pt-4'>
                <a
                  href='#projects'
                  className='bg-primary hover:bg-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 transform rounded-lg px-8 py-4 text-center font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                >
                  View My Work
                </a>
                <DownloadResume />
              </div>
            </div>
          </Motion>

          <Motion
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='md:w-1/2'
          >
            <div className='relative mx-auto flex w-full justify-center md:justify-end'>
              <div className='relative'>
                <div className='from-primary/10 to-primary/5 dark:from-dark-primary/10 dark:to-dark-primary/5 absolute -inset-4 rounded-full bg-gradient-to-r blur-md'></div>
                <Image
                  src='/developer-illustration.png'
                  alt='Developer illustration'
                  width={500}
                  height={500}
                  className='relative -scale-x-100 object-contain drop-shadow-xl'
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
