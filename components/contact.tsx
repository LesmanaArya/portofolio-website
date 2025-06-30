"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div> */}

        <div className="flex justify-center">
          <div className="space-y-8 max-w-lg text-center">
            <div>
              <h1 className="text-4xl font-semibold mb-6">Let's work together</h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>aryalesmana957@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}