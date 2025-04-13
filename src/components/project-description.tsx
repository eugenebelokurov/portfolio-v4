import Link from "next/link"
import { Project } from "@/app/projects"

interface ProjectDescriptionProps {
    project: Project
    isActive: boolean
}

const ProjectIdToSlugMap: Record<number, string> = {
    1: "work-research-zipsale",
    2: "work-sort-zipsale",
    3: "work-mobile-app-vocabulary",
    4: "work-ui-multiple-products",
  };

export default function ProjectDescription( { project, isActive } : ProjectDescriptionProps) {

    const opacityClass = isActive ? "opacity-100" : "opacity-10"
    const transitionClass = "transition-opacity duration-300 ease-in-out"

    const projectHref = `/projects/${ProjectIdToSlugMap[project.id] || "#"}`;

    return (
        <div className={`flex flex-col gap-2 ${opacityClass} ${transitionClass}`}>
            <p className="mb-4 break-words leading-[1.2]">{project.description}</p>
            <p className="mb-4 text-[#A3A3A3] break-words leading-[1.2]">{project.tags}</p>

            {/* <ul className="mb-4 space-y-1.5">
                <li>
                    <p className="leading-[1.2]"><span className="text-[#B8B8B8] pr-2">product</span>{project.product}</p>
                </li>
                <li>
                    <p className="leading-[1.2]"><span className="text-[#B8B8B8] pr-2">company size</span>{project.companySize}</p>
                </li>
                <li>
                    <p className="leading-[1.2]"><span className="text-[#B8B8B8] pr-2">my role</span>{project.role}</p>
                </li>
                <li>
                    <p className="leading-[1.2]"><span className="text-[#B8B8B8] pr-2">year</span>{project.year}</p>
                </li>
                <li>
                    <p className="leading-[1.2]"><span className="text-[#B8B8B8] pr-2">status</span>{project.status}</p>
                </li>
            </ul> */}

            <Link href={projectHref} className="text-black underline underline-offset-6 hover:text-gray-600">
                read more
            </Link>
        </div>
    )
}