import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/sidebar-mobile";
import ProjectDescription from "@/components/project-description";
import ProjectCard from "@/components/project-card";

import Image from "next/image";

import projects, { getProjectImage, getProject } from "./projects";

export default function Home() {

  return (
    <div>
      {/* Mobile page */}
      <div className="block sm:hidden">
        <div className="flex flex-col gap-2">
          <MobileSidebar />
          <section>
            <p className="font-semibold mx-4 pt-4 pb-2 border-b-[1.5px] border-black">selected work</p>
            {
              projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  project={project}
                />
              ))
            }
          </section>
        </div>
        <section id="about-me" className="mt-16 mb-16 mx-4">
            <p className="font-semibold pt-4 pb-2 mb-2 border-b-[1.5px] border-black">about me</p>
            <div className="max-w-2xl">
              <p  className="mb-8 lowercase">
                I am a product designer with two years of experience. In total I have 5+ years of grinding at startups. 
                I worked across different industries including fintech, ecommerce, construction, charities. 
                I have experience working within teams from seed startups with less than 10 people to scale ups 200+ people. 
                you can find me in London, UK.
              </p>
              <p className="my-8 lowercase">
                I like to wear many hats. My way is about being full-stack designer: code + business + design. 
                I am all in for frank but kind communication without fluff.
              </p>
            </div>
          </section>
          <section id="digital-trail" className="mx-4 mb-16">
            <p className="font-semibold pt-4 pb-2 mb-2 border-b-[1.5px] border-black">digital trail</p>
            <ul>
                <li><a href="https://www.are.na/eugene-belokurov/channels" target="_blank" className="underline underline-offset-6 mb-2 block">are.na</a></li>
                <li><a href="https://www.instagram.com/evgenybelokurov/" target="_blank" className="underline underline-offset-6 mb-2 block">instagram</a></li>
                <li><a href="https://www.linkedin.com/in/eugenebelokurov/" target="_blank" className="underline underline-offset-6 mb-2 block">linkedin</a></li>
                {/* <li><a href="https://github.com/eugenebelokurov" target="_blank" className="text-white underline underline-offset-6 mb-2 block">github</a></li> */}
            </ul>
          </section>
          <div className="mx-4 mb-8 flex flex-col gap-2">
            <p>made by me using ♡, HTML, CSS and JS</p>
            <p>last updated: april 2025</p>
          </div>
      </div>

      {/* New Desktop page */}
      <div className="hidden sm:block">
        <nav className="bg-black fixed h-screen w-[288px] flex flex-col items-center justify-start">
          <Sidebar />
        </nav>
        <div className="flex flex-col ml-[288px]"> {/* container for sections on the page */}
          <section id="selected-work" className="flex flex-col"> {/* container for selected work */}
            <p className="font-semibold mx-4 pt-4 pb-2 border-b-[1.5px] border-black">selected work</p>
            {
              projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  project={project}
                />
              ))
            }
          </section>
          <section id="about-me" className="mt-16 mb-40 mx-4">
            <p className="font-semibold pt-4 pb-2 mb-2 border-b-[1.5px] border-black">about me</p>
            <div className="max-w-2xl">
              <p  className="mb-8 lowercase">
                I am a product designer with two years of experience. In total I have 5+ years of grinding at startups. 
                I worked across different industries including fintech, ecommerce, construction, charities. 
                I have experience working within teams from seed startups with less than 10 people to scale ups 200+ people. 
                you can find me in London, UK.
              </p>
              <p className="my-8 lowercase">
                I like to wear many hats. My way is about being full-stack designer: code + business + design. 
                I am all in for frank but kind communication without fluff.
              </p>
            </div>
          </section>
          <div className="mx-4 mb-8 flex flex-col gap-2">
            <p>made by me using ♡, HTML, CSS and JS</p>
            <p>last updated: april 2025</p>
          </div>
        </div>

      </div>
    </div>
  );
}
