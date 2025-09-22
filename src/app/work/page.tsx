'use client'

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Heart, Users, Baby, Calendar } from "lucide-react"

const portfolioImages = [
  {
    id: 1,
    src: "/work/pic1.jpg",
    alt: "Birth support session",
    title: "Birth Support",
    description: "Providing continuous support during labor and delivery"
  },
  {
    id: 2,
    src: "/work/pic2.jpg",
    alt: "Postpartum care",
    title: "Postpartum Care",
    description: "Supporting families in the early days with their newborn"
  },
  {
    id: 3,
    src: "/work/prenatal-visit-1.jpg",
    alt: "Prenatal visit",
    title: "Prenatal Visits",
    description: "Preparing families for their upcoming birth experience"
  },
  {
    id: 4,
    src: "/work/family-support-1.jpg",
    alt: "Family support",
    title: "Family Support",
    description: "Supporting the entire family unit through the journey"
  },
  {
    id: 5,
    src: "/work/breastfeeding-support-1.jpg",
    alt: "Breastfeeding support",
    title: "Lactation Support",
    description: "Helping families with feeding and newborn care"
  },
  {
    id: 6,
    src: "/work/education-session-1.jpg",
    alt: "Education session",
    title: "Education Sessions",
    description: "Providing evidence-based information and resources"
  }
]

const services = [
  {
    icon: <Heart className="h-8 w-8 text-rose-500" />,
    title: "Birth Doula Services",
    description: "Continuous emotional, physical, and informational support during labor and delivery"
  },
  {
    icon: <Users className="h-8 w-8 text-rose-500" />,
    title: "Postpartum Support",
    description: "Ongoing care and assistance during the early weeks with your newborn"
  },
  {
    icon: <Baby className="h-8 w-8 text-rose-500" />,
    title: "Newborn Care",
    description: "Guidance on feeding, sleep, and caring for your new baby"
  },
  {
    icon: <Calendar className="h-8 w-8 text-rose-500" />,
    title: "Prenatal Visits",
    description: "Preparation sessions to help you feel confident and ready"
  }
]

export default function Work() {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null)

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
              My Work
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A glimpse into the compassionate care and support I provide to families 
              during their most precious moments. Every family&apos;s journey is unique, 
              and I&apos;m honored to be part of their story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              How I Support Families
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My services are designed to provide comprehensive support throughout 
              your pregnancy, birth, and early postpartum journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
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
              Moments of Care
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These images capture the essence of the support I provide to families. 
              Each moment represents trust, care, and the beautiful journey of parenthood.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
              <blockquote className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-8 leading-relaxed">
                &ldquo;Adison&apos;s presence during my birth was invaluable. Her calm, confident 
                support helped me feel empowered and safe throughout the entire process. 
                I couldn&apos;t have done it without her.&rdquo;
              </blockquote>
              <cite className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                — Jessica L., First-time Mother
              </cite>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogTitle className="sr-only">
            {selectedImage ? `${selectedImage.title} - ${selectedImage.description}` : 'Image Gallery'}
          </DialogTitle>
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  )
}
