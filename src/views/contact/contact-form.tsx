'use client'

import { sendEmail } from '@/actions/send-email-action'
import { cn } from '@/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export const sendEmailSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
})

type FormData = z.infer<typeof sendEmailSchema>

export function ContactForm() {
  const t = useTranslations('contactForm')
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(sendEmailSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      try {
        const response = await sendEmail(data)
        if (response.success) {
          setSubmitStatus('success')
          reset()
        } else {
          setSubmitStatus('error')
        }
      } catch {
        setSubmitStatus('error')
      } finally {
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    })
  }

  const inputClass = (hasError?: boolean) =>
    cn(
      'w-full px-4 py-2 rounded-lg border focus:outline-0 focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary dark:bg-dark-surface dark:text-dark-text',
      hasError
        ? 'border-red-500'
        : 'border-border-muted dark:border-dark-border-muted',
    )

  const labelClass =
    'block mb-2 text-sm font-medium text-text dark:text-dark-text'
  const errorClass = 'mt-1 text-sm text-red-500'

  const alertClass = (type: 'success' | 'error') =>
    cn(
      'p-4 text-sm rounded-lg',
      type === 'success'
        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
        : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200',
    )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <label htmlFor='name' className={labelClass}>
          {t('name')}
        </label>
        <input
          id='name'
          {...register('name')}
          className={inputClass(!!errors.name)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id='name-error' className={errorClass}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='email' className={labelClass}>
          {t('email')}
        </label>
        <input
          id='email'
          {...register('email')}
          className={inputClass(!!errors.email)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id='email-error' className={errorClass}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='subject' className={labelClass}>
          {t('subject')}
        </label>
        <input
          id='subject'
          {...register('subject')}
          className={inputClass(!!errors.subject)}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id='subject-error' className={errorClass}>
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='message' className={labelClass}>
          {t('message')}
        </label>
        <textarea
          id='message'
          {...register('message')}
          rows={5}
          className={inputClass(!!errors.message)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id='message-error' className={errorClass}>
            {errors.message.message}
          </p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className={alertClass('success')}>{t('success')}</div>
      )}
      {submitStatus === 'error' && (
        <div className={alertClass('error')}>{t('error')}</div>
      )}

      <button
        type='submit'
        disabled={isPending}
        className={cn(
          'w-full rounded-lg px-6 py-3 font-medium transition-colors focus:outline-0',
          'bg-primary hover:bg-primary-hover dark:bg-dark-primary dark:hover:bg-dark-primary-hover text-white disabled:cursor-not-allowed disabled:opacity-50',
        )}
      >
        {isPending ? t('sending') : t('send')}
      </button>
    </form>
  )
}
