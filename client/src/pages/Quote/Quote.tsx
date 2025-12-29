"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can add your form submission logic
    console.log("Form submitted:", formData)
    setSubmitted(true)

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        description: "",
      })
      onClose()
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-yellow-500/20">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-black">Get Your Free Quote</DialogTitle>
              <DialogDescription className="text-gray-600">
                Fill in your details and we'll provide a personalized estimate for your project.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Full Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 bg-white text-black placeholder:text-gray-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 bg-white text-black placeholder:text-gray-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 bg-white text-black placeholder:text-gray-400"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 bg-white text-black"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Painting</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="wallpaper">Wallpaper Installation</option>
                  <option value="wallsheets">Wall Sheets</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Project Description</label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 bg-white text-black placeholder:text-gray-400 min-h-24 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-lg transition-colors"
                >
                  Send Quote Request
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 border-yellow-500 text-black hover:bg-yellow-50 bg-transparent"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black">Quote Request Submitted!</h3>
            <p className="text-gray-600 text-center">
              Thank you! We've received your request and will contact you within 24 hours.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
