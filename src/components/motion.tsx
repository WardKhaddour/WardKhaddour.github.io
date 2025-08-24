'use client'

import { motion, MotionProps } from 'framer-motion'
import React, { JSX } from 'react'

interface CustomMotionProps<Tag extends keyof JSX.IntrinsicElements>
  extends MotionProps {
  type?: Tag
  children: React.ReactNode
  className: string | undefined | null
}

export function Motion<Tag extends keyof JSX.IntrinsicElements>({
  type,
  children,
  className,
  ...props
}: CustomMotionProps<Tag>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = type ? (motion as any)[type] : motion.div
  return (
    <Component className={`js-dependent ${className}`} {...props}>
      {children}
    </Component>
  )
}
