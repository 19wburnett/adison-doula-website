import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

// Helper function to get animation config based on reduced motion preference
export function getAnimationConfig(config: Record<string, unknown>, reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      ...config,
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 }
    }
  }
  return config
}

