'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Heart, Users, Baby, Calendar, Clock, Shield, Star } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Birth Support",
    price: "$1,200",
    period: "per birth",
    description: "Comprehensive birth doula services with continuous support during labor and delivery",
    features: [
      "2 prenatal visits (2 hours each)",
      "Continuous support during labor",
      "Birth plan assistance",
      "Postpartum visit (1 hour)",
      "24/7 phone support from 38 weeks",
      "Resource library access"
    ],
    icon: <Heart className="h-8 w-8 text-primary" />,
    popular: true
  },
  {
    name: "Postpartum Care",
    price: "$35",
    period: "per hour",
    description: "Ongoing support during the early weeks with your newborn",
    features: [
      "Newborn care guidance",
      "Feeding support",
      "Sleep assistance",
      "Light household tasks",
      "Emotional support",
      "Resource recommendations"
    ],
    icon: <Baby className="h-8 w-8 text-primary" />,
    popular: false
  },
  {
    name: "Complete Package",
    price: "$1,800",
    period: "total",
    description: "Full-spectrum support from pregnancy through early postpartum",
    features: [
      "Everything in Birth Support",
      "20 hours postpartum care",
      "Extended phone support",
      "Additional prenatal visits",
      "Priority scheduling",
      "Family support sessions"
    ],
    icon: <Users className="h-8 w-8 text-primary" />,
    popular: false
  }
]

const addOnServices = [
  {
    name: "Prenatal Visits",
    price: "$75",
    period: "per visit",
    description: "Additional preparation sessions",
    icon: <Calendar className="h-6 w-6 text-primary" />
  },
  {
    name: "Lactation Support",
    price: "$50",
    period: "per hour",
    description: "Specialized breastfeeding assistance",
    icon: <Heart className="h-6 w-6 text-primary" />
  },
  {
    name: "Overnight Care",
    price: "$45",
    period: "per hour",
    description: "Nighttime newborn care",
    icon: <Clock className="h-6 w-6 text-primary" />
  },
  {
    name: "Sibling Care",
    price: "$25",
    period: "per hour",
    description: "Caring for older children during birth",
    icon: <Shield className="h-6 w-6 text-primary" />
  }
]

const testimonials = [
  {
    text: "The Complete Package was worth every penny. Having Adison's support throughout my entire journey made all the difference.",
    author: "Sarah M.",
    rating: 5
  },
  {
    text: "The postpartum care hours were a lifesaver. Adison helped me feel confident as a new mom.",
    author: "Jessica L.",
    rating: 5
  },
  {
    text: "Professional, caring, and worth every cent. I couldn't have asked for better support.",
    author: "Michael R.",
    rating: 5
  }
]

export default function Pricing() {
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
              Investment in Your Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transparent, fair pricing for professional doula services. Every family 
              deserves compassionate support during their most precious moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Support Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible options designed to meet your unique needs and budget. 
              All packages include my commitment to your family&apos;s wellbeing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary shadow-xl' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-card-foreground">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customize your support with these additional services. 
              All add-ons can be combined with any main package.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="text-xl font-bold text-primary">
                      {service.price}
                      <span className="text-sm text-muted-foreground ml-1">{service.period}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Invest in Doula Support?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Reduced Medical Interventions
                    </h3>
                    <p className="text-muted-foreground">
                      Studies show doula support can reduce cesarean rates by up to 25% and 
                      decrease the need for pain medication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Improved Birth Experience
                    </h3>
                    <p className="text-muted-foreground">
                      Continuous support leads to higher satisfaction rates and 
                      more positive birth memories for families.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Baby className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Better Postpartum Outcomes
                    </h3>
                    <p className="text-muted-foreground">
                      Postpartum doula support reduces anxiety, improves breastfeeding 
                      success, and helps families adjust more smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                What Families Say
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground italic mb-2">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    <cite className="text-sm text-primary font-semibold">
                      — {testimonial.author}
                    </cite>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment & Policies */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Payment & Policies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible payment options and clear policies to make doula support 
              accessible for every family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Payment Options
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Flexible payment plans available</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>HSA/FSA eligible services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Cash, check, or digital payment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Sliding scale available for qualifying families</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Service Policies
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Free initial consultation (30 minutes)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Backup doula provided if needed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>24/7 availability during on-call period</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Clear cancellation and refund policies</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Invest in Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss which package works best for your family. 
              Every family deserves compassionate, professional support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}