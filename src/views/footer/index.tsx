import { layoutPadding } from '@/constants/class-names'
import { about } from '@/data/about'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'bg-background dark:bg-dark-background text-text dark:text-dark-text py-4',
        layoutPadding,
      )}
    >
      <div className='flex w-full flex-col items-start justify-between md:flex-row md:items-center'>
        <div className='mb-6 md:mb-0'>
          <Link
            rel='noreferrer'
            href='#home'
            className='text-primary dark:text-dark-primary text-xl font-bold sm:text-2xl'
          >
            {about.name}
          </Link>
          <p className='text-text dark:text-dark-text mt-2 text-sm'>
            ©{currentYear}
          </p>
        </div>
        <div className='xs:gap-6 flex gap-3'>
          <Link
            target='_blank'
            rel='noreferrer'
            href={`mailto:${about.email}`}
            className='hover:text-primary-hover dark:hover:text-dark-primary-hover transition-colors'
          >
            Email
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={about.githubLink}
            className='hover:text-primary-hover dark:hover:text-dark-primary-hover transition-colors'
          >
            GitHub
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={about.linkedinLink}
            className='hover:text-primary-hover dark:hover:text-dark-primary-hover transition-colors'
          >
            LinkedIn
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={about.mediumLink}
            className='hover:text-primary-hover dark:hover:text-dark-primary-hover transition-colors'
          >
            Medium
          </Link>
        </div>
      </div>
    </footer>
  )
}
