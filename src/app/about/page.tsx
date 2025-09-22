'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Award, BookOpen, Users, Clock, Shield } from "lucide-react"

export default function About() {
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
              Meet Adison
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A passionate doula dedicated to supporting families through their most 
              transformative moments with compassion, expertise, and unwavering care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/adison-about.jpg"
                alt="Adison Doula"
                width={600}
                height={800}
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Story & Philosophy
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey as a doula began with a deep belief that every family 
                deserves compassionate, non-judgmental support during pregnancy, 
                birth, and the early postpartum period. Having witnessed the 
                transformative power of proper support, I&apos;m committed to ensuring 
                every family feels empowered and confident throughout their journey.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe that birth is a natural, physiological process that 
                works best when families feel safe, supported, and informed. 
                My role is to provide evidence-based information, emotional 
                support, and practical assistance while respecting your choices 
                and preferences.
              </p>

              <div className="flex items-center space-x-2 text-rose-600">
                <Heart className="h-5 w-5" />
                <span className="font-semibold">Certified Birth & Postpartum Doula</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Training */}
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
              Certifications & Training
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Committed to ongoing education and professional development to provide 
              the highest quality care for families.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-rose-500" />,
                title: "Certified Birth Doula",
                organization: "DONA International",
                year: "2022"
              },
              {
                icon: <BookOpen className="h-8 w-8 text-rose-500" />,
                title: "Postpartum Doula Certification",
                organization: "CAPPA",
                year: "2022"
              },
              {
                icon: <Shield className="h-8 w-8 text-rose-500" />,
                title: "CPR & First Aid Certified",
                organization: "American Red Cross",
                year: "2023"
              },
              {
                icon: <Users className="h-8 w-8 text-rose-500" />,
                title: "Lactation Support Training",
                organization: "ILCA",
                year: "2023"
              },
              {
                icon: <Heart className="h-8 w-8 text-rose-500" />,
                title: "Trauma-Informed Care",
                organization: "Birth Trauma Association",
                year: "2023"
              },
              {
                icon: <Clock className="h-8 w-8 text-rose-500" />,
                title: "Continuing Education",
                organization: "Various Organizations",
                year: "Ongoing"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {cert.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{cert.organization}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every family is unique, and my approach reflects that understanding. 
              Here&apos;s how I support families through their journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Evidence-Based Care",
                description: "I provide information based on current research and best practices, helping you make informed decisions about your care."
              },
              {
                title: "Non-Judgmental Support",
                description: "Your choices are respected and supported, regardless of your birth preferences or parenting decisions."
              },
              {
                title: "Holistic Approach",
                description: "I consider the physical, emotional, and spiritual aspects of your journey, supporting the whole family."
              },
              {
                title: "Continuous Support",
                description: "From pregnancy through the early postpartum period, I&apos;m here to provide consistent, reliable support."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 bg-rose-50 dark:bg-rose-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Beyond Professional Care
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              When I&apos;m not supporting families, you&apos;ll find me spending time with my 
              own family, reading the latest research on birth and parenting, or 
              enjoying a quiet moment with a cup of tea. I believe that self-care 
              and personal fulfillment make me a better doula and a more present 
              support person for the families I serve.
            </p>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                &ldquo;Every birth story is unique, and every family deserves to feel 
                supported, heard, and empowered throughout their journey. It&apos;s an 
                honor to be part of such meaningful moments.&rdquo;
              </blockquote>
              <cite className="text-rose-600 dark:text-rose-400 font-semibold">— Adison</cite>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
