"use client";

import { useState, useRef } from "react";

import LocalLink from "./local-link";

export default function MobileSidebar() {
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
        <div className="w-full bg-black p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <p className="text-white leading-[1.2]">
                    eugene is product designer.
                </p>
                <p className="text-white leading-[1.2]">
                    information architecture, user research, prototyping or just ui work, let&#39;s chat. <span className="text-green-500">i am available for new projects.</span>
                </p>
                <div className="flex flex-row gap-6">
                    <button
                        onClick={handleCopyEmail}
                        className="text-white underline underline-offset-6 transition-all cursor-pointer text-left"
                        id="copy-email"
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
            <ul className="flex flex-wrap gap-4 items-center">
                <li>
                    <LocalLink href="#selected-work" className="text-white">
                        my work
                    </LocalLink>
                </li>
                {/* <li><div className="bg-white h-4 w-[1.8px]"></div></li> */}
                <li>
                    <LocalLink href="#about-me" className="text-white">
                        about me
                    </LocalLink>
                </li>
                {/* <li><div className="bg-white h-4 w-[1.8px]"></div></li> */}
                {/* <li>
                    <LocalLink href="#my-notes" className="text-white">
                        my notes
                    </LocalLink>
                </li> */}
                <li>
                    <LocalLink href="#digital-trail" className="text-white">
                        digital trail
                    </LocalLink>
                </li>
            </ul>
        </div>
    );
}