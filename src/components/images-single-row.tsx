import ImageContainer from "./image-container"

import { ProjectImage } from "@/app/projects"

interface SingleImageRowProps {
  image: ProjectImage
  className?: string
}

export default function SingleImageRow({ image, className = "" }: SingleImageRowProps) {
  return (
    <div className={`w-full ${className}`}>
      <ImageContainer id={image.id} src={image.src || "/placeholder.svg"} caption={image.caption} alt={image.alt} />
    </div>
  )
}