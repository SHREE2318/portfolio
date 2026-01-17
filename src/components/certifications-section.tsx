"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const certifications = [
  {
    name: "AWS Cloud Quest: Cloud Practitioner – AWS",
    issuer: "Amazon Web Services",
    year: "2025",
    icon: "/assest/aws.png",
  },
  {
    name: "AWS Cloud Essentials – AWS",
    issuer: "Amazon Web Services",
    year: "2025",
    icon: "/assest/aws.png",
  },
  {
    name: "Python Essentials – Cisco ",
    issuer: "Cisco",
    year: "2025",
    icon: "/assest/cisco.svg",
  },
  {
    name: "SQL and Relational Databases 101 – IBM",
    issuer: "IBM",
    year: "2025",
    icon: "/assest/ibm.png",
  },
  {
    name: "Learning Linux Command Line",
    issuer: "LinkedIn",
    year: "2025",
    icon: "/assest/linkedin.png",
  },
]

export function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("certifications")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-12 glow-text transition-all duration-700 ${isVisible ? "fade-in-down" : "opacity-0"}`}
        >
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`backdrop-blur-md bg-card/50 border border-primary/20 rounded-lg p-8 flex items-start gap-4 transition-all duration-700 hover:border-primary/50 hover:bg-card/70 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] ${isVisible ? "fade-in-up" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl shrink-0">
                <Image
                  src={cert.icon}
                  alt={cert.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-1">{cert.name}</h3>
                <p className="text-sm text-foreground/60 mb-2">{cert.issuer}</p>
                <p className="text-xs text-foreground/40">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
