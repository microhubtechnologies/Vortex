"use client"

import { useState } from "react"

import QuoteModal from "./Quote"

export default function QuotePage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <pattern id="quoteDots" x="50" y="50" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="50" cy="50" r="2" fill="currentColor" />
              <circle cx="90" cy="90" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#quoteDots)" />
        </svg>

        {/* Subtle golden accent blurs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">Get Your Quote</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
                Transform Your Vision Into Reality
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Get a personalized quote for your painting project. Our expert team will assess your needs and provide
                you with a competitive, transparent estimate.
              </p>
            </div>

             {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-800 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Request Your Free Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
  {/* Card 1 */}
  <div className="flex flex-col items-center space-y-3 p-6 rounded-xl 
                  bg-gradient-to-br from-black via-gray-900 to-black 
                  border border-white/10 hover:border-primary/60 
                  transition-all duration-300 shadow-lg hover:shadow-primary/20">
    
    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>

    <h3 className="text-white font-semibold">Quick Response</h3>
    <p className="text-gray-400 text-sm text-center">We reply within 24 hours</p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center space-y-3 p-6 rounded-xl 
                  bg-gradient-to-br from-black via-gray-900 to-black 
                  border border-white/10 hover:border-primary/60 
                  transition-all duration-300 shadow-lg hover:shadow-primary/20">

    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>

    <h3 className="text-white font-semibold">Free Estimate</h3>
    <p className="text-gray-400 text-sm text-center">No hidden charges</p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center space-y-3 p-6 rounded-xl 
                  bg-gradient-to-br from-black via-gray-900 to-black 
                  border border-white/10 hover:border-primary/60 
                  transition-all duration-300 shadow-lg hover:shadow-primary/20">

    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>

    <h3 className="text-white font-semibold">Professional Team</h3>
    <p className="text-gray-400 text-sm text-center">Certified experts</p>
  </div>
</div>

            
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      </main>

      {/* Quote Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
