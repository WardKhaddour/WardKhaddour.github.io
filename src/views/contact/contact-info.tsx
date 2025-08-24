import { about } from '@/data/about'
import { cn } from '@/utils/cn'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaPhone,
} from 'react-icons/fa'

export function ContactInfo() {
  const iconClasses = 'text-red-600 text-xl'
  const linkClasses = cn(
    'transition-colors text-ellipsis overflow-hidden text-nowrap',
    'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500',
  )

  const socialBtnClasses = cn(
    'p-2 rounded-full transition-colors',
    'bg-gray-100 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900',
  )

  const socialIconClasses = 'text-gray-800 dark:text-gray-200 text-xl'

  return (
    <>
      <h3 className='mb-6 text-xl font-semibold text-gray-900 dark:text-white'>
        Contact Information
      </h3>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <FaEnvelope className={iconClasses} />
          <a href={`mailto:${about.email}`} className={linkClasses}>
            {about.email}
          </a>
        </div>

        <div className='flex items-center gap-2'>
          <FaPhone className={iconClasses} />
          <a
            href={`tel:${about.phoneNumber.replace(' ', '')}`}
            className={linkClasses}
          >
            {about.phoneNumber}
          </a>
        </div>
      </div>

      <h4 className='mt-8 mb-4 text-lg font-medium text-gray-900 dark:text-white'>
        Follow Me
      </h4>

      <div className='flex gap-4'>
        <a
          href={about.githubLink}
          target='_blank'
          rel='noopener noreferrer'
          className={socialBtnClasses}
          aria-label='GitHub'
        >
          <FaGithub className={socialIconClasses} />
        </a>

        <a
          href={about.linkedinLink}
          target='_blank'
          rel='noopener noreferrer'
          className={socialBtnClasses}
          aria-label='LinkedIn'
        >
          <FaLinkedin className={socialIconClasses} />
        </a>

        <a
          href={about.mediumLink}
          target='_blank'
          rel='noopener noreferrer'
          className={socialBtnClasses}
          aria-label='Medium'
        >
          <FaMedium className={socialIconClasses} />
        </a>
      </div>
    </>
  )
}
