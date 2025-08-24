import Link from 'next/link'
import { MdArrowRight } from 'react-icons/md'

export default function NotFound() {
  return (
    <div className='from-background-secondary to-background dark:from-dark-background-secondary dark:to-dark-background flex min-h-screen items-center justify-center bg-gradient-to-br px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <div className='mx-auto max-w-md'>
          <div className='relative'>
            <h1 className='text-text dark:text-dark-text text-9xl font-bold'>
              4
              <span className='text-primary dark:text-dark-primary animate-pulse'>
                0
              </span>
              4
            </h1>
            <div className='bg-primary-light dark:bg-dark-primary-light absolute -inset-4 animate-pulse rounded-full opacity-30 blur-lg'></div>
          </div>

          <h2 className='text-text-secondary dark:text-dark-text-secondary mt-6 text-2xl font-medium'>
            Page Not Found
          </h2>

          <p className='text-text-muted dark:text-dark-text-muted mt-4'>
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>

          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/'
              className='group bg-primary text-surface hover:bg-primary-hover focus-visible:outline-primary flex items-center rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
            >
              Back to home
              <MdArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </div>

        <div className='mt-16'>
          <div className='grid grid-cols-3 gap-8 opacity-40'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='bg-primary dark:bg-dark-primary mx-auto h-8 w-8 rounded-full'
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
