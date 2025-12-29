import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Residential Home Repaint",
      category: "Residential",
      description: "Full interior and exterior home painting with premium finishes"
    },
    {
      title: "Office Building Transformation",
      category: "Commercial",
      description: "Multi-floor commercial office space painting and preparation"
    },
    {
      title: "Retail Space Refresh",
      category: "Commercial",
      description: "Complete retail location renovation with brand-aligned colors"
    },
    {
      title: "Warehouse Industrial Coating",
      category: "Commercial",
      description: "Large-scale industrial facility with protective coatings"
    },
    {
      title: "Deck & Roof Protection",
      category: "Residential",
      description: "Protective deck staining and roof coating application"
    },
    {
      title: "New Build Completion",
      category: "Residential",
      description: "Complete painting package for new construction property"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">

      <main className="pt-32">
        {/* Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="./img2.jpg"
          alt="Projects Banner"
          className="w-full h-full object-cover"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute z-10 text-center px-6 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Showcasing our expertise across residential and commercial spaces
          </p>
        </motion.div>
      </section>

        {/* Projects Grid */}
        <section className="py-20 container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4 group-hover:bg-muted/80 transition-colors">
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm">Image Placeholder</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life with professional painting services
            </p>
            <button className="bg-primary-foreground text-primary font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
              Get Started
            </button>
          </div>
        </section>
      </main>
     
    </div>
  );
}
