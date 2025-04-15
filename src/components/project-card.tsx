import Image from 'next/image';
import Link from 'next/link';

import { Project } from "@/app/projects";

import { getProjectImage } from '@/app/projects';

const ProjectIdToSlugMap: Record<number, string> = {
    1: "work-research-zipsale",
    2: "work-mobile-app-vocabulary",
    3: "work-sort-zipsale",
    4: "work-ui-multiple-products",
};

interface ProjectDescriptionProps {
    project: Project
}

export default function ProjectCard( { project } : ProjectDescriptionProps) {
    const projectHref = `/projects/${ProjectIdToSlugMap[project.id] || "#"}`;

    return (
        <div>
            <div className="sm:hidden block">
                <div className="flex flex-col gap-2 py-4 mx-4">
                    <Image
                        src={getProjectImage(project.id, "cover")?.src || ""}
                        alt="Project 1"
                        className="w-full h-auto object-cover sm:pl-4"
                        width={288}
                        height={288}
                        unoptimized={false}
                    />
                    <div className="flex flex-col gap-1">
                        <p className="mb-2 break-words leading-[1.2] lowercase">{project.description}</p>
                        <p className="mb-2 text-[#A3A3A3] break-words leading-[1.2] lowercase">{project.tags}</p>
                        <Link href={projectHref} className="text-black underline underline-offset-6 hover:text-gray-600">
                            read more
                        </Link>
                    </div>
                    
                </div>
            </div>


            <div className="hidden sm:block">
                <div className="grid grid-cols-[288px_auto] py-4 mx-4 gap-4">
                    <div className="flex flex-col gap-2">
                        <div className='flex flex-col'>
                            <p className="mb-2 break-words leading-[1.2] lowercase">{project.description}</p>
                            <p className="mb-4 text-[#A3A3A3] break-words leading-[1.2] lowercase">{project.tags}</p>
                        </div>
                        <Link href={projectHref} className="text-black underline underline-offset-6 hover:text-gray-400">
                            read more
                        </Link>
                    </div>
                    <div className='pl-4'>
                        <Image
                            src={getProjectImage(project.id, "cover")?.src || ""}
                            alt="Project 1"
                            className="w-full h-auto object-cover"
                            width={288}
                            height={288}
                            unoptimized={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}