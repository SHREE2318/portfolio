"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const experiences = [
  {
    company: "Tata Consultancy Services Ltd.",
    role: "Graduate Trainee",
    period: "May 2025 - Present",
    description: "Managed end-to-end order workflows (validation, estimation, delivery tracking) using enterprise systems, supporting high-volume service requests. Coordinated with cross-functional teams to improve turnaround time and reduce execution delays in service fulfilment.",
    icon: "/assest/TCS.svg",
  },
  {
    company: "Cravita Technologies India Pvt. Ltd.",
    role: "Trainee AWS Cloud Engineer (Internship)",
    period: "Jan 2025 - May 2025",
    description: "Deployed and managed AWS infrastructure including EC2, VPC, RDS, Load Balancer, Auto Scaling, and CloudFront. Automated cloud operations using Linux scripts, assisted in scalable deployment strategies, and monitored system health with CloudWatch and SNS to improve performance visibility.",
    icon: "/assest/cravita.png",
  },
  {
    company: "Deloitte",
    role: "Associate Analyst (Apprenticeship)",
    period: "Oct 2024 - Nov 2024",
    description: "Completed intensive Java Foundation & hands-on training, focusing on OOP and backend logic. Contributed to backend development and code optimization, improving maintainability. Collaborated in agile teams, gaining exposure to enterprise-level software development standards and best practices.",
    icon: "/assest/Deloitte.svg",
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-12 glow-text transition-all duration-700 ${isVisible ? "fade-in-down" : "opacity-0"}`}
        >
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`backdrop-blur-md bg-card/50 border border-primary/20 rounded-xl p-8 border-l-4 border-primary transition-all duration-700 hover:scale-105 hover:border-l-accent hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] ${isVisible ? "fade-in-up" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1 flex justify-center items-center bg-white size-18 rounded-full">
                  <Image
                    src={exp.icon}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                    <span className="text-sm text-foreground/50">{exp.period}</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground/70 mb-3">{exp.company}</p>
                  <p className="text-base text-foreground/60 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
