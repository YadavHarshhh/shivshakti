import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 text-center justify-center items-center">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Shiv Shakti Hostel</h3>
            <p className="mb-4">
              Providing comfortable and secure accommodation for students with modern amenities and a supportive
              environment.
            </p>
            <div className="flex gap-4">
              
              <Link href="#" className="hover:text-amber-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-amber-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-amber-500">
                  Rooms & Pricing
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-amber-500">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-500">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          {/* Removed Our Policies section as per user request */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                <span>Shiv Shakti Hostel near Manipal University (100 Meter From Manipal University Sanjharia-Vatika Road, Ajmer-Jaipur Expy, Dahmi Kalan, Jaipur, Rajasthan 303007

</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-amber-500" />
                <span>+91 85598 55477</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-amber-500" />
                <span>panwarnarendra893@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Shiv Shakti Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
