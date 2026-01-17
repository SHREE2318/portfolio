"use client"

import { useEffect, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-12 glow-text transition-all duration-700 ${isVisible ? "fade-in-down" : "opacity-0"}`}
        >
          About Me
        </h2>

        <div
          className={`backdrop-blur-md bg-card/50 border border-primary/20 rounded-xl p-8 md:p-12 transition-all duration-700 hover:border-primary/40 ${isVisible ? "fade-in-up" : "opacity-0"}`}
        >
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            I'm an AWS Cloud & DevOps Engineer with expertise in designing and automating cloud infrastructure. With
            hands-on experience at TCS, Cravita Technologies, and Deloitte, I've built scalable solutions that connect
            systems and people.
          </p>

          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            My passion lies in infrastructure automation, CI/CD pipelines, and creating systems that enable teams to
            ship reliable software faster. I believe in the power of Infrastructure-as-Code and containerization to
            bring consistency and repeatability to cloud deployments.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: "☁️", title: "Cloud Architecture", desc: "Designing scalable AWS infrastructure" },
              { icon: "⚙️", title: "DevOps", desc: "Automation and CI/CD pipelines" },
              { icon: "🔒", title: "Infrastructure Security", desc: "Secure by design principles" },
            ].map((item, i) => (
              <div
                key={i}
                className={`backdrop-blur-md bg-card/30 border border-primary/20 rounded-lg p-6 transition-all duration-700 hover:bg-card/60 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] ${isVisible ? "scale-in" : "opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
