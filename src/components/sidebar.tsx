import { useState, useRef } from "react"
import LocalLink from "./local-link"

export default function Sidebar() {
    const [copied, setCopied] = useState(false);
    const emailButtonRef = useRef<HTMLButtonElement>(null);

    const handleCopyEmail = () => {
        // const emailButton = document.getElementById("copy-email");
        const emailButton = emailButtonRef.current;
        const initialWidth = emailButton?.clientWidth;
        
        navigator.clipboard.writeText("eo.belokurov@gmail.com")
        setCopied(true);
        emailButton!.style.width = `${initialWidth}px`;
        setTimeout(() => {
            setCopied(false);
            emailButton!.style.width = '';
        }
        , 1200);
    }

    return (
        <div className="w-72 sticky top-0 bg-black pt-4 pl-4 pr-2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-white leading-[1.2]">
                    eugene is product designer. <span className="text-green-500">available for new projects.</span>
                </p>
                <p className="text-white leading-[1.2]">
                    information architecture, user research, prototyping or just ui work, let&#39;s chat.
                </p>
                <div className="flex flex-row gap-6">
                    <button
                        onClick={handleCopyEmail}
                        className="text-white underline underline-offset-6 transition-all cursor-pointer text-left"
                        id="copy-email"
                        ref={emailButtonRef}
                    >
                        {copied ? "copied" : "copy email"}
                    </button>
                    <a
                        href="eugene-cv-product-designer.pdf"
                        target="_blank"
                        className="text-white underline underline-offset-6 transition-all cursor-pointer text-left"
                    >
                        get cv
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[#717171]">my work</p>
                <ul>
                    <li><LocalLink href="#" className="text-white">selected work</LocalLink></li>
                    {/* <li className="text-[#424242] underline-offset-6 mb-2">index of all my projects</li>
                    <li className="text-[#424242] underline-offset-6 mb-2">just visuals</li> */}
                </ul>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[#717171]">personal</p>
                <ul>
                    <li><LocalLink href="#" className="text-white">about me</LocalLink></li>
                    {/* <li className="text-[#424242] underline-offset-6 mb-2">my services</li>
                    <li className="text-[#424242] underline-offset-6 mb-2">me offline</li> */}
                </ul>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[#717171]">my notes</p>
                <ul>
                    <li className="text-[#424242]">wip</li>
                </ul>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[#717171]">digital trail</p>
                <ul>
                    <li><a href="https://www.are.na/eugene-belokurov/channels" target="_blank" className="text-white underline underline-offset-6 mb-2 block">are.na</a></li>
                    <li><a href="https://www.instagram.com/evgenybelokurov/" target="_blank" className="text-white underline underline-offset-6 mb-2 block">instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/eugenebelokurov/" target="_blank" className="text-white underline underline-offset-6 mb-2 block">linkedin</a></li>
                    {/* <li><a href="https://github.com/eugenebelokurov" target="_blank" className="text-white underline underline-offset-6 mb-2 block">github</a></li> */}
                </ul>
            </div>
        </div>
    )
}