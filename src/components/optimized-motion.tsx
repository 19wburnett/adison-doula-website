'use client'

import { motion, type MotionProps } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { type ReactNode, type ElementType } from 'react'

interface OptimizedMotionProps extends MotionProps {
  children: ReactNode
  as?: keyof typeof motion
}

export function OptimizedMotion({ 
  children, 
  as = 'div',
  initial,
  animate,
  whileInView,
  transition,
  viewport,
  ...props 
}: OptimizedMotionProps) {
  const prefersReducedMotion = useReducedMotion()
  
  const Component = motion[as] as ElementType

  if (prefersReducedMotion) {
    return (
      <Component
        {...props}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0 }}
      >
        {children}
      </Component>
    )
  }

  return (
    <Component
      {...props}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
    >
      {children}
    </Component>
  )
}

