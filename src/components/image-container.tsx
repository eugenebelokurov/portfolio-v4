import Image from "next/image"

import { ProjectImage } from "@/app/projects";

export default function ImageContainer({ src, caption, alt, className = "" }: ProjectImage) {
  return (
    <div className={`relative -ml-48 w-auto ${className}`}>
      <div className="bg-[#DEDEDE] overflow-visible max-h-[80vh] p-12 flex items-center justify-center">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt || caption}
          width={1920}
          height={1080}
          style={{ height: "auto" }}
          className="object-scale-down aspect-video"
        />
      </div>
      <p className="text-[#666666] mt-1 ml-4 text-[14px] leading-[1.2]">{caption}</p>
    </div>
  )
}