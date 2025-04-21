// Define types for our project data structure
export interface ProjectImage {
    id: string
    src: string
    caption: string
    alt?: string
    className?: string
}

export interface Project {
    id: number
    research: string
    description: string
    tags: string,
    product: string
    companySize: string
    role: string
    year: string
    status: string
    images: ProjectImage[]
}

// Project data
const projects: Project[] = [
{
    id: 1,
    research: "New feature launch for zipsale",
    description: "0 to 1 feature launch that grew mrr for inventory management platform",
    tags: "ui design, user research, prototyping, design system",
    product: "b2b saas for second-hand sellers",
    companySize: "<10 people",
    role: "product designer responsible for user research, design, delivery",
    year: "2024",
    status: "live",
    images: [
    {
        id: "cover",
        src: "/images/research-case/cover.png",
        caption: "specifications for a popup ta ta",
        alt: "Specifications diagram for a popup interface",
    },
    {
        id: "progress-indicator-id",
        src: "/images/research-case/progress-indicator.png",
        caption: "specifications for a popup ta ta",
        alt: "Specifications diagram for a popup interface",
    },
    {
        id: "popup-id",
        src: "/images/research-case/popup.png",
        caption: "dropdown menu for sort",
        alt: "Design of dropdown menu for sorting functionality",
    },
    {
        id: "dashboard-id",
        src: "/images/research-case/dashboard.png",
        caption: "dropdown menu for sort",
        alt: "Design of dropdown menu for sorting functionality",
    },
    {
        id: "zipsale-landing-id",
        src: "/images/research-case/zipsale-landing.png",
        caption: "Here is our landing",
        alt: "Landing page",
    },
    {
        id: "qual-questionnaire-id",
        src: "/images/research-case/research-case-cover-qual.png",
        caption: "I received about 30 responses",
        alt: "Landing page",
    },
    {
        id: "relisting-workflows-id",
        src: "/images/research-case/relisting-workflows.png",
        caption: "Different requirements: all at once vs one by one",
        alt: "Landing page",
    },
    {
        id: "animated-new-dashboard-view-id",
        src: "/images/research-case/animated-new-dashboard-view.gif",
        caption: "Rejected option #1: relisting by marketplace",
        alt: "Landing page",
    },
    {
        id: "animated-multi-marketplaces-boosting-id",
        src: "/images/research-case/animated-multi-marketplaces-boosting.gif",
        caption: "Rejected option #2: multi marketplaces boosting",
        alt: "Landing page",
    },
    {
        id: "animated-final-design-id",
        src: "/images/research-case/animated-final-design.gif",
        caption: "Final design",
        alt: "Landing page",
    },
    ],
},
{
    id: 2,
    research: "Product desing for mobile app",
    description: "concept of an app for advanced english speakers",
    tags: "mobile app, ui design, design system, react native, API",
    product: "tool for expanding your vocabulary",
    companySize: "<10 people",
    role: "product designer responsible for user research, design, delivery",
    year: "2022",
    status: "concept",
    images: [
    {
        id: "cover",
        src: "/images/app-case/cover.png",
        caption: "specifications for a popup ta ta",
        alt: "Specifications diagram for a popup interface",
    },
    {
        id: "animated-swiping-cards-id",
        src: "/images/app-case/animated-swiping-cards.gif",
        caption: "main dashboard for managing your inventory",
        alt: "Main dashboard interface for inventory management",
    },
    {
        id: "app-case-cover-id",
        src: "/images/app-case/app-case-cover.png",
        caption: "main dashboard for managing your inventory",
        alt: "Detail view of inventory management dashboard",
    },
    {
        id: "lean-canvas-id",
        src: "/images/app-case/lean-canvas.png",
        caption: "main dashboard for managing your inventory",
        alt: "Another detail view of inventory management dashboard",
    },
    ],
},
{
    id: 3,
    research: "Revamp of core feature for zipsale",
    description: "Revamp of core feature for inventory management platform",
    tags: "ui design, user research, prototyping, design system",
    product: "b2b saas for second-hand sellers",
    companySize: "<10 people",
    role: "product designer responsible for user research, design, delivery",
    year: "2023",
    status: "live",
    images: [
    {
        id: "cover",
        src: "/images/sort-case/cover.png",
        caption: "specifications for a popup ta ta",
        alt: "Specifications diagram for a popup interface",
    },
    {
        id: "animated-flow-id",
        src: "/images/sort-case/animated-flow.gif",
        caption: "demonstration of how sort works",
        alt: "Demonstration of the sorting functionality",
    },
    {
        id: "animated-tooltip-id",
        src: "/images/sort-case/animated-tooltip.gif",
        caption: "scheme for a presentation",
        alt: "Scheme diagram for presentation",
    },
    ],
},
{
    id: 4,
    research: "Design specifications for various products",
    description: "Design specifications from various products",
    tags: "ui design, prototyping, design system",
    product: "multiple products",
    companySize: "different sizes",
    role: "product designer responsible for user research, design, delivery",
    year: "2022-2024",
    status: "live and concept",
    images: [
    {
        id: "cover",
        src: "/images/ui-case/cover.png",
        caption: "specifications for a popup ta ta",
        alt: "Specifications diagram for a popup interface",
    },
    {
        id: "definition-specs-id",
        src: "/images/ui-case/definition-specs.png",
        caption: "main dashboard for managing your inventory",
        alt: "Main dashboard interface for inventory management",
    },
    {
        id: "ui-case-cover-id",
        src: "/images/ui-case/ui-case-cover.png",
        caption: "main dashboard for managing your inventory",
        alt: "Detail view of inventory management dashboard",
    },
    {
        id: "ui-case-flash-card-specs-id",
        src: "/images/ui-case/ui-case-flash-card-specs.png",
        caption: "main dashboard for managing your inventory",
        alt: "Another detail view of inventory management dashboard",
    },
    {
        id: "ui-case-word-definition-anatomy-id",
        src: "/images/ui-case/ui-case-word-definition-anatomy.png",
        caption: "main dashboard for managing your inventory",
        alt: "Overview of the inventory management dashboard",
    },
    {
        id: "animated-flipping-card-chrome-id",
        src: "/images/ui-case/animated-flipping-card-chrome.gif",
        caption: "main dashboard for managing your inventory",
        alt: "Overview of the inventory management dashboard",
    },
    ],
},
]

export default projects

// Helper functions to work with projects and images
export function getProject(id: number): Project | undefined {
    return projects.find((project) => project.id === id)
}

export function getProjectImage(projectId: number, imageId: string): ProjectImage | undefined {
    const project = getProject(projectId)
    return project?.images.find((image) => image.id === imageId)
}

export function getProjectImages(projectId: number): ProjectImage[] {
    const project = getProject(projectId)
    return project?.images || []
}  