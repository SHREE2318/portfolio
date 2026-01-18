"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-6 glow-text transition-all duration-700 ${isVisible ? "fade-in-down" : "opacity-0"}`}
        >
          Let's Work Together
        </h2>

        <p
          className={`text-xl text-foreground/70 mb-12 transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          style={{ transitionDelay: "100ms" }}
        >
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div
          className={`backdrop-blur-md bg-card/50 border border-primary/20 rounded-xl p-12 transition-all duration-700 hover:border-primary/40 hover:bg-card/70 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex flex-col justify-center item-center gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
              <a
                href="mailto:shreeharishelar@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                shreeharishelar@gmail.com
              </a>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 rounded-lg shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
          >
            <a href="mailto:shreeharishelar@gmail.com">
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
