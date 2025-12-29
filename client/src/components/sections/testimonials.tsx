import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "Vortex Painting transformed my living space. The attention to detail was incredible and the team was professional throughout. Highly recommend!",
    rating: 5
  },
  {
    name: "James Thompson",
    role: "Office Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    content: "We hired them for our office renovation. They finished on time, minimal disruption, and the results are exceptional. Great team to work with!",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Retail Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    content: "Outstanding workmanship! They painted our retail space and it looks brand new. The quality of materials and execution is top-notch.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "Professional, reliable, and detail-oriented. Vortex Painting exceeded our expectations on multiple commercial projects. Fantastic experience!",
    rating: 5
  }
];

export function Testimonials() {
  return (
<section className="pt-12 pb-6 md:pt-16 md:pb-12 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">Client Reviews</span>
          <h2 className="text-4xl md:text-5xl mt-4 font-display font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across New Zealand
          </p>
        </motion.div>

        {/* 4 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border border-amber-100 hover:border-amber-300 relative overflow-hidden"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-amber-100 mb-4" />

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border-2 border-amber-100">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Quote Icon */}
              <div
                className="
                  absolute bottom-0 right-0
                  w-28 h-28
                  bg-white
                  rounded-tl-[3rem]
                  border-t border-l border-amber-100
                  flex items-center justify-center
                  overflow-hidden
                  pointer-events-none
                "
              >
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Quote className="w-12 h-12 text-amber-600 fill-amber-600/20 rotate-180" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
