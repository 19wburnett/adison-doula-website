import Image from "next/image"

interface PlaceholderImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function PlaceholderImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = "",
  priority = false 
}: PlaceholderImageProps) {
  // For development, we'll use a placeholder service
  // In production, you would replace these with actual images
  const placeholderSrc = `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=${width}&h=${height}&fit=crop&crop=face&auto=format&q=80`
  
  return (
    <Image
      src={placeholderSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}
