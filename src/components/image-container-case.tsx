import Image from 'next/image';
import { getProjectImage } from "@/app/projects";

interface ImageContainerMdxProps {
    projectId: number;
    imageId: string;
    captionShow?: boolean; // Optional prop with a default value
  }

export default function ImageContainerMdx( { projectId, imageId, captionShow = false }: ImageContainerMdxProps) {
    const image = getProjectImage(projectId, imageId);

    if (!image) {
        return <p className="text-red-500">Image not found</p>;
    }

    return (
        <div className="flex flex-col my-12">
            <div className="border border-gray-200 rounded-md p-4 bg-white flex justify-center items-center xl:-mx-48">
                <Image src={image!.src} alt="Word Embeddings" width="1200" height="800"/>
            </div>
            {captionShow && <p className="text-gray-600 indent-4 text-[14px] mt-1 xl:-mx-48">{image!.caption}</p>}
        </div>
    )
}