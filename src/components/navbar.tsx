"use client"

import Image from "next/image"
export function Navbar() {


    return (
        <nav className="w-full h-14 z-50 flex items-center justify-end">
            <div className="flex gap-4 items-center justify-between pr-4">
                <button className="rounded-full p-1 bg-gray-400">
                    <a href="https://www.linkedin.com/in/shreehari-shelar/">
                        <Image
                            src="/assest/linkedin.png"
                            alt="linkedin"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                    </a>
                </button>
                <button className="bg-gray-400 rounded-full p-1">
                    <a href="https://github.com/shree2318">
                        <Image
                            src="/assest/github.png"
                            alt="github"
                            width={32}
                            height={32}
                        />
                    </a>
                </button>
            </div>
        </nav>
    )
}
