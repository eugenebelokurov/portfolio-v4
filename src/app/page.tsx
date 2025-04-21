import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/sidebar-mobile";
import ProjectCard from "@/components/project-card";

import projects from "./projects";

export default function Home() {

  return (
    <div>
      {/* Mobile page */}
      <div className="block sm:hidden">
        <div className="flex flex-col gap-2">
          <MobileSidebar />
          <section id="selected-work-mob">
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
        <section id="about-me-mob" className="mt-16 mb-16 mx-4">
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
                <li><a href="https://github.com/eugenebelokurov" target="_blank" className="text-white underline underline-offset-6 mb-2 block">github</a></li>
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
          <section id="selected-work" className="flex flex-col mb-16 pt-4"> {/* container for selected work */}
            <p className="font-semibold mx-4 pb-2 border-b-[1.5px] border-black leading-[1.2]">selected work</p>
            {
              projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  project={project}
                />
              ))
            }
          </section>
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
              <p className="my-8 lowercase">
                Outside work I am always happy to chat about speciality coffee, exploring city via cycling, 
                folding paper (thanks to Paul Jackson’s book), history of London, typography.
              </p>
            </div>
          </section>

          <section id="my-services" className="mt-16 mb-32 mx-4 lowercase">
            <p className="font-semibold pt-4 pb-2 mb-2 border-b-[1.5px] border-black">my services</p>
            <div className="grid grid-cols-[2fr_3fr] gap-4">
              <p className="mb-8 lowercase">
                Here are the kinds of problems I help solve and how I typically approach them.
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1 bg-[#F5F5F5] p-8">
                  <p className="font-semibold">Your product isn&#39;t hitting its targets (MRR, retention, engagement)</p>
                  <p className="text-[#666666]">I run usability tests, user interviews, and product audits to uncover friction points and pinpoint what’s holding users back.</p>
                </div>
                <div className="flex flex-col gap-1 bg-[#F5F5F5] p-8">
                  <p className="font-semibold">You have an idea but don&#39;t know how to turn it into a product</p>
                  <p className="text-[#666666]">I help shape the concept, explore the business model, validate assumptions, and design it all the way from zero to launch.</p>
                </div>
                <div className="flex flex-col gap-1 bg-[#F5F5F5] p-8">
                  <p className="font-semibold">You need to test an idea before committing to full development</p>
                  <p className="text-[#666666]">I create interactive prototypes (with or without code) that you can test with users, stakeholders, or investors to reduce risk early.</p>
                </div>
                <div className="flex flex-col gap-1 bg-[#F5F5F5] p-8">
                  <p className="font-semibold">You&#39;re about to launch and need supporting design work</p>
                  <p className="text-[#666666]">I design launch materials like landing pages and presentation decks to make sure your product gets the attention it deserves.</p>
                </div>
                <div className="flex flex-col gap-1 bg-[#F5F5F5] p-8">
                  <p className="font-semibold">You&#39;re entering a new market or audience segment</p>
                  <p className="text-[#666666]">I lead research sprints, competitor reviews, and customer journey mapping to help reposition your product.</p>
                </div>
              </div>
            </div>            
          </section>

          <section id="me-offline" className="mt-16 mb-32 mx-4">
            <p className="font-semibold pt-4 pb-2 border-b-[1.5px] border-black">me offline</p>
            <div className="flex flex-row gap-4 py-4">
              <div className="w-full h-auto max-w-2xl bg-white flex justify-center items-center mb-4">
                <video className="w-full h-auto" width="320" height="240" preload="auto" autoPlay loop muted playsInline>
                  <source src="/images/other/1sec.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="max-w-md">
                <p className="mb-2 break-words leading-[1.2] lowercase">
                  Every (almost) day I record a video of what I do. Every month I edit a video with one second picked from each day.
                  it helps me to reflect on my life journey.
                </p>
                <a href="http://instagram.com/evgenybelokurov/" target="_blank" className="text-black underline underline-offset-6 hover:text-gray-600">
                  watch more of it
                </a>
              </div>
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
