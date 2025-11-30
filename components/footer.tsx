"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Youtube, Mail, Heart, Download, Phone } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/kranthikiran885366", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kranthi-kiran-mallela-2464ab2b0", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Mail, href: "mailto:mallelakranthikiran@gmail.com", label: "Email" },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
                {"<Kranthi />"}
              </Link>
            </motion.div>
            <p className="text-muted-foreground mb-4">
              Building innovative digital solutions with passion and precision.
            </p>
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="mailto:mallelakranthikiran@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                mallelakranthikiran@gmail.com
              </a>
              <a href="tel:+918885299384" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +91 8885299384
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((social) => (
                <motion.div key={social.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kranthi Kiran. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
