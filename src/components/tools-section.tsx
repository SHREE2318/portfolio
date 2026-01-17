"use client"

import { useEffect, useState } from "react"
import AWS from "/assest/aws.png"
import Docker from "/assest/docker.png"
import Terraform from "/assest/terraform.png"
import Jenkins from "/assest/Jenkins.svg"
import Git from "/assest/git.png"
import Linux from "/assest/linux.png"
import Python from "/assest/python.png"
import Prometheus from "/assest/Prometheus.svg"
import Grafana from "/assest/Grafana.svg"
import Image from "next/image"

const tools = [
  { name: "AWS", icon: "/assest/aws.png" },
  { name: "Docker", icon: "/assest/docker.png" },
  { name: "Terraform", icon: "/assest/terraform.png" },
  { name: "Jenkins", icon: "/assest/Jenkins.svg" },
  { name: "Git", icon: "/assest/git.png" },
  { name: "Linux", icon: "/assest/linux.png" },
  { name: "Python", icon: "/assest/python.png" },
  { name: "Prometheus", icon: "/assest/Prometheus.svg" },
  { name: "Grafana", icon: "/assest/Grafana.svg" },
]


export function ToolsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("tools")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tools" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-12 glow-text transition-all duration-700 ${isVisible ? "fade-in-down" : "opacity-0"}`}
        >
          Tools & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`backdrop-blur-md bg-card/50 border border-primary/20 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-700 hover:bg-card/80 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] group ${isVisible ? "scale-in" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="mb-3 group-hover:scale-125 transition-transform">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-primary group-hover:text-accent">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
