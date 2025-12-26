import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CTA() {
  return (
    <section className="py-0 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0 items-center min-h-96 md:min-h-[500px]">
        {/* Left - Image Section with Top Border */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 md:h-full bg-muted overflow-hidden group"
        >
          {/* Thick top border accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>
          
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <p className="text-lg font-medium">Your Project Image</p>
              <p className="text-sm mt-2">Replace with your portfolio image</p>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>

        {/* Right - Content Section with Top Border */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 md:h-full bg-background px-6 md:px-12 flex flex-col justify-center"
        >
          {/* Thick top border accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>

          {/* Content */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-primary"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Discuss your project!
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Let's create something <span className="text-primary">beautiful</span> together.
            </h2>

            {/* Description */}
            <p className="text-foreground/70 mb-8 text-base md:text-lg leading-relaxed max-w-md">
              We look forward to collaborating with you and bringing your vision to life, one brushstroke at a time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-semibold">
                  Let's Talk
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-3 rounded-md font-semibold">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
