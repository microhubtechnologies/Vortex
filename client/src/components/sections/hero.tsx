import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import paintSplashGold from "@assets/generated_images/golden_yellow_paint_splash_stroke_on_transparent_background.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-10 pb-20 overflow-hidden bg-[#FDFBF7]"
    >
      {/* Background Paint Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={paintSplashGold}
          alt="Paint Splash Background"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-[10%] -right-[10%] w-[80%] h-auto object-contain mix-blend-multiply rotate-12"
        />
        <motion.img
          src={paintSplashGold}
          alt="Paint Splash Background"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-[0%] left-[0%] w-[60%] h-auto object-contain mix-blend-multiply -rotate-45"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative pt-10 pb-10 pl-8 lg:pl-12"
        >
          {/* Decorative Border */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-5 h-[calc(100%-40px)] border-l border-primary/40 rounded-tl-3xl rounded-bl-3xl" />
            <div className="absolute top-0 left-0 w-[100px] h-5 border-t border-primary/40 rounded-tl-3xl" />
            <div className="absolute bottom-10 left-0 w-[100px] h-10 border-b border-l border-primary/40 rounded-bl-3xl" />
          </div>

          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-14 left-0 bg-[#FDFBF7] px-2">
              <div className="inline-flex items-center gap-2 px-6 py-2 border border-primary text-primary rounded-full bg-primary/5">
                <span className="text-sm font-bold tracking-wide uppercase">
                  Transform Your Space, One Wall At A Time
                </span>
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1] text-foreground tracking-tight mb-8">
              Transform Your <br />
              Property With <br />
              <span className="font-outline">
               Expert Painting
              </span>{" "}
             Solutions
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-10">
               Vortex Painting delivers high-quality residential and commercial painting services across New Zealand with skilled professionals, premium materials, and unwavering attention to detail.
            </p>


            {/* <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] text-foreground tracking-tight mb-8">
               Transform Your <br />
               Property With <br />
               <span className="font-outline">
                 Expert Painting
               </span> <br />
               Solutions
             </h1>
             
             <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-10">
               Vortex Painting delivers high-quality residential and commercial painting services across New Zealand with skilled professionals, premium materials, and unwavering attention to detail.
             </p> */}

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-16 text-lg font-semibold shadow-xl hover:-translate-y-1 transition-transform"
              >
                Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-foreground/10 hover:bg-foreground/5 px-10 h-16 text-lg font-semibold bg-transparent"
              >
                Discover More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:h-[700px]"
        >
          <div className="relative flex items-center gap-8">
            {/* Decorative Ring — BACKGROUND */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-24 h-24 border-18 border-primary/20 rounded-full z-0 pointer-events-none" />

            {/* Small Image */}
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative z-10 rounded-[230px] p-2.5"
              style={{
                background:
                  "linear-gradient(100deg, #F4EDE4 0%, rgba(244,237,228,0.85) 30%, rgba(244,237,228,0) 100%)",
              }}
            >
              <div className="w-[260px] h-[420px] rounded-[220px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Interior wall painting"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Big Image — delayed overlap */}
            <motion.div
              initial={{ opacity: 0, y: -200, x: 0 }}
              animate={{ opacity: 1, y: 0, x: -28 }}
              transition={{
                opacity: { duration: 1, delay: 0.6 },
                y: { duration: 1, delay: 0.6 },
                x: {
                  duration: 1.2,
                  delay: 1.6,
                  ease: "easeOut",
                },
              }}
              className="relative z-20 rounded-[260px] p-3"
              style={{
                background:
                  "linear-gradient(100deg, #F4EDE4 0%, rgba(244,237,228,0.85) 30%, rgba(244,237,228,0) 100%)",
              }}
            >
              <div className="w-[340px] h-[520px] rounded-[240px] overflow-hidden shadow-2xl">
                <img
                  src="https://img.freepik.com/premium-photo/workers-hand-using-brush-painting-concrete_1077802-115682.jpg"
                  alt="Professional wall painting"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
