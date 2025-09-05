'use client'

import { Motion } from '@/components/motion'
import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import { ContactForm } from './contact-form'
import { ContactInfo } from './contact-info'

type Props = {
  className?: string
}

export function Contact({ className = '' }: Props) {
  const t = useTranslations('contact')
  return (
    <section id='contact' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <Motion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='mb-16 text-center'
        >
          <SectionHeader>{t('header')}</SectionHeader>
          <SectionDescription>{t('summary')}</SectionDescription>
        </Motion>

        <div className='mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row'>
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              'rounded-xl p-8 shadow-lg lg:w-1/3',
              'bg-surface dark:bg-dark-surface',
            )}
          >
            <ContactInfo />
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              'rounded-xl p-8 shadow-lg lg:w-2/3',
              'bg-surface dark:bg-dark-surface',
            )}
          >
            <ContactForm />
          </Motion>
        </div>
      </div>
    </section>
  )
}
