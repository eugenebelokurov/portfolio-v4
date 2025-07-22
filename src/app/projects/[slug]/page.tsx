import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import OtherWork from "@/components/other-work";
import ImageContainerMdx from "@/components/image-container-case";

import Link from "next/link";
import Image from "next/image";
import { useMDXComponents } from "../../../../mdx-components";

// Define the valid project slugs
const validSlugs = [
  "work-research-zipsale", 
  "work-mobile-app-vocabulary", 
  "work-sort-zipsale", 
  "work-ui-multiple-products",
  "work-medtech",
  "work-prescription-redesign"
];

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>

export default async function ProjectPage( props : { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  // Check if the slug is valid
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  // Read the MDX file
  const filePath = path.join(process.cwd(), "src", "content", "projects", `${slug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");

    return (
      <ProjectPageContent fileContent={fileContent} />
    );
  } catch (error) {
    console.error(`Error reading file for slug "${slug}":`, error);
    notFound();
  }
}

function ProjectPageContent({ fileContent }: { fileContent: string }) {
  // Call useMDXComponents inside the React component
  const components = {
    Image, // Pass the Image component
    OtherWork,
    ImageContainerMdx,
    ...useMDXComponents({}), // Include your custom MDX components
  };

  return (
    <main className="flex flex-col items-center mx-4 sm:mx-auto py-4 max-w-2xl ">
      <Link href="/" className="underline underline-offset-6 hover:text-gray-600 self-start py-8">
        home
      </Link>
      <article className="prose prose-slate overflow-visible w-full">
        <MDXRemote source={fileContent} components={components} />
      </article>
    </main>
  );
}