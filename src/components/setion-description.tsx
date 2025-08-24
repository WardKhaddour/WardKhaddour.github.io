import { cn } from '@/utils/cn'

export function SectionDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p
      className={cn(
        'mx-auto max-w-2xl',
        'text-text-secondary dark:text-dark-text-muted',
      )}
    >
      {children}
    </p>
  )
}
