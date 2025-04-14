import fs from "fs";
import path from "path";
import Link from "next/link";
import { getProject } from "@/app/projects";

// Component for the link to individual work
interface LinkToWorkProps {
  href: string;
  title: string;
}
export function LinkToWork({ href, title }: LinkToWorkProps) {
  return <Link href={href} className="underline underline-offset-6 hover:text-gray-400">{title}</Link>;
}

interface OtherWorkProps {
  currentSlug: string; // The slug of the current MDX file
}

// Manually map slugs to project IDs
const slugToProjectIdMap: Record<string, number> = {
  "work-research-zipsale": 1,
  "work-mobile-app-vocabulary": 2,
  "work-sort-zipsale": 3,
  "work-ui-multiple-products": 4,
};

export default function OtherWork({ currentSlug }: OtherWorkProps) {
  // Read all MDX files in the "content/projects" directory
  const projectsDir = path.join(process.cwd(), "src", "content", "projects");
  const allFiles = fs.readdirSync(projectsDir);

  // Filter out the current file and keep only MDX files
  const otherFiles = allFiles
    .filter((file) => file.endsWith(".mdx") && file.replace(".mdx", "") !== currentSlug)
    .map((file) => {
        const slug = file.replace(".mdx", "");
        const projectId = slugToProjectIdMap[slug]; // Get the project ID from the mapping
        const project = projectId ? getProject(projectId) : null; // Retrieve the project
        return {
            slug,
            title: project ? project.research : "Untitled Project", // Use the project title or a fallback
        };
    });

  return (
    <div className="flex flex-col mb-8">
        <h2 className="text-gray-800 font-bold mt-8 mb-4">Other Work</h2>
        <div className="flex flex-col gap-1">
        {otherFiles.map((file) => (
            <LinkToWork key={file.slug} href={`/projects/${file.slug}`} title={file.title} />
        ))}
        </div>
    </div>
  );
}