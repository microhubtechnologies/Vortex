import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Check, Award, Shield, Zap, Users, Leaf } from "lucide-react";
import { Testimonials } from "@/components/sections/testimonials";
const services = [
  {
    id: 1,
    title: "Residential Painting",
    description:
      "High-quality interior and exterior painting services for residential properties, transforming your living spaces with precision and care.",
    points: [
      "Full home repaints",
      "Individual room updates",
      "Accent walls & features",
      "Eco-friendly materials",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Commercial & Industrial",
    description:
      "Professional painting services for offices, retail spaces, warehouses, and factories with minimal disruption to your operations.",
    points: [
      "Office & retail spaces",
      "Industrial facilities",
      "Quick turnaround",
      "Minimal downtime",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "New Builds & Renovations",
    description:
      "Complete painting solutions for new construction projects and renovation works with exceptional finishes and attention to detail.",
    points: [
      "New construction",
      "Renovation projects",
      "Surface prep included",
      "Quality guarantees",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Repaints & Maintenance",
    description:
      "Refresh existing surfaces, repair minor damage, and extend paint system life with our scheduled maintenance programs.",
    points: [
      "Surface restoration",
      "Damage repair",
      "Maintenance plans",
      "Extended warranties",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Roof Painting",
    description:
      "Thorough cleaning, preparation, and protective coatings to improve weather resistance and extend your roof's lifespan significantly.",
    points: [
      "Professional cleaning",
      "Weather protection",
      "Coating application",
      "Lifespan extension",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Fence & Deck Painting",
    description:
      "Paint and stain services to protect against moisture, UV exposure, and general wear for outdoor areas and structures.",
    points: [
      "Wood protection",
      "UV resistance",
      "Moisture barriers",
      "Long-lasting finish",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function ServicesGrid() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  return (
     <section className="min-h-screen bg-background font-sans overflow-x-hidden relative">
   
      <Navbar />
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section with Extra Padding */}
        <section className="py-32 md:py-40 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Full range of professional painting services for residential and commercial projects with premium materials and expert craftsmanship
            </p>
          </motion.div>
        </section>

        {/* Services Grid with Proper Spacing */}
        <div className="px-6 space-y-20 md:space-y-32 pb-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            const itemRef = useRef(null)

            useEffect(() => {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setVisibleItems((prev) => {
                      if (!prev.includes(service.id)) {
                        return [...prev, service.id]
                      }
                      return prev
                    })
                  }
                },
                { threshold: 0.3 }
              )

              if (itemRef.current) observer.observe(itemRef.current)
              return () => observer.disconnect()
            }, [])

            return (
              <div
                ref={itemRef}
                key={service.id}
                className="group"
                style={{
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                  {/* Text Content */}
                  <div
                    className={`${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="space-y-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground transition-colors duration-500 hover:text-amber-600">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 text-base leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.points.map((point, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-4 rounded-xl bg-white/60 border border-amber-400/30 
                              hover:border-amber-400/80 hover:bg-amber-50/40 transition-all duration-300"
                            >
                              <div className="flex-shrink-0 mt-1">
                                <Check className="w-5 h-5 text-amber-600 font-bold stroke-[3]" />
                              </div>
                              <span className="text-foreground text-sm md:text-base leading-snug">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl group/image shadow-2xl">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover/image:scale-110"
                      />

                      {/* Curtain Reveal Effect */}
                      <div
                        className={`absolute inset-0 bg-amber-600 origin-left transition-transform duration-700 ease-out
                        ${
                          visibleItems.includes(service.id)
                            ? "scale-x-0"
                            : "scale-x-100"
                        }
                        group-hover/image:scale-x-0`}
                      ></div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                        <p className="text-white text-center text-sm md:text-base leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white rounded-tr-lg opacity-0 group-hover/image:opacity-100 group-hover/image:scale-110 transition-all"></div>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      
        {/* Our Approach Section */}
        {/* <section className="py-20 md:py-32 border-t border-amber-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Principles that guide every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Continuous Learning", desc: "We upskill daily and approach challenges with curiosity to deliver efficient solutions." },
              { icon: Award, title: "Quality Focused", desc: "Top quality is our standard. We are precise and deliver coating systems that last." },
              { icon: Shield, title: "Industry Excellence", desc: "We exceed standards and hold ourselves accountable to consistent, high-level results." },
              { icon: Users, title: "Client-First", desc: "Customer satisfaction is our core. We listen and put your needs first." },
              { icon: Leaf, title: "Sustainable", desc: "We use eco-friendly products and offset our carbon emissions annually." },
              { icon: Check, title: "Community", desc: "Our team proudly supports community projects through donated labor and materials." },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <Icon className="w-7 h-7 text-amber-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </section> */}

        {/* Guarantees & Warranty Section */}
        <section className="py-20 md:py-32 border-t border-amber-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                Our Guarantee
              </h2>
              <div className="space-y-6">
                {[
                  { title: "2-Year Warranty", desc: "Comprehensive coverage on all labor and materials. If peeling or blistering occurs, we fix it free." },
                  { title: "Quality Assurance", desc: "Three full coats when specified. No shortcuts. Every project meets our exacting standards." },
                  { title: "On-Time Completion", desc: "We deliver projects on schedule. Your time matters and we respect it." },
                  { title: "Premium Materials", desc: "We use Sherwin-Williams, Benjamin Moore, and trusted high-quality paint products." },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-12 text-white shadow-2xl">
                <Award className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-4">Professional Guarantee</h3>
                <p className="text-amber-100 mb-8 leading-relaxed">
                  Every project reflects our commitment to excellence. We don't just paint walls—we transform spaces with precision, professionalism, and pride.
                </p>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <p className="text-sm font-semibold mb-2">5+ Years of Excellence</p>
                  <p className="text-amber-100 text-sm">500+ Happy Clients | Trusted Across New Zealand</p>
                </div>
              </div>
            </motion.div>
          </div>
          <Testimonials />
        </section>

        {/* Why Choose Vortex Section */}
        {/* <section className="py-20 md:py-32 border-t border-amber-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Why Choose Vortex Painting
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              What sets us apart from the rest
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Problem solvers beyond our trade",
              "Deliver on time, every time",
              "Work with passion & professionalism",
              "Efficient collaboration with all trades",
              "'Good enough' is never good enough",
              "Joyful, cooperative, efficient service",
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="w-6 h-6" />
                </div>
                <span className="text-foreground font-medium pt-1">{reason}</span>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className="py-20 md:py-32 border-t border-amber-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 md:p-20 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and detailed quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0204972690" className="px-8 py-4 bg-white text-amber-600 font-bold rounded-full hover:bg-amber-50 transition-colors">
                Call Now: 0204972690
              </a>
              <a href="mailto:sale@vortexpainting.nz" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                Email: sale@vortexpainting.nz
              </a>
            </div>
          </motion.div>
        </section> */}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
       
    </section>
   
  )
}
