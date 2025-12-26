import { motion, animate } from "framer-motion";
import { CheckCircle2, Users } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import paintSplashGold from "@assets/generated_images/golden_yellow_paint_splash_stroke_on_transparent_background.png";

export function About() {
  /* ===============================
     SAFE Experience Counter
  ================================ */
  const [years, setYears] = useState(0);

  useEffect(() => {
    const controls = animate(0, 25, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        setYears(Math.round(value));
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <section id="about" className="py-16 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Texture */}
      <img
        src={paintSplashGold}
        alt="bg"
        className="absolute top-0 right-0 w-[500px] opacity-5 rotate-180 pointer-events-none mix-blend-multiply"
      />

      <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">


          {/* IMAGE COLUMN */}
         <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="
  relative
  w-full
  flex
  justify-center
  lg:justify-end
  lg:-translate-x-10
"

    >
      {/* MAIN IMAGE */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6 }}
        className="
          relative
          w-[320px] sm:w-[380px] md:w-[420px]
          h-[480px] sm:h-[520px]
          rounded-t-[220px]
          rounded-b-[30px]
          overflow-hidden
          shadow-2xl
          bg-white
        "
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
          alt="Painting work"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* SECONDARY IMAGE (BOTTOM RIGHT) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="
          absolute
          bottom-0
          right-0
          translate-x-8
          translate-y-8
          w-[180px]
          h-[220px]
          rounded-t-[160px]
          rounded-br-[30px]
          overflow-hidden
          border-[10px]
          border-white
          shadow-xl
          bg-white
        "
      >
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop"
          alt="Detail painting"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
            {/* Floating Image */}
           

          {/* CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div>
              <span className="text-primary font-sans font-semibold tracking-wider uppercase text-sm">
               About Vortex Painting
              </span>

              {/* TYPEWRITER TEXT */}
              <h2 className="text-4xl md:text-5xl mt-3 leading-tight text-foreground font-display">
               Professional Painting <br />
                <span className="italic font-light text-primary">
                  <Typewriter
                    words={[
                      "With Premium Quality",
                      "Built on Reliability",
                      "Exceeding Standards",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1600}
                  />
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              We are a locally owned and operated painting company delivering high-quality residential and commercial painting services with pride and professionalism. Our experienced team is committed to reliability, clear communication, and results you can trust.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4">
             {[
  "Experienced Painters",
  "Premium Materials",
  "Quality Workmanship",
  "Client-First Service",
].map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
    whileHover={{
      y: -4,
      boxShadow: "0 12px 24px rgba(218,165,32,0.15)",
    }} 
    className="
      group
      flex items-center gap-3
      p-4
      bg-white/60
      rounded-xl
      border border-primary/10
      transition-all
      duration-300
      cursor-default
    "
  >
    {/* Icon */}
    <div
      className="
        w-7 h-7
        rounded-full
        border border-primary
        flex items-center justify-center
        text-primary
        group-hover:bg-primary
        group-hover:text-white
        transition-colors
        duration-300
      "
    >
      <CheckCircle2 className="w-4 h-4" />
    </div>

    {/* Text */}
    <span className="text-foreground font-medium font-sans text-sm">
      {item}
    </span>
  </motion.div>
))}

            </div>

            {/* SOCIAL PROOF */}
            <div className="pt-6 border-t border-primary/10">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`}
                        alt="User"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-bold text-xs">
                    +2k
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <p className="font-bold text-foreground font-display text-xl">
                      2.5M+
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
