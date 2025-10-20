import Link from 'next/link'
import { Heart, Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import logo from '../../public/Vela Doula Logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src={logo} alt="Vela Doula Logo" className="h-20 w-auto" width={48} height={48} />
              <span className="text-2xl font-light font-yaldevi tracking-[0.25em] transition-colors duration-300">VELA DOULA SERVICES</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Supporting families through their most precious moments with care, 
              compassion, and expertise. Your journey to parenthood deserves 
              dedicated support.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@adison.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">hello@adison.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Serving families nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Vela Doula Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
