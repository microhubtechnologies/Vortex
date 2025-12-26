import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
  PaintRoller,
  Ruler,
  Palette,
  Wallpaper,
  ArrowRight,
} from "lucide-react";
import paintBrushDark from "@assets/generated_images/dark_charcoal_paint_brush_stroke_on_transparent_background.png";

const services = [
  {
    icon: <PaintRoller className="w-8 h-8" />,
    title: "Residential Painting",
    description:
      "Interior and exterior painting for homes with careful preparation and durable finishes.",
  },
  {
    icon: <Wallpaper className="w-8 h-8" />,
    title: "Commercial Painting",
    description:
      "Professional services for offices, retail, warehouses, and industrial buildings.",
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Roof & Deck Painting",
    description:
      "Protective coatings for roofs, decks, and fences to extend lifespan and appearance.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "New Builds & Renovations",
    description:
      "Complete painting solutions for new construction and renovation projects.",
  },
];

export function Services() {
  /* 🔑 Animation controller */
  const headingControls = useAnimation();

  /* 🔁 Runs EVERY TIME the Services page mounts */
  useEffect(() => {
    headingControls.start("visible");
  }, [headingControls]);

  return (
    <section id="services" className="py-16 bg-white relative overflow-hidden">
      {/* Background Texture */}
      <img
        src={paintBrushDark}
        alt="Texture"
        className="absolute bottom-0 left-0 w-[600px] opacity-[0.03] -rotate-12 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-sans font-semibold tracking-wider uppercase text-sm">
            Our Expertise
          </span>

          {/* Route-aware Animated Heading */}
          <motion.h2
            className="text-4xl md:text-5xl mt-4 text-foreground italic font-display flex justify-center"
            aria-label="Quality Services We Provide"
          >
            {"Quality Services We Provide".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.08,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>


          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards (UNCHANGED) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="
                group
                relative
                p-8
                bg-[#FDFBF7]
                transition-colors
                duration-500
                overflow-hidden
                rounded-tr-[50px]
                rounded-bl-[50px]
              "
            >
              {/* Border */}
              <div
                className="
                  absolute inset-0
                  rounded-tr-[50px]
                  rounded-bl-[50px]
                  border border-primary/30
                  shadow-sm
                  group-hover:border-primary/60
                  group-hover:shadow-2xl
                  transition-all duration-500
                  z-0
                  bg-inherit
                "
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-2xl rotate-3 group-hover:rotate-6 bg-white border border-primary/20 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 font-display">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
