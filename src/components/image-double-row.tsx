import ImageContainer from "./image-container"

import { ProjectImage } from "@/app/projects"

interface DoubleImageRowProps {
  images: ProjectImage[]
  className?: string
}

export default function DoubleImageRow({ images, className = "" }: DoubleImageRowProps) {
  // Ensure we only use up to 2 images
  const displayImages = images.slice(0, 2)

  return (
    <div className={`grid grid-cols-2 gap-2 ${className}`}>
      {displayImages.map((image, index) => (
        <ImageContainer
          id={image.id}
          key={index}
          src={image.src || "/placeholder.svg"}
          caption={image.caption}
          alt={image.alt}
        />
      ))}
    </div>
  )
}