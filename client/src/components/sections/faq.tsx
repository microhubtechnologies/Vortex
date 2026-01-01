// import { motion } from "framer-motion";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Plus } from "lucide-react";

// const faqs = [
//   {
//     question: "Do I need to move my furniture before you start?",
//     answer:
//       "We prefer if you can move smaller items and breakables. Our team will happily move larger furniture pieces to the center of the room and cover them completely for protection.",
//   },
//   {
//     question: "What brand of paint do you use?",
//     answer:
//       "We primarily use premium lines from Sherwin-Williams and Benjamin Moore. However, we are flexible and can use any specific brand you prefer if it meets our quality standards.",
//   },
//   {
//     question: "Do you offer a warranty on your painting services?",
//     answer:
//       "Yes, we offer a comprehensive 2-year warranty on all our labor and materials. If there are any peeling or blistering issues, we will fix them free of charge.",
//   },
//   {
//     question: "How soon can you start my project?",
//     answer:
//       "Our schedule varies, but we typically can start a new project within 1-2 weeks of the consultation. We will provide a firm start date when we give you the quote.",
//   },
//   {
//     question: "Is there a consultation fee?",
//     answer:
//       "No, our initial consultation and detailed estimate are completely free and come with no obligation. We want you to feel comfortable with your choice.",
//   },
// ];

// export function FAQ() {
//   return (
//     <section className="py-16 bg-[#FDFBF7] overflow-hidden">
//       <div className="container mx-auto px-6 max-w-4xl">
        
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <span className="text-primary font-semibold tracking-wider uppercase text-sm">
//             Common Questions
//           </span>
//           <h2 className="text-4xl md:text-5xl mt-4 font-display font-bold text-foreground">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
//             Everything you need to know about our process, materials, and pricing.
//           </p>
//         </motion.div>

//         {/* FAQ LIST */}
//         <Accordion type="single" collapsible className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//             >
//               <AccordionItem
//                 value={`item-${index}`}
//                 className="
//                   bg-white
//                   border border-border
//                   rounded-2xl
//                   px-6
//                   overflow-hidden
//                   transition-all duration-300
//                   hover:shadow-lg
//                   data-[state=open]:border-primary/40
//                   data-[state=open]:shadow-xl
//                 "
//               >
//                 <AccordionTrigger
//                   className="
//                     py-6 text-lg font-medium text-left
//                     hover:no-underline
//                     hover:text-primary
//                     transition-colors
//                     group
//                   "
//                 >
//                   <div className="flex items-center justify-between w-full">
//                     <span>{faq.question}</span>

//                     {/* ROTATING ICON */}
//                     <motion.span
//                       initial={false}
//                       animate={{ rotate: 0 }}
//                       className="
//                         ml-4
//                         w-8 h-8
//                         rounded-full
//                         bg-primary/10
//                         flex items-center justify-center
//                         text-primary
//                         transition-all duration-300
//                         group-data-[state=open]:bg-primary
//                         group-data-[state=open]:text-white
//                       "
//                     >
//                       <motion.div
//                         initial={{ rotate: 0 }}
//                         animate={{ rotate: 45 }}
//                         transition={{ duration: 0.3 }}
//                         className="group-data-[state=closed]:rotate-0"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </motion.div>
//                     </motion.span>
//                   </div>
//                 </AccordionTrigger>

//                 {/* ANSWER */}
//                 <AccordionContent className="pb-6">
//                   <motion.p
//                     initial={{ opacity: 0, y: -8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.35 }}
//                     className="text-muted-foreground text-base leading-relaxed"
//                   >
//                     {faq.answer}
//                   </motion.p>
//                 </AccordionContent>
//               </AccordionItem>
//             </motion.div>
//           ))}
//         </Accordion>

//         {/* FOOTER CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-12 text-center"
//         >
//           <p className="text-muted-foreground">
//             Still have questions?{" "}
//             <a
//               href="#contact"
//               className="text-primary font-bold hover:underline"
//             >
//               Contact us directly
//             </a>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { useState } from "react";
import { Minus, Plus, Check } from "lucide-react";

const faqs = [
  {
    id: 0,
    question: "What brand of paint do you use?",
    answer: "We primarily use premium lines from Dulux and Resene. However, we are flexible and can use any specific brand you prefer if it meets our quality standards.",
    bullets: [
      "Premium quality paints",
      "Eco-friendly options available",
      "Long-lasting finishes"
    ]
  },
  {
    id: 1,
    question: "Do I need to move my furniture before you start?",
    answer: "We prefer if you can move smaller items and breakables. Our team will happily move larger furniture pieces to the center of the room and cover them completely for protection."
  },
{
  id: 2,
  question: "What types of paint do you use for interior and exterior walls?",
  answer: "We use high-quality, eco-friendly paints from trusted brands that are durable, fade-resistant, and safe for your home environment."
}
,
  {
    id: 3,
    question: "How soon can you start my project?",
    answer: "Our schedule varies, but we typically can start a new project within 1-2 weeks of the consultation. We will provide a firm start date when we give you the quote."
  },
  {
    id: 4,
    question: "Is there a consultation fee?",
    answer: "No, our initial consultation and detailed estimate are completely free and come with no obligation. We want you to feel comfortable with your choice."
  }
];

export function FAQ() {
  const [activeFaq, setActiveFaq] = useState(0);
  const activeFaqItem = faqs[activeFaq];

  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">FAQ</span>
          <h2 className="text-4xl md:text-5xl mt-4 font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <motion.button
                key={faq.id}
                onClick={() => setActiveFaq(faq.id)}
                className={`w-full text-left transition-all duration-300 rounded-2xl p-5 border ${
                  activeFaq === faq.id
                    ? "bg-primary text-white border-amber-500 shadow-lg"
                    : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    activeFaq === faq.id ? "bg-white/30" : "bg-white"
                  }`}>
                    {activeFaq === faq.id ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                  <span className="font-semibold text-sm md:text-base leading-snug pt-1">
                    {faq.question}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Featured Answer */}
          <motion.div
            key={activeFaqItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:sticky lg:top-20"
          >
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-200">
              
              {/* Label */}
              <span className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
                Frequently Asked Question
              </span>
              
              {/* Answer Heading */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-4 mb-6 leading-tight">
                {activeFaqItem.question}
              </h3>

              {/* Answer Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {activeFaqItem.answer}
              </p>

              {/* Bullet Points (if available) */}
              {activeFaqItem.bullets && (
                <div className="space-y-3 mb-8 pt-4 border-t border-amber-200">
                  {activeFaqItem.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden h-40 md:h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"
                  alt="Painting service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Link */}
        {/* <div className="m">
          <p className="text-gray-600">
            Still have questions? <a href="#contact" className="text-amber-600 font-bold hover:text-amber-700 transition-colors">Contact us directly</a>
          </p>
        </div> */}
      </div>
    </section>
  );
}
