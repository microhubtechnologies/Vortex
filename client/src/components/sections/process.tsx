import { motion } from "framer-motion";
import {
  ClipboardList,
  PaintBucket,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import paintSplashGold from "@assets/generated_images/golden_yellow_paint_splash_stroke_on_transparent_background.png";

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Continuous Learning",
    description:
      "We upskill every day and approach challenges with curiosity, delivering efficient solutions that benefit our clients.",
  },
  {
    icon: <PaintBucket className="w-8 h-8" />,
    title: "Quality Focused",
    description:
      "Top quality is our standard. We are honest, precise, and deliver coating systems that last without shortcuts.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Industry Excellence",
    description:
      "We exceed industry standards and hold ourselves accountable to delivering consistent, high-level results on every project.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Client-First Service",
    description:
      "Customer satisfaction is at our core. We listen, communicate clearly, and always put our clients' needs first.",
  },
];

export function Process() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Texture */}
      <img
        src={paintSplashGold}
        alt="bg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] opacity-[0.03] mix-blend-multiply pointer-events-none"
      />

      {/* Connecting Line */}
      <div className="absolute top-[45%] left-0 w-full h-0.5 border-t-2 border-dashed border-primary/30 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <span className="text-primary font-sans font-semibold tracking-wider uppercase text-sm">
            How We Work
          </span>

          <motion.h2
            className="text-4xl md:text-5xl mt-4 font-display font-bold text-foreground flex justify-center flex-wrap"
            aria-label="Our Simple 4-Step Process"
          >
            {"Our Simple 4-Step Process".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 12 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.05 },
                  y: {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.08,
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group text-center"
            >
              {/* Icon */}
              <div className="relative mx-auto mb-6 w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-30" />

                <div
                  className="
                    relative w-full h-full
                    rounded-2xl rotate-3
                    bg-white
                    border border-primary/30
                    flex items-center justify-center
                    text-primary
                    shadow-md
                    transition-all duration-300
                    group-hover:rotate-6
                    group-hover:bg-primary
                    group-hover:text-white
                    z-10
                  "
                >
                  {step.icon}
                </div>

                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-md z-20">
                  {index + 1}
                </div>
              </div>

              {/* Card */}
              <div
                className="
                  p-6
                  rounded-2xl
                  bg-[#F7F4EE]
                  border border-primary/20
                  hover:border-primary/40
                  hover:shadow-xl
                  transition-all duration-300
                  min-h-[200px]
                  flex flex-col justify-center
                  relative
                "
              >
                {/* Corner Accents */}
                <div
                  className="
                    absolute top-0 right-0
                    w-8 h-8
                    border-t-2 border-r-2
                    border-primary/40
                    group-hover:border-primary/60
                    rounded-tr-xl
                    transition-all duration-300
                  "
                />

                <div
                  className="
                    absolute bottom-0 left-0
                    w-8 h-8
                    border-b-2 border-l-2
                    border-primary/40
                    group-hover:border-primary/60
                    rounded-bl-xl
                    transition-all duration-300
                  "
                />

                <h3 className="text-xl font-bold mb-3 font-display">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
