import React, { useState,useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Award, Palette, Wrench } from "lucide-react";
import { CTA } from "@/components/sections/cta";




export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("why-choose-us")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
  
      <main className="pt-32">
        {/* Hero Section */}
<section className="relative py-20 px-6">
  {/* ✅ Background Image or Color */}
  <div className="absolute inset-0">
    <img
      src="./img3.jpg"
      alt="About Vortex Background"
      className="w-full h-full object-cover"
    />
    {/* ✅ Optional light overlay for readability */}
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center max-w-2xl mx-auto"
  >
    <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
      About Vortex
    </h1>
    <p className="text-lg text-white/90">
      Transforming spaces through professional painting services with attention to detail and premium finishes
    </p>
  </motion.div>
</section>

        {/* Vision Section with Values */}
        <section className="py-16 md:py-24 bg-card border-t border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Vision Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-start"
              >
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-3">
                    Our vision
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-base">
                    To inspire and transform — our homes, our communities, and our lives — one brushstroke at a time.
                  </p>
                </div>
                <div className="mt-6 pl-6 border-l-4 border-primary">
  <h4 className="text-sm font-semibold text-foreground/60 mb-2 uppercase tracking-wide mb-3">
    Our Story
  </h4>
  <p className="text-foreground/70 text-sm leading-relaxed">
    Vortex Painting began as a small, dedicated team focused on delivering reliable
    painting solutions for homes and businesses. Through consistency, craftsmanship,
    and honest work, we’ve grown into a trusted local painting company known for quality results.
  </p>
</div>

              </motion.div>

              {/* Main Message Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-start"
              >
                <div className="mb-4">
                 <span className="text-xs font-semibold text-primary uppercase tracking-widest">
  About Vortex Painting
</span>

                </div>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6">
  Trusted professionals for{" "}
  <span className="text-primary">residential</span> &{" "}
  <span className="text-primary">commercial</span> painting projects.
</h2>

               <p className="text-foreground/70 leading-relaxed mb-4 text-sm md:text-base">
  Vortex Painting specializes in high-quality home and commercial painting services,
  delivering clean finishes, durable coatings, and professional workmanship on every project.
</p>

<p className="text-foreground/70 leading-relaxed text-sm md:text-base">
  From full home repaints and renovations to offices, retail spaces, and maintenance work,
  our experienced team follows proven systems, proper preparation, and premium materials
  to ensure long-lasting results you can trust.
</p>

              </motion.div>

              {/* Features Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                      <Award className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">
                      Superior craftsmanship
                    </h4>
                    <p className="text-sm text-foreground/70">
                      We pride ourselves on delivering superior craftsmanship.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                      <Palette className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">
                      Quality materials
                    </h4>
                    <p className="text-sm text-foreground/70">
                      We use only the highest quality paints, primers, and coatings.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                      <Wrench className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">
                      Wide range of services
                    </h4>
                    <p className="text-sm text-foreground/70">
                      We offer a comprehensive range of services to cater to all your painting needs.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        {/* <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  PaintWall is a locally owned painting company delivering high-quality residential and commercial painting services with pride and professionalism. Our experienced team consists of skilled painters with over five years of industry experience, equipped with professional tools and certified for all project types.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  As painters, we take unique pride in leaving a lasting positive impression. Our goal is simple: to ensure every client finishes their project feeling confident, satisfied, and genuinely happy with the result.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-96 bg-muted rounded-lg flex items-center justify-center"
              >
                <div className="text-center text-muted-foreground">
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section> */}

       
       <section
  id="why-choose-us"
  className="pt-20 md:pt-28 pb-10 md:pb-14 border-t border-amber-200 bg-white relative overflow-hidden"
>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Quality Without Compromise, Every Time
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over five years of industry experience, Vortex Painting delivers high-quality residential and
              commercial painting services with pride and professionalism. 
            </p>

            {/* Features with checkmarks */}
            <div className="space-y-4 mb-10">
              {[
                "Problem Solvers Beyond Our Trade",
                "Quality is Non-Negotiable",
                "Sustainable & Environmentally Responsible",
                
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Progress bar - Interior Wall Design */}
            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-black font-semibold text-lg">Coating Excellence Standard</h3>
                <span className="text-yellow-600 font-bold text-2xl">100%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? "100%" : "0%" }}
                />
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Three coats when specified, every time—no shortcuts, no compromises
              </p>
            </div>
          </div>

          {/* Right - Image placeholder with animation */}
      <div
  className={`transition-all duration-1000 delay-300 ${
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
  }`}
>
  <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden group shadow-xl">
    
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
      alt="Professional Painting Work"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Optional overlay for premium look */}
    <div className="absolute inset-0 bg-black/10" />

    {/* Animated accent border */}
    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500 bg-clip-border opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
  </div>
</div>

        </div>
      </div>
    </section>



     {/* Values Section */}
       <section className="pt-10 md:pt-14 pb-16 md:pb-24 border-t border-amber-200 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
        Our Core Values
      </h2>
      <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
        The principles that guide every Vortex Painting project from preparation to final coat.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          title: "Quality Without Compromise",
          description:
            "We follow proven systems, proper preparation, and premium coatings to deliver finishes that last — no shortcuts, ever.",
          number: "01",
        },
        {
          title: "Client-First Service",
          description:
            "Clear communication, reliable timelines, and respect for your space ensure a smooth experience from start to finish.",
          number: "02",
        },
        {
          title: "Sustainable Practices",
          description:
            "We use environmentally responsible products and manage waste carefully to protect your home and the environment.",
          number: "03",
        },
      ].map((value, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative p-8 rounded-2xl border border-amber-200 bg-gradient-to-b from-white to-amber-50/40 hover:border-amber-400 hover:shadow-xl transition-all duration-300"
        >
          {/* Number */}
          <span className="absolute top-6 right-6 text-amber-300 font-bold text-4xl group-hover:text-amber-400 transition-colors">
            {value.number}
          </span>

          {/* Accent line */}
          <div className="w-12 h-1 bg-amber-400 rounded-full mb-6" />

          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            {value.title}
          </h3>

          <p className="text-foreground/70 leading-relaxed">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>

      </main>
       <CTA />
    
    </div>
  );
}
