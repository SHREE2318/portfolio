"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const photo = "/assest/photo.jpeg";
  const pdfURL = "https://res.cloudinary.com/driqu2cgm/image/upload/v1768667800/SHREEHARI-SHELAR-Resume_2_qi8oee.pdf";
  const openResume = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(pdfURL, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("hero")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        {/* Photo with scroll animation */}
        <div
          className={`mb-8 flex justify-center transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          <div className="w-32 h-32 rounded-full backdrop-blur-md bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 p-1 hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(0,217,255,0.2)]">
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <Image
                src={photo}
                alt="shreehari"
                width={120}
                height={120}
                className="object-contain rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Name with glow */}
        <h1
          className={`text-6xl md:text-7xl font-bold mb-4 glow-text text-balance transition-all duration-700 ${isVisible ? "fade-in-down" : "opacity-0"}`}
          style={{ transitionDelay: "100ms" }}
        >
          Shreehari Shelar
        </h1>

        {/* Role */}
        <p
          className={`text-2xl md:text-3xl font-semibold text-primary mb-6 transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          style={{ transitionDelay: "200ms" }}
        >
          AWS Cloud & DevOps Engineer
        </p>

        {/* Description */}
        <p
          className={`text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        >
          I build robust cloud infrastructure and automate deployments using AWS, Terraform, and modern DevOps
          practices. Passionate about infrastructure-as-code and making systems reliable at scale.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <Button
            size="lg"
            className="cursor-pointer bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 rounded-lg shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
            onClick={(e) => openResume(e)}
          >
            View Resume
          </Button>
          <Button
            size="lg"
            className="border border-primary text-primary hover:bg-primary/10 font-semibold px-8 rounded-lg bg-transparent transition-all"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
