import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Check, Award, Shield } from "lucide-react";
import { Testimonials } from "@/components/sections/testimonials";

const services = [
  {
    id: 1,
    title: "Residential Painting",
    description: "High-quality interior and exterior painting services for residential properties, transforming your living spaces with precision and care.",
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
    description: "Professional painting services for offices, retail spaces, warehouses, and factories with minimal disruption to your operations.",
    points: [
      "Office & retail spaces",
      "Industrial facilities",
      "Quick turnaround",
      "Minimal downtime",
    ],
    image: "https://images.unsplash.com/photo-1558618047-3c8c76caa3e3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "New Builds & Renovations",
    description: "Complete painting solutions for new construction projects and renovation works with exceptional finishes and attention to detail.",
    points: [
      "New construction",
      "Renovation projects",
      "Surface prep included",
      "Quality guarantees",
    ],
    image: "https://images.unsplash.com/photo-1578898866193-1d3f10e5e197?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Repaints & Maintenance",
    description: "Refresh existing surfaces, repair minor damage, and extend paint system life with our scheduled maintenance programs.",
    points: [
      "Surface restoration",
      "Damage repair",
      "Maintenance plans",
      "Extended warranties",
    ],
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Roof Painting",
    description: "Thorough cleaning, preparation, and protective coatings to improve weather resistance and extend your roof's lifespan significantly.",
    points: [
      "Professional cleaning",
      "Weather protection",
      "Coating application",
      "Lifespan extension",
    ],
    image: "https://images.unsplash.com/photo-1513001901142-34f19b953564?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Fence & Deck Painting",
    description: "Paint and stain services to protect against moisture, UV exposure, and general wear for outdoor areas and structures.",
    points: [
      "Wood protection",
      "UV resistance",
      "Moisture barriers",
      "Long-lasting finish",
    ],
    image: "https://images.unsplash.com/photo-1586605857561-8ee45cec73ec?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ServicesGrid() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const serviceRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-service-id'));
            setVisibleItems(prev => 
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(serviceRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
   return (
<section className="bg-background font-sans overflow-x-hidden relative">

      {/* Navbar - Full Width */}
    

      {/* HERO BANNER - FULL WIDTH (Outside container) */}
    <section className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
  {/* Banner Image */}
  <img
    src="./img4.jpg"
    alt="Services Banner"
    className="w-full h-full object-cover"
  />

  {/* ✅ Light/white overlay for black text visibility */}
  <div className="absolute inset-0 bg-white/30"></div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="absolute z-10 text-center px-6 max-w-3xl mx-auto"
  >
    <h1 className="text-4xl md:text-6xl font-display font-bold text-black mb-6">
      Our Services
    </h1>
    <p className="text-lg md:text-xl text-white">
      Full range of professional painting services for residential and commercial projects
    </p>
  </motion.div>
</section>


      {/* MAIN CONTENT CONTAINER */}
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 md:pt-24 md:pb-10 relative z-10">
 
        
        {/* Services Grid Section */}
        <section className="space-y-20 md:space-y-32 mb-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const serviceVisible = visibleItems.includes(service.id);

            return (
              <div
                key={service.id}
                ref={el => { serviceRefs.current[service.id] = el; }}
                data-service-id={service.id}
                className="group"
                style={{
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                  
                  {/* Text Content */}
                  <div className={isEven ? "md:order-1" : "md:order-2"}>
                    <div className="space-y-6">
                      <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        animate={serviceVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-foreground transition-colors duration-500 hover:text-amber-600"
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={serviceVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-600 text-base leading-relaxed"
                      >
                        {service.description}
                      </motion.p>

                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={serviceVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="pt-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.points.map((point, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={serviceVisible ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                              className="flex items-start gap-3 p-4 rounded-xl bg-white/60 border border-amber-400/30 hover:border-amber-400/80 hover:bg-amber-50/40 transition-all duration-300"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex-shrink-0 mt-1">
                                <Check className="w-5 h-5 text-amber-600 font-bold stroke-[3]" />
                              </div>
                              <span className="text-foreground text-sm md:text-base leading-snug">
                                {point}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className={isEven ? "md:order-2" : "md:order-1"}>
                    <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl group/image shadow-2xl">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover/image:scale-110"
                        initial={{ scale: 1.1 }}
                        animate={serviceVisible ? { scale: 1 } : { scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      />

                      {/* Curtain Reveal Effect */}
                      <motion.div
                        className="absolute inset-0 bg-amber-600 origin-left"
                        initial={{ scaleX: 1 }}
                        animate={serviceVisible ? { scaleX: 0 } : { scaleX: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        style={{ transformOrigin: "left" }}
                      />

                      {/* Hover Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <p className="text-white text-center text-sm md:text-base leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </motion.div>

                      {/* Decorative Corner */}
                      <motion.div 
                        className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white rounded-tr-lg"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Guarantees & Warranty Section */}
       {/* Guarantees & Warranty Section */}
       <section className="pt-20 pb-10 md:pt-32 md:pb-12 border-t border-amber-200">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                Our Guarantee
              </h2>
              <div className="space-y-6">
                {[
                  // { title: "2-Year Warranty", desc: "Comprehensive coverage on all labor and materials. If peeling or blistering occurs, we fix it free." },
                  { title: "Quality Assurance", desc: "Three full coats when specified. No shortcuts. Every project meets our exacting standards." },
                  { title: "On-Time Completion", desc: "We deliver projects on schedule. Your time matters and we respect it." },
                  { title: "Premium Materials", desc: "We use Sherwin-Williams, Benjamin Moore, and trusted high-quality paint products." },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="p-6 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
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
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-12 text-white shadow-2xl">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-16 h-16 mb-6 opacity-80 mx-auto" />
                  <h3 className="text-3xl font-bold mb-4 text-center">Professional Guarantee</h3>
                  <p className="text-amber-100 mb-8 leading-relaxed text-center">
                    Every project reflects our commitment to excellence. We don't just paint walls—we transform spaces with precision, professionalism, and pride.
                  </p>
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-sm font-semibold mb-2 text-center">5+ Years of Excellence</p>
                    <p className="text-amber-100 text-sm text-center"> Happy Clients | Trusted Across New Zealand</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <Testimonials />
        </section>
      </div>

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
     
      {/* Animations */}
      <style>{`
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
      `}</style>
    </section>
   
 );
}
