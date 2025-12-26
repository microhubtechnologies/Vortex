import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import paintSplashGold from "@assets/generated_images/golden_yellow_paint_splash_stroke_on_transparent_background.png";

const projects = [
  {
    title: "Luxury Living Room Painting",
    category: "Interior Painting",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Modern Bedroom Finish",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Accent Wall Design",
    category: "Wall Painting",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1400&auto=format&fit=crop",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 bg-[#FDFBF7] relative overflow-hidden"
    >
      {/* Background Paint Texture */}
      <img
        src={paintSplashGold}
        alt="paint texture background"
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[900px]
          opacity-[0.03]
          mix-blend-multiply
          pointer-events-none
        "
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
             <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Complete Project</span>
             <h2 className="text-4xl md:text-5xl mt-4 text-foreground">Our Quality Work</h2>
          </div>

          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowUpRight className="rotate-180" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowUpRight />
            </Button>
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl aspect-4/5 cursor-pointer shadow-lg bg-white"
            >
              {/* IMAGE */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white p-6 rounded-2xl flex justify-between items-center shadow-xl">
                  <div>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1 font-display">
                      {project.title}
                    </h3>
                  </div>

                  {/* ACTION ICON */}
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center group-hover:bg-primary"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              {/* GOLD OUTLINE */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/0 group-hover:ring-primary/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
