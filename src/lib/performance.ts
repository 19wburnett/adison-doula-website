import React from 'react'

// Performance optimization utilities

/**
 * Lazy load a component with suspense fallback
 */
export function lazyLoad<T extends React.ComponentType<Record<string, unknown>>>(
  factory: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = React.lazy(factory)
  return (props: React.ComponentProps<T>) => (
    <React.Suspense fallback={fallback || null}>
      <LazyComponent {...props} />
    </React.Suspense>
  )
}

type AnyFunction = (...args: unknown[]) => unknown

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends AnyFunction>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends AnyFunction>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
  downlink?: number
}

/**
 * Check if device has slow network connection
 */
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false
  }
  const connection = (navigator as { connection?: NetworkInformation }).connection
  return (
    connection?.saveData ||
    /2g/.test(connection?.effectiveType || '') ||
    (connection?.downlink || 10) < 1
  )
}

/**
 * Preload an image
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

