"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-md bg-purple-700">
            <div className="flex h-full w-full items-center justify-center text-xl font-bold text-white">SS</div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-purple-700">Shiv Shakti</span>
            <span className="text-xs font-medium text-amber-600">Student Hostel</span>
          </div>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-purple-700">
            About Us
          </Link>
          <Link href="/rooms" className="text-sm font-medium text-gray-700 hover:text-purple-700">
            Rooms & Pricing
          </Link>
          <Link href="/facilities" className="text-sm font-medium text-gray-700 hover:text-purple-700">
            Facilities
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-gray-700 hover:text-purple-700">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-700">
            Contact
          </Link>
          <Button className="bg-purple-700 hover:bg-purple-800">
            <Link href="/book-now">Book Now</Link>
          </Button>
        </nav>

        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute left-0 top-16 z-50 w-full bg-white p-4 shadow-md md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/rooms"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms & Pricing
              </Link>
              <Link
                href="/facilities"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full bg-purple-700 hover:bg-purple-800">
                <Link href="/book-now" onClick={() => setIsMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
