"use client"

import { useState } from "react"

import QuoteModal from "./Quote"

export default function QuotePage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
     
      <main className="min-h-screen bg-gradient-to-br from-primary via-white to-primary-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">GET YOUR QUOTE</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black max-w-3xl mx-auto leading-tight">
                Transform Your Vision Into Reality
              </h1>
              <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                Get a personalized quote for your painting project. Our expert team will assess your needs and provide
                you with a competitive, transparent estimate.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-black font-semibold">Quick Response</h3>
                <p className="text-gray-600 text-sm">We reply within 24 hours</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-black font-semibold">Free Estimate</h3>
                <p className="text-gray-600 text-sm">No hidden charges</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-black font-semibold">Professional Team</h3>
                <p className="text-gray-600 text-sm">Certified experts</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-yellow-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Request Your Free Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Quote Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}