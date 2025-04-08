"use client";

import Sidebar from "@/components/sidebar";

import { useRef, useEffect, useState, use } from "react";

export default function Experiments() {
    
    const [scrollPosition, setScrollPosition] = useState(0)

    const projectsDescriptionsRef = useRef<HTMLDivElement>(null)
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    const imagesHeight = document.getElementById("projects-images")?.clientHeight;
    const descriptionHeight = document.getElementById("projects-descriptions")?.clientHeight;
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

      useEffect(() => {
        const options ={
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        }

        // function projectInView()

        // const observer = new IntersectionObserver(callback, options);
      },[])

    return (
    <div>
        <nav className="bg-black fixed h-screen w-[288px] flex flex-col items-center justify-start p-4">
            <Sidebar />
        </nav>
        <div className="grid gap-1 grid-cols-[288px_auto]">
            <div></div>
            <div>
                <div className="grid grid-cols-[288px_auto] gap-1 relative">
                    <div 
                        className="flex flex-col w-[288px] gap-1 absolute top-0"
                        id="projects-descriptions" 
                        ref={projectsDescriptionsRef} 
                        style={{ transition: 'transform 0.05s ease-out' }}
                    >
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center opacity-20">1</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">2</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">3</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">4</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">5</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">6</div>
                    </div>
                    <div></div>
                    <div 
                        className="grid grid-cols-2 grid-rows-[repeat(13,minmax(1fr/2,1fr))] gap-1" 
                        id="projects-images"
                    >
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="research-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">1</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">2</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">3</div>
                        </div>
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="sort-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">4</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">5</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">6</div>
                        </div>
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="app-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">7</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">8</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">9</div>
                        </div>
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="fishlook-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">10</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">11</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">12</div>
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">13</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">14</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">15</div>
                        </div>
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="tamizdat-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">16</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">17</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">18</div>
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">19</div>
                        </div>
                    </div>
                </div>
                <p className="text-black pb-80">hey i am the next section</p>
            </div>
        </div>
    </div>
    )
}

{/*
return (
    <div>
        <nav className="bg-black fixed h-screen w-[288px] flex flex-col items-center justify-start p-4">
            <Sidebar />
        </nav>
        <div className="grid gap-1 grid-cols-[288px_auto]">
            <div></div>
            <div>
                <div className="grid grid-cols-[288px_auto] gap-1 relative">
                    <div 
                        className="flex flex-col w-[288px] gap-1 absolute top-0"
                        id="projects-descriptions" 
                        ref={projectsDescriptionsRef} 
                        style={{ transition: 'transform 0.05s ease-out' }}
                    >

                    {
                        projects.map((project, i) => (
                        <ProjectDescription
                            key={i}
                            project={project}
                            isActive={project.id === activeProjectId}
                        />
                        ))
                    }
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center opacity-20">1</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">2</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">3</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">4</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">5</div>
                        <div className="bg-amber-300 h-80 flex flex-col justify-center items-center">6</div>
                    </div>
                    <div></div>
                    <div 
                        className="grid grid-cols-2 grid-rows-[repeat(13,minmax(1fr/2,1fr))] gap-1" 
                        id="projects-images"
                    >
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="research-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">1</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">2</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">3</div>
                        </div>
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="sort-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">4</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">5</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">6</div>
                        </div>
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="app-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">7</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">8</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">9</div>
                        </div>
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="fishlook-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">10</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">11</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">12</div>
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">13</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">14</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">15</div>
                        </div>
                        <div className="col-span-2 grid grid-cols-subgrid gap-1" project-id="tamizdat-case">
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">16</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">17</div>
                            <div className="bg-red-400 col-span-1 flex flex-col justify-center items-center aspect-square">18</div>
                            <div className="bg-red-400 col-span-2 flex flex-col justify-center items-center aspect-video">19</div>
                        </div>
                    </div>
                </div>
                <p className="text-black pb-80">hey i am the next section</p>
            </div>
        </div>
    </div>
    )    


    */}