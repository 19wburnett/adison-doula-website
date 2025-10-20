'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Heart, CheckCircle } from "lucide-react"
import { toast } from "sonner"

interface FormData {
  name: string
  email: string
  phone: string
  dueDate: string
  service: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    dueDate: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name")
      return false
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address")
      return false
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number")
      return false
    }
    if (!formData.service) {
      toast.error("Please select a service")
      return false
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }
      
      toast.success("Thank you! Your message has been sent successfully.")
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        dueDate: '',
        service: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error("Sorry, there was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your message has been sent successfully. I&apos;ll get back to you within 24 hours 
              to discuss how I can support you and your family.
            </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss how I can support you and your family? I&apos;d love to 
              hear about your journey and answer any questions you may have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="dueDate" className="block text-sm font-medium text-muted-foreground mb-2">
                          Due Date (if applicable)
                        </label>
                        <Input
                          id="dueDate"
                          name="dueDate"
                          type="date"
                          value={formData.dueDate}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-muted-foreground mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="birth-doula">Birth Doula Services</option>
                        <option value="postpartum-doula">Postpartum Support</option>
                        <option value="prenatal-visits">Prenatal Visits</option>
                        <option value="lactation-support">Lactation Support</option>
                        <option value="consultation">Initial Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell me about your journey and how I can support you..."
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-lg py-6"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I&apos;m here to answer your questions and discuss how I can support 
                  you and your family during this special time.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@adison.com</p>
                    <p className="text-sm text-muted-foreground/70">I respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground/70">Available for urgent inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Service Area</h3>
                    <p className="text-muted-foreground">Greater Metro Area</p>
                    <p className="text-sm text-muted-foreground/70">In-home and hospital support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Availability</h3>
                    <p className="text-muted-foreground">24/7 for births</p>
                    <p className="text-sm text-muted-foreground/70">Flexible scheduling for consultations</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Heart className="h-5 w-5 text-primary text-white" />
                  <h3 className="font-semibold text-foreground text-white">Free Consultation</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  I offer a complimentary 30-minute consultation to discuss your needs 
                  and answer any questions you may have about doula services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some common questions about doula services and how I can support you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "When should I hire a doula?",
                answer: "It's never too early! Many families hire a doula in their second trimester, but I'm happy to support you at any stage of your pregnancy journey."
              },
              {
                question: "Do you work with my healthcare provider?",
                answer: "Yes, I work alongside your healthcare team. I provide emotional and physical support while respecting medical decisions made by you and your provider."
              },
              {
                question: "What's included in your services?",
                answer: "My services include prenatal visits, continuous support during labor, and postpartum care. Each package is tailored to your specific needs and preferences."
              },
              {
                question: "Do you offer virtual consultations?",
                answer: "Yes, I offer both in-person and virtual consultations to accommodate your schedule and comfort level, especially for initial meetings."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
