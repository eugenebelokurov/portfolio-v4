"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/sidebar-mobile";
import ProjectDescription from "@/components/project-description";
import SingleImageRow from "@/components/images-single-row";
import DoubleImageRow from "@/components/image-double-row";

import projects, { getProjectImage } from "./projects";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)

    const projectsDescriptionsRef = useRef<HTMLDivElement>(null)
    const projectsImagesRef = useRef<HTMLDivElement>(null)

    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    const imagesHeight = projectsImagesRef.current?.clientHeight
    const descriptionHeightRef = useRef<HTMLDivElement>(null)
    const descriptionHeight = descriptionHeightRef.current?.clientHeight
    // const descriptionHeight = document.getElementById("projects-descriptions")?.clientHeight;
    const minScroll = Math.min(scrollPosition, (imagesHeight! - windowHeight));

    // const opacityClass = isActive ? "opacity-100" : "opacity-10"

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);

        setScrollPosition(window.scrollY);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(() => {
        if (projectsDescriptionsRef.current) {
            const height = projectsDescriptionsRef.current.clientHeight;
            console.log(height);
            const newY = (imagesHeight! - windowHeight - (descriptionHeight! - windowHeight)) * minScroll / (imagesHeight! - windowHeight);
            projectsDescriptionsRef.current.style.transform = `translateY(${newY}px)`;
        }

      },[scrollPosition]);


  const [activeProjectId, setActiveProjectId] = useState<number>(1)

  // const projectsDescriptionsRef = useRef<HTMLDivElement>(null)

  // Refs for project sections in the image gallery
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  // Set up intersection observer to detect which project is most visible
  useEffect(() => {
    const options = {
      root: null, // Use the viewport
      rootMargin: "0px",
      threshold: 0.6, // At least 50% of the element is visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Extract project ID from the data attribute
          const projectId = Number(entry.target.getAttribute("data-project-id"))
          setActiveProjectId(projectId)
        }
      })
    }, options)

    // Observe all project sections
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])


  return (
    <div>
      <div className="block sm:hidden">
        <div className="flex flex-col gap-4">
          <MobileSidebar />
          <div className="mx-4">
            <div className="flex flex-col gap-4">
              <DoubleImageRow className="" images={[getProjectImage(1, "progress-indicator-id")!, getProjectImage(1, "popup-id")!]} />
              <SingleImageRow className="" image={getProjectImage(1, "dashboard-id")!} />
              <ProjectDescription
                project={projects[0]}
                isActive={true}
              />
            </div>
            <hr className="border-gray-200 my-8"></hr>
            <div className="flex flex-col gap-4">
              <DoubleImageRow className="col-span-2" images={[getProjectImage(2, "animated-flow-id")!, getProjectImage(2, "animated-tooltip-id")!]} />
            <ProjectDescription
              project={projects[1]}
              isActive={true}
            />
            </div>
            <hr className="border-gray-200 my-8"></hr>
            <div className="flex flex-col gap-4">
              <DoubleImageRow className="col-span-2" images={[getProjectImage(3, "app-case-cover-id")!, getProjectImage(3, "animated-swiping-cards-id")!]} />
              <SingleImageRow className="col-span-2" image={getProjectImage(3, "lean-canvas-id")!} />
            <ProjectDescription
              project={projects[2]}
              isActive={true}
            />
            </div>
            <hr className="border-gray-200 my-8"></hr>
            <div className="flex flex-col gap-4">
              <DoubleImageRow className="col-span-2" images={[getProjectImage(4, "definition-specs-id")!, getProjectImage(4, "ui-case-cover-id")!]} />
              <DoubleImageRow className="col-span-2" images={[getProjectImage(4, "ui-case-flash-card-specs-id")!, getProjectImage(4, "animated-flipping-card-chrome-id")!]} />
              <SingleImageRow className="col-span-2" image={getProjectImage(4, "ui-case-word-definition-anatomy-id")!} />
            <ProjectDescription
              project={projects[3]}
              isActive={true}
            />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop page */}
      <div className="hidden sm:block">
        <nav className="bg-black fixed h-screen w-[288px] flex flex-col items-center justify-start">
            <Sidebar />
        </nav>
        <main className="grid gap-1 grid-cols-[288px_auto]">
          <div></div> {/* Column to accomodate sidebar */}
          <div> {/* Section with selected work */}
            {/* <p className="pt-4 pl-2">selected work</p> */}
            <div className="grid grid-cols-[288px_auto] gap-1 relative">
              <div 
                className="flex flex-col w-[288px] gap-16 absolute top-0 pt-4 pl-2 pr-2"
                id="projects-descriptions" 
                ref={projectsDescriptionsRef} 
                style={{ transition: 'transform 0.1s ease-out' }}
              >
                {/* Project descriptions */}
                {
                  projects.map((project, i) => (
                    <ProjectDescription
                      key={i}
                      project={project}
                      isActive={activeProjectId === project.id}
                    />
                  ))
                }
              </div>
              <div></div> {/* Column to accomodate project descriptions */}
              <div 
                className="grid grid-cols-2 grid-rows-[repeat(6,minmax(1fr/2,1fr))] gap-1 gap-y-4 pt-4 pr-2 pl-2" 
                id="projects-images"
                ref={projectsImagesRef}
              >
                <div className="col-span-2 grid grid-cols-subgrid gap-1 gap-y-4" data-project-id="1" ref={(el) => { projectRefs.current[0] = el; }}>
                  {/* First project */}
                  <DoubleImageRow className="col-span-2" images={[getProjectImage(1, "progress-indicator-id")!, getProjectImage(1, "popup-id")!]} />
                  <SingleImageRow className="col-span-2" image={getProjectImage(1, "dashboard-id")!} />
                </div>
                <div className="col-span-2 grid grid-cols-subgrid gap-1 gap-y-4" data-project-id="2" ref={(el) => { projectRefs.current[1] = el; }}>
                  {/* Second project */}
                  <DoubleImageRow className="col-span-2" images={[getProjectImage(2, "animated-flow-id")!, getProjectImage(2, "animated-tooltip-id")!]} />
                  {/* <SingleImageRow className="col-span-2" image={getProjectImage(1, "dashboard-id")!} /> */}
                </div>
                <div className="col-span-2 grid grid-cols-subgrid gap-1 gap-y-4" data-project-id="3" ref={(el) => { projectRefs.current[2] = el; }}>
                  {/* Third project */}
                  <DoubleImageRow className="col-span-2" images={[getProjectImage(3, "app-case-cover-id")!, getProjectImage(3, "animated-swiping-cards-id")!]} />
                  <SingleImageRow className="col-span-2" image={getProjectImage(3, "lean-canvas-id")!} />
                </div>
                <div className="col-span-2 grid grid-cols-subgrid gap-1 gap-y-4" data-project-id="4" ref={(el) => { projectRefs.current[3] = el; }}>
                  {/* Forth project */}
                  <DoubleImageRow className="col-span-2" images={[getProjectImage(4, "definition-specs-id")!, getProjectImage(4, "ui-case-cover-id")!]} />
                  <DoubleImageRow className="col-span-2" images={[getProjectImage(4, "ui-case-flash-card-specs-id")!, getProjectImage(4, "animated-flipping-card-chrome-id")!]} />
                  <SingleImageRow className="col-span-2" image={getProjectImage(4, "ui-case-word-definition-anatomy-id")!} />
                </div>
              </div>
            </div>
          </div>
          <div className="pb-80"></div>
          {/* <p className="text-black pl-80 pb-80">hey i am the next section hey i am the next section hey i am the next section</p> */}
        </main>
      </div>
    </div>
  );
}
