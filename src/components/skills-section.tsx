"use client"

import { useEffect, useState } from "react"

const skillCategories = [
  {
    name: "AWS Services",
    skills: ["EC2", "S3", "RDS", "Lambda", "CloudWatch", "VPC"],
  },
  {
    name: "DevOps Tools",
    skills: ["Docker", "Jenkins", "Terraform"],
  },
  {
    name: "Monitoring",
    skills: ["Prometheus", "Grafana", "CloudWatch"],
  },
  {
    name: "Programming",
    skills: ["Python", "SQL", "Java", "HTML", "CSS"],
  },
  {
    name: "OS & Databases",
    skills: ["Linux", "MySQL"],
  },
  {
    name: "Tools & VCS",
    skills: ["Git", "GitHub", "Ansible", "Nginx"],
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-12 glow-text transition-all duration-700 ${isVisible ? "fade-in-down" : "opacity-0"}`}
        >
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`backdrop-blur-md bg-card/50 border border-primary/20 rounded-xl p-8 transition-all duration-700 hover:border-primary/40 hover:bg-card/70 ${isVisible ? "fade-in-up" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="backdrop-blur-md bg-card/30 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-card/60 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
