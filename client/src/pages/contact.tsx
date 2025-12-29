// import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-background font-sans overflow-x-hidden">
//       <Navbar />
//       <main className="pt-32">
//         {/* Hero Section */}
//         <section className="py-20 container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
//               Get In Touch
//             </h1>
//             <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
//               Have a project in mind? Let's discuss how we can help transform your space
//             </p>
//           </motion.div>
//         </section>

//         {/* Contact Info & Form */}
//         <section className="py-20 bg-card border-t border-border">
//           <div className="container mx-auto px-6">
//             <div className="grid md:grid-cols-2 gap-16">
//               {/* Contact Info */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-3xl font-display font-bold text-foreground mb-8">
//                   Contact Information
//                 </h2>
//                 <div className="space-y-8">
//                   <div className="flex gap-4">
//                     <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-display font-bold text-foreground mb-1">Phone</h3>
//                       <p className="text-foreground/70">+1 (555) 123-4567</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-display font-bold text-foreground mb-1">Email</h3>
//                       <p className="text-foreground/70">info@paintwall.com</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-display font-bold text-foreground mb-1">Location</h3>
//                       <p className="text-foreground/70">123 Art Street<br />Creative City, CC 12345</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Contact Form */}
//               <motion.form
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="space-y-6"
//               >
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <Input placeholder="Your Name" className="border-border" />
//                   <Input placeholder="Your Email" type="email" className="border-border" />
//                 </div>
//                 <Input placeholder="Project Type" className="border-border" />
//                 <Textarea placeholder="Tell us about your project..." className="border-border min-h-32" />
//                 <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium">
//                   Send Message
//                 </Button>
//               </motion.form>
//             </div>
//           </div>
//         </section>

//         {/* Map Placeholder */}
//         <section className="h-96 bg-muted flex items-center justify-center border-t border-border">
//           <div className="text-center text-muted-foreground">
//             <p className="text-lg">Map Placeholder</p>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }
"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  

  // Scroll animation


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <main
  className="min-h-screen font-sans overflow-x-hidden bg-cover bg-center"
  style={{
    backgroundImage:
      "url('/contact2.jpg')"
  }}
>
 


   <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white/80">

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-black font-semibold tracking-wide mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Have a question or project in mind? We'd love to hear from you. Reach out today and let's create something
            amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Side - Contact Info Cards */}
          <div
            className="space-y-6 transition-all duration-700 "
          >
            {/* Mailing Address Card */}
            <div className="bg-primary rounded-2xl p-6 border border-amber-100 hover:border-yellow-600 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-yellow-600">
                    <MapPin className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">Mailing Address</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                   
                   
                   Auckland,
                    
                    New Zealand
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-primary rounded-2xl p-6 border border-amber-100 hover:border-yellow-600 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-yellow-600">
                    <Phone className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">Quick Contact</h3>
                 <p className="text-gray-200 text-sm leading-relaxed">
  0204972690
</p>

                </div>
              </div>
            </div>

            {/* Support Email Card */}
            <div className="bg-primary rounded-2xl p-6 border border-amber-100 hover:border-yellow-600 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-yellow-600">
                    <Mail className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">Support Email</h3>
                 <p className="text-gray-200 text-sm leading-relaxed">
  sale@vortexpainting.nz
</p>

                </div>
              </div>
            </div>
          </div>

          {/* Middle - Contact Image */}
        <div className="hidden md:block transition-all duration-700 delay-200">
<div
  className="rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-100
             h-[280px] md:h-[360px] lg:h-[420px]"
>


  <img
  src="/contact.jpg"
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
/>

  </div>
</div>


          {/* Right Side - Contact Form */}
          <div
            className="transition-all duration-700 delay-300 "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-3 bg-white border border-primary rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-6 py-3 bg-white border border-primary rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Subject Select */}
              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-3 bg-white border border-primary rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="residential">Residential Painting</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="wallpaper">Wallpaper Installation</option>
                  <option value="consultation">Project Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write A Message"
                  rows={5}
                  className="w-full px-6 py-3 bg-white border border-primary rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Get In Touch
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
          
        </div>
        
      </div>
    </section>
  {/* <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-white">

      <div className="max-w-7xl mx-auto">
    
        <div className="text-center ">
          <p className="text-yellow-600 font-semibold tracking-wide mb-2">VISIT US</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">Our Location</h2>
        </div>

       
        <div className="transition-all duration-700 ">
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-100 h-96">
           <iframe
  src="https://www.google.com/maps?q=London,UK&output=embed"
  className="w-full h-full"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>

        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of London, we're easily accessible and ready to serve your painting needs across the
            UK. Visit our showroom or give us a call to discuss your project.
          </p>
        </div>
      </div>
    </section> */}

    </main>
  )
}
