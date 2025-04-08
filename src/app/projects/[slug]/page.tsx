import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

import OtherWork from "@/components/other-work";

import Link from "next/link"
import Image from "next/image";

import { useMDXComponents } from "../../../../mdx-components"

// Define the valid project slugs
const validSlugs = ["work-research-zipsale", "work-mobile-app-vocabulary", "work-sort-zipsale", "work-ui-multiple-products"]

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  // Check if the slug is valid
  if (!validSlugs.includes(slug)) {
    notFound()
  }

  // Read the MDX file
  const filePath = path.join(process.cwd(), "src", "content", "projects", `${slug}.mdx`)

  console.log(`Reading file: ${filePath}`)

  try {
    const fileContent = fs.readFileSync(filePath, "utf8")

    // Pass the Image component and custom MDX components to the MDX renderer
    const components = {
        Image, // Pass the Image component
        OtherWork,
        ...useMDXComponents({}), // Include your custom MDX components
    };

    return (
        <main className="flex flex-col items-center mx-auto py-4 max-w-2xl">
          <Link href="/" className="underline underline-offset-6 hover:text-gray-600 self-start py-8">home</Link>
          <article className="prose prose-slate ">
            <MDXRemote source={fileContent} components={components}/>
          </article>
        </main>
    )
  } catch (error) {
    console.error(`Error reading MDX file: ${error}`)
    notFound()
  }
}