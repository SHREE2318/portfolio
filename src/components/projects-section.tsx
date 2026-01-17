"use client"

import { useEffect, useState } from "react"

const projects = [
  {
    title: "Intelligent Weather Alert System",
    description: "Automated weather monitoring system using AWS CloudWatch and SNS to send real-time alerts.",
    tech: ["AWS CloudWatch", "SNS", "Lambda", "Bash", "EventBridge"],
    icon: "🌦️",
  },
  {
    title: "3-Tier AWS Architecture",
    description: "Highly available web application with VPC, EC2, RDS, ALB, and Auto Scaling for enterprise workloads.",
    tech: ["AWS VPC", "EC2", "RDS", "ALB", "Auto Scaling", "Terraform"],
    icon: "🏗️",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-12 glow-text transition-all duration-700 ${isVisible ? "fade-in-down" : "opacity-0"}`}
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`backdrop-blur-md bg-card/50 border border-primary/20 rounded-xl overflow-hidden transition-all duration-700 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] cursor-pointer ${isVisible ? "fade-in-up" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="p-8">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-6">{project.description}</p>

                <div
                  className={`flex flex-wrap gap-2 transition-all duration-300 overflow-hidden ${
                    expandedIndex === index ? "max-h-32" : "max-h-8"
                  }`}
                >
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="inline-block backdrop-blur-md bg-card/30 border border-primary/20 rounded-full px-3 py-1 text-xs font-medium text-primary hover:text-accent transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
