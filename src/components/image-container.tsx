import Image from "next/image"

import { ProjectImage } from "@/app/projects";

export default function ImageContainer({ src, caption, alt, className = "" }: ProjectImage) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-[#DEDEDE] overflow-hidden max-h-[60vh] p-12 flex items-center justify-center">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt || caption}
          width={600}
          height={200}
          className="w-full h-auto object-scale-down aspect-video"
        />
      </div>
      <p className="text-[#666666] mt-1 ml-4 text-[14px] leading-[1.2]">{caption}</p>
    </div>
  )
}