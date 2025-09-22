'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Mother of Two",
    rating: 5,
    text: "Adison's support made all the difference during my birth experience. Her calm presence and expertise helped me feel confident and empowered throughout the entire process. I couldn't have asked for a better doula.",
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Jessica L.",
    role: "First-time Mother",
    rating: 5,
    text: "As a first-time mom, I was nervous about giving birth. Adison provided incredible emotional support and helped me understand what to expect. Her postpartum care was equally amazing - she helped me navigate those early weeks with confidence.",
    image: "/testimonials/jessica.jpg"
  },
  {
    id: 3,
    name: "Michael & Lisa R.",
    role: "Parents of Three",
    rating: 5,
    text: "Adison supported us through our third birth, and it was by far our most positive experience. Her knowledge and calming presence helped us achieve the birth we wanted. We're so grateful for her care.",
    image: "/testimonials/michael-lisa.jpg"
  },
  {
    id: 4,
    name: "Amanda K.",
    role: "Single Mother",
    rating: 5,
    text: "Being a single mom, I was worried about having support during labor. Adison was incredible - she was there for me every step of the way, providing both emotional and physical support. I felt so safe and supported.",
    image: "/testimonials/amanda.jpg"
  },
  {
    id: 5,
    name: "David & Maria S.",
    role: "Parents of Twins",
    rating: 5,
    text: "Having twins was overwhelming, but Adison's expertise with multiples was invaluable. She helped us prepare for the unique challenges and supported us through the entire journey. We couldn't have done it without her.",
    image: "/testimonials/david-maria.jpg"
  },
  {
    id: 6,
    name: "Rachel T.",
    role: "Mother of One",
    rating: 5,
    text: "Adison's postpartum support was a lifesaver. She helped me with breastfeeding, newborn care, and adjusting to motherhood. Her gentle guidance and encouragement made all the difference in those early weeks.",
    image: "/testimonials/rachel.jpg"
  }
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useState(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  })

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Client Reviews
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Hear from the families I've had the privilege to support. Their stories 
              reflect the heart of my work and the impact of compassionate doula care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <Quote className="h-12 w-12 text-rose-200 mx-auto mb-6" />
              
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-rose-600">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {currentTestimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full p-2"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-rose-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full p-2"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Auto-play Toggle */}
            <div className="text-center mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isAutoPlaying ? 'Pause' : 'Play'} Auto-advance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              More Client Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every family's experience is unique. Here are more stories from 
              families I've had the honor to support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-rose-600">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can support you and your family during this 
              special time. Every family deserves compassionate, professional care.
            </p>
            <Button asChild size="lg" className="bg-white text-rose-500 hover:bg-gray-100 text-lg px-8 py-6">
              <a href="/contact">
                Schedule a Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
