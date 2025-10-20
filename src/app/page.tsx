'use client'

import PlaceholderImage from "@/components/placeholder-image"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, ArrowRight, Star, Users, Award, Baby, Clock, Home as HomeIcon, Sparkles, TrendingDown, TrendingUp, Timer, Shield, Smile, HeartHandshake } from "lucide-react"
import AdisonProfile from "../../public/photos/adison-profile-picture.jpg"
import DoulaSupportingFamilies from "../../public/work/pic2.jpg"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log('Video failed to load, falling back to image');
              e.currentTarget.style.display = 'none';
            }}
          >
            <source src="/videos/Maternity Video.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <PlaceholderImage
              alt="Adison Doula"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 dark:from-black/80 dark:via-black/60 dark:to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Supporting Your Journey to
              <span className="text-pink-200 block">Parenthood</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional doula services with care, compassion, and expertise. 
              Your most precious moments deserve dedicated support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 !bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Meet Vela Section - Big Image Feature */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={AdisonProfile}
                  alt="Vela Doula - Supporting families"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full border-4 border-primary/20 rounded-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Meet Your Doula
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Supporting You Through Life&apos;s Most 
                <span className="text-primary block">Beautiful Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I&apos;m Adison! As a certified doula, I&apos;m dedicated to providing compassionate, 
                evidence-based support to families during pregnancy, birth, and postpartum. 
                My approach combines professional expertise with genuine care, ensuring you feel 
                empowered, informed, and supported every step of the way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every family&apos;s journey is unique, and I&apos;m here to honor your preferences, 
                answer your questions, and provide the personalized support you deserve.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg">
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is a Doula Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What is a Doula?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A doula is a trained professional who provides continuous physical, emotional, 
              and informational support to a birthing person before, during, and after childbirth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                The Role of a Doula
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Emotional Support
                    </h4>
                    <p className="text-muted-foreground">
                      Providing reassurance, encouragement, and a calm, nurturing presence 
                      throughout your journey.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Physical Comfort
                    </h4>
                    <p className="text-muted-foreground">
                      Using techniques like massage, positioning, and breathing exercises to 
                      help you stay comfortable during labor.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Evidence-Based Information
                    </h4>
                    <p className="text-muted-foreground">
                      Helping you understand your options and make informed decisions that 
                      align with your preferences.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Baby className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Advocacy & Communication
                    </h4>
                    <p className="text-muted-foreground">
                      Supporting communication between you and your healthcare team to ensure 
                      your voice is heard.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/work/pic2.jpg"
                  alt="Doula providing support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Benefits of Having a Doula
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Research shows that continuous support from a doula leads to better outcomes 
              for both parents and babies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                stat: "39%",
                benefit: "Lower risk of cesarean birth",
                description: "Continuous support helps reduce the need for surgical intervention",
                icon: <TrendingDown className="h-10 w-10" />,
                animation: { y: [0, -8, 0] }
              },
              {
                stat: "15%",
                benefit: "Increased likelihood of spontaneous vaginal birth",
                description: "Natural labor progression with proper support and positioning",
                icon: <TrendingUp className="h-10 w-10" />,
                animation: { y: [0, -8, 0] }
              },
              {
                stat: "10%",
                benefit: "Shorter labor duration",
                description: "Comfort measures and support help labor progress more efficiently",
                icon: <Timer className="h-10 w-10" />,
                animation: { rotate: [0, 10, -10, 0] }
              },
              {
                stat: "31%",
                benefit: "Less likely to use pain medication",
                description: "Non-pharmacological pain relief techniques are highly effective",
                icon: <Shield className="h-10 w-10" />,
                animation: { scale: [1, 1.1, 1] }
              },
              {
                stat: "Higher",
                benefit: "Birth satisfaction",
                description: "Feeling supported and informed leads to more positive birth experiences",
                icon: <Smile className="h-10 w-10" />,
                animation: { scale: [1, 1.15, 1] }
              },
              {
                stat: "Better",
                benefit: "Postpartum outcomes",
                description: "Continued support helps with breastfeeding and emotional adjustment",
                icon: <HeartHandshake className="h-10 w-10" />,
                animation: { scale: [1, 1.1, 1] }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                  {/* Animated Icon Background */}
                  <motion.div
                    className="absolute top-4 right-4 text-primary/10"
                    animate={item.animation}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Animated Icon */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
                    animate={item.animation}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </motion.div>
                  
                  <div className="text-4xl font-bold text-primary mb-3">
                    {item.stat}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.benefit}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-muted rounded-2xl"
          >
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-foreground font-medium mb-4">
                <span className="text-primary font-bold">Important Note:</span> A doula does not replace your medical team.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Instead, a doula works alongside your doctors, midwives, and nurses to provide 
                additional support focused solely on your comfort and wellbeing. We complement 
                medical care with continuous emotional and physical support that healthcare 
                providers may not have time to offer during busy shifts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Vela Doula Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that professional, compassionate care makes 
              during your most important moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-12 w-12 text-primary" />,
                title: "Compassionate Care",
                description: "Every family receives personalized, empathetic support tailored to their unique needs and preferences."
              },
              {
                icon: <Award className="h-12 w-12 text-primary" />,
                title: "Certified Professional",
                description: "Fully certified and experienced doula with ongoing education and training in best practices."
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Family-Centered",
                description: "Supporting the entire family unit through pregnancy, birth, and the early postpartum period."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase with Images */}
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
              Comprehensive Support Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From pregnancy through postpartum, I&apos;m here to support your family with 
              personalized care and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Baby className="h-10 w-10" />,
                title: "Birth Doula Services",
                description: "Continuous emotional, physical, and informational support during labor and delivery. I'll be by your side, helping you navigate each moment with confidence.",
                image: "/work/pic1.jpg"
              },
              {
                icon: <HomeIcon className="h-10 w-10" />,
                title: "Postpartum Care",
                description: "Ongoing support during the early weeks with your newborn. From feeding guidance to emotional support, I'm here to help your family thrive.",
                image: "/work/pic2.jpg"
              },
              {
                icon: <Heart className="h-10 w-10" />,
                title: "Prenatal Visits",
                description: "Preparation sessions to build your confidence and answer questions. We'll discuss your birth preferences and create a plan that honors your wishes.",
                image: "/work/pic1.jpg"
              },
              {
                icon: <Sparkles className="h-10 w-10" />,
                title: "Newborn Care Education",
                description: "Guidance on feeding, sleep routines, and caring for your baby. Learn practical skills and receive evidence-based information.",
                image: "/work/pic2.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="default">
              <Link href="/pricing">
                View All Services & Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview Section - Big Pictures */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Moments That Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A glimpse into the beautiful work of supporting families during 
              their most precious moments.
            </p>
          </motion.div>

          {/* Large Feature Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8"
          >
            <Image
              src={DoulaSupportingFamilies}
              alt="Vela Doula supporting families"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                Compassionate Support, Every Step of the Way
              </h3>
              <p className="text-lg text-white/90">
                Professional doula care that honors your unique journey into parenthood
              </p>
            </div>
          </motion.div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                src: "/work/pic1.jpg",
                title: "Birth Support",
                description: "Continuous care during labor and delivery"
              },
              {
                src: "/work/pic2.jpg",
                title: "Postpartum Care",
                description: "Supporting families with their newborns"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/work">
                View Complete Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed">
                &ldquo;Adison&apos;s support made all the difference during my birth experience. 
                Her calm presence and expertise helped me feel confident and empowered.&rdquo;
              </blockquote>
              <cite className="text-lg text-muted-foreground">
                — Sarah M., Mother of Two
              </cite>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/reviews">Read More Reviews</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can support you and your family during this 
              special time. Every family deserves compassionate, professional care.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
