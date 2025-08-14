'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const whatsappNumber = "919455862486"

  const openWhatsAppAdmission = () => {
    const message = "Hello! I'm interested in admission to B R D Public School. Please provide me with detailed information about the admission process, fees, and available seats for the 2024-25 academic year."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/admissions", label: "Admissions" },
    { href: "/teachers", label: "Teachers" },
    { href: "/campus", label: "Campus" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <header className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/brd-school-logo.jpeg"
                alt="/brd Public School Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                B R D PUBLIC SCHOOL
              </h1>
              <p className="text-sm text-gray-600">Excellence in Education • Kandawa</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 shadow-lg"
              onClick={openWhatsAppAdmission}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Apply Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 w-fit"
                onClick={openWhatsAppAdmission}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
