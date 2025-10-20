'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import AdisonProfile from "../../../public/photos/adison-profile-picture.jpg"
import AdisonPregnancy from "../../../public/photos/Adison Pregnant.jpg"
import AdisonWithBaby from "../../../public/photos/Adison with Baby.jpg"
import AdisonWithFullFamily from "../../../public/photos/Adison with full family.jpg"

export default function About() {
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
              Meet Adison
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={AdisonProfile}
                alt="Adison Profile Picture"
                width={600}
                height={800}
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                My Story & Philosophy
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey as a doula began with a deep belief that every family 
                deserves compassionate, non-judgmental support during pregnancy, 
                birth, and the early postpartum period. Having witnessed the 
                transformative power of proper support, I&apos;m committed to ensuring 
                every family feels empowered and confident throughout their journey.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that birth is a natural, physiological process that 
                works best when families feel safe, supported, and informed. 
                My role is to provide evidence-based information, emotional 
                support, and practical assistance while respecting your choices 
                and preferences.
              </p>

              <div className="flex items-center space-x-2 text-primary">
                <Heart className="h-5 w-5" />
                <span className="font-semibold">Certified Birth & Postpartum Doula</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why I Became a Doula */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why I Became a Doula
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My personal experiences with birth and a passion for supporting families inspired 
              me to become a doula and provide the care I believe every family deserves.
            </p>
          </motion.div>

          {/* Personal Birth Experiences */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={AdisonPregnancy}
                alt="Personal Birth Experiences"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                Personal Birth Experiences
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a mother of two beautiful girls, I&apos;ve experienced the transformative power of birth firsthand. My first birth was medicated, while my most recent was completely unmedicated, giving me a deep understanding of different birthing choices and needs.
              </p>
            </motion.div>
          </div>

          {/* Passion for Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 lg:order-1 order-2"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                Passion for Support
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My own births showed me how crucial compassionate support is during such a vulnerable time. I became a doula to ensure other families feel empowered, heard, and supported through their unique journeys.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:order-2 order-1"
            >
              <Image
                src={AdisonWithBaby}
                alt="Passion for Support"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </motion.div>
          </div>

          {/* Empowering Families */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={AdisonWithFullFamily}
                alt="Empowering Families"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                Empowering Families
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Having navigated varied birth experiences myself, I&apos;m driven to help families feel confident in their choices. I&apos;m here to provide the knowledge and emotional support I found so valuable as a new mother.
              </p>
            </motion.div>
          </div>

          {/* Understanding Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 lg:order-1 order-2"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                Understanding Challenges
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each of my births taught me about the physical and emotional challenges parents face. This fuels my commitment to offer practical assistance and a calming presence during pregnancy, birth, and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:order-2 order-1"
            >
              <Image
                src={AdisonWithFullFamily}
                alt="Understanding Challenges"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className="p-8 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-white mb-6">
              Beyond Professional Care
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              When I&apos;m not supporting families, you&apos;ll find me spending time with my 
              own family, reading the latest research on birth and parenting, or 
              enjoying a quiet moment with a cup of tea. I believe that self-care 
              and personal fulfillment make me a better doula and a more present 
              support person for the families I serve.
            </p>
            <div className="bg-card p-8 rounded-lg shadow-md">
              <blockquote className="text-lg italic text-card-foreground mb-4">
                &ldquo;Every birth story is unique, and every family deserves to feel 
                supported, heard, and empowered throughout their journey. It&apos;s an 
                honor to be part of such meaningful moments.&rdquo;
              </blockquote>
              <cite className="text-primary font-semibold">— Adison</cite>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
