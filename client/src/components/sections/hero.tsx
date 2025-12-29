"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "wouter"
import QuoteModal from "../../pages/Quote/Quote";

import paintSplashGold from "@assets/generated_images/golden_yellow_paint_splash_stroke_on_transparent_background.png";
export function Hero() {
   const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (
    <section
      id="hero"
      className="relative min-h-[50vh] md:min-h-[70vh] lg:min-h-screen flex items-center
                 pt-28 md:pt-36 lg:pt-28 pb-16 md:pb-12 lg:pb-6 overflow-hidden bg-[#FDFBF7]"
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
    className="absolute bottom-0 left-0 w-[60%] h-auto object-contain mix-blend-multiply -rotate-45"
  />
</div>

      {/* Background Paint Texture */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-[10%] -right-[10%] w-[80%] h-[80%] bg-gradient-to-bl from-yellow-200/30 to-transparent rounded-full mix-blend-multiply rotate-12"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-[0%] left-[0%] w-[60%] h-[60%] bg-gradient-to-tr from-yellow-100/20 to-transparent rounded-full mix-blend-multiply -rotate-45"
        />
      </div> */}

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-16 lg:items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-10 lg:pb-10 pl-4 md:pl-6 lg:pl-8 xl:pl-12"
          >
            {/* Decorative Border */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-4 md:w-5 h-[calc(100%-40px)] border-l border-primary/40 rounded-tl-3xl rounded-bl-3xl" />
              <div className="absolute top-0 left-0 w-[80px] md:w-[100px] h-4 md:h-5 border-t border-primary/40 rounded-tl-3xl" />
              <div className="absolute bottom-10 left-0 w-[80px] md:w-[100px] h-8 md:h-10 border-b border-l border-primary/40 rounded-bl-3xl" />
            </div>

            <div className="relative">
              {/* Badge */}
              <div className="absolute -top-14 md:-top-16 lg:-top-14 left-0 bg-[#FDFBF7] px-2">
                <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 border border-primary text-primary rounded-full bg-yellow-50">
                  <span className="text-xs md:text-sm font-bold tracking-wide uppercase">
                    Transform Your Space, One Wall At A Time
                  </span>
                </div>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-black tracking-tight mb-8 md:mb-8 lg:mb-6 mt-8 md:mt-0">
                Transform Your <br />
                Property With <br />
                <span className="text-primary">Expert Painting</span> Solutions
              </h1>

              <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed mb-8 md:mb-10">
                Vortex Painting delivers high-quality residential and commercial painting services across New Zealand
                with skilled professionals, premium materials, and unwavering attention to detail.
              </p>

              <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4">
                <Button
                onClick={() => setIsQuoteOpen(true)}
                className="rounded-full bg-primary hover:bg-yellow-700 text-white px-8 md:px-10 h-14 md:h-16 text-base md:text-lg font-semibold shadow-xl hover:-translate-y-1 transition-transform w-full md:w-auto"
              >
                Get Quote
              </Button>

                <Link href="/about">
                  <Button
                    variant="outline"
                    className="rounded-full border-2 border-gray-300 hover:bg-gray-50 px-8 md:px-10 h-14 md:h-16 text-base md:text-lg font-semibold bg-transparent w-full md:w-auto"
                  >
                    Discover More <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGES - Hidden on mobile and tablet, only shown on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:flex relative items-center justify-center lg:h-[700px]"
          >
            <div className="relative flex items-center gap-8">
              {/* Decorative Ring — BACKGROUND */}
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-24 h-24 border-4 border-primary/20 rounded-full z-0 pointer-events-none" />

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
      </div>
          <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  )
}
