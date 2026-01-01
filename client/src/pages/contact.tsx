"use client"

import type React from "react"
import emailjs from "@emailjs/browser"
import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // turant popup dikhe
    setIsSuccess(true);

    emailjs.send(
      "service_30jdq7q",
      "template_m2z996x",
      formData,
      "RmCuQgo3aebwBFwsq"
    )
    .then(
      (result) => {
        console.log("Email sent!", result.text);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // auto-hide popup 5 sec me
        setTimeout(() => setIsSuccess(false), 3000);
      },
      (error) => {
        console.log("Failed:", error.text);
        alert("Oops! Something went wrong."); // optional
      }
    )
  }

  return (
    <main
      className="min-h-screen font-sans overflow-x-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/contact2.jpg')" }}
    >
     

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-black font-semibold tracking-wide mb-2">GET IN TOUCH</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Have a question or project in mind? We'd love to hear from you. Reach out today and let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Side - Contact Info Cards */}
            <div className="space-y-6 transition-all duration-700">
              {/* Mailing Address */}
              <div className="bg-primary rounded-2xl p-6 border border-amber-100 hover:border-yellow-600 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-yellow-600">
                      <MapPin className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">Mailing Address</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">Auckland, New Zealand</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary rounded-2xl p-6 border border-amber-100 hover:border-yellow-600 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-yellow-600">
                      <Phone className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">Quick Contact</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">0204972690</p>
                  </div>
                </div>
              </div>

              {/* Support Email */}
              <div className="bg-primary rounded-2xl p-6 border border-amber-100 hover:border-yellow-600 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-yellow-600">
                      <Mail className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">Support Email</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">sales@vortexpainting.nz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle - Image */}
            <div className="hidden md:block transition-all duration-700 delay-200">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-100 h-[280px] md:h-[360px] lg:h-[420px]">
                <img
                  src="/contact.jpg"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="transition-all duration-700 delay-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name"
                  className="w-full px-6 py-3 bg-white border border-primary rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
                  required
                />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address"
                  className="w-full px-6 py-3 bg-white border border-primary rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
                  required
                />
                <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-6 py-3 bg-white border border-primary rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all cursor-pointer" required>
                  <option value="">Select Subject</option>
                  <option value="residential">Residential Painting</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="wallpaper">Wallpaper Installation</option>
                  <option value="consultation">Project Consultation</option>
                  <option value="other">Other</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write A Message" rows={5}
                  className="w-full px-6 py-3 bg-white border border-primary rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Get In Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full flex flex-col items-center space-y-4 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black text-center">Message Sent Successfully!</h3>
            <p className="text-gray-600 text-center">Thank you! We've received your message and will contact you soon.</p>
          </div>
        </div>
      )}

      
    </main>
  )
}
