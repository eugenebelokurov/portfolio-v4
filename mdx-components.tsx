import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-medium mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-gray-800 font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-gray-600 font-semibold mt-8 mb-4">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-800 font-medium leading-6 mb-4 ">{children}</p>
    ),
    ol: ({ children }) => (
      <ol className="text-gray-800 list-decimal pl-5 space-y-2 mb-4">{children}</ol>
    ),
    ul: ({ children }) => (
      <ul className="text-gray-800 list-disc pl-5 space-y-1 mb-4">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="pl-1 leading-snug">{children}</li>
    ),
    ...components,
  }
}