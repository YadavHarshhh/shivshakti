import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function RoomsPage() {
  const roomTypes = [
   /* {
      name: "Standard Room",
      image: "/placeholder.svg?height=300&width=500",
      price: "₹8,000",
      perMonth: true,
      features: [
        "Single bed with mattress",
        "Study table and chair",
        "Wardrobe",
        "Shared bathroom (2:1 ratio)",
        "Basic amenities",
      ],
      popular: false,
    },*/
    {
      name: "Single Seating",
      image: "/room2.jpeg?height=300&width=500",
      price: "₹2,20,000",
      perMonth: false,
      features: [
        "Bed with premium mattress",
        "Study table and ergonomic chair",
        "Spacious wardrobe",
        "Attached bathroom",
        "Air conditioning",
        "Free WiFi",
        "Transportation",
        "24/7 Security",
        "Free Electricity",
        "Daily Cleaning",
        "Healthy and Hygienic Meals",
        "Free WiFi",
        "CCTV Surveillance",
        "Laundry Service",
        "Parking Area",
        "Hot Water Facility",
      ],
      popular: true,
    },
    {
      name: "Double Seating",
      image: "/double.jpeg?height=300&width=500",
      price: "₹1,50,000",
      perMonth: false,
      features: [
        "Double Bed with premium mattress",
        "Study table and ergonomic chair",
        "Spacious wardrobe",
        "Attached bathroom",
        "Air conditioning",
        "Free WiFi",
        "Transportation",
        "24/7 Security",
        "Free Electricity",
        "Daily Cleaning",
        "Healthy and Hygienic Meals",
        "Free WiFi",
        "CCTV Surveillance",
        "Laundry Service",
        "Parking Area",
        "Hot Water Facility",
      ],
      popular: true,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-purple-700 py-16">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold text-white">Rooms & Pricing</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Choose from our range of comfortable and well-equipped rooms designed to meet different needs and budgets.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Find Your Perfect Room</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                All rooms include basic utilities, WiFi, and access to common facilities like dining area, study rooms,
                and recreational spaces.
              </p>
            </div>

            <div className="flex justify-center gap-8">
              {roomTypes.map((room, index) => (
                <div
                  key={index}
                  className={`relative w-full max-w-md overflow-hidden rounded-lg border ${
                    room.popular ? "border-amber-500" : "border-gray-200"
                  } bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg`}
                >
                  {room.popular && (
                    <div className="absolute right-0 top-0 z-10 bg-amber-500 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      width={500}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{room.name}</h3>
                    <div className="mb-4 flex items-baseline">
                      <span className="text-3xl font-bold text-purple-700">{room.price}</span>
                      {room.perMonth ? (
                        <span className="ml-1 text-gray-600">/ month</span>
                      ) : (
                        <span className="ml-1 text-gray-600">/ year</span>
                      )}
                    </div>
                    <ul className="mb-6 space-y-2">
                      {room.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 flex-shrink-0 text-amber-500" />
                          <span className="text-gray-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-purple-700 text-white hover:bg-purple-800">
                      <Link href="/book-now" className="text-white hover:text-white">Book Now</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">Flexible Payment Options</h2>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-amber-500 bg-amber-50 p-4 text-center">
                  <h3 className="text-lg font-semibold text-purple-700">Quarterly</h3>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                  <h3 className="text-lg font-semibold text-purple-700">Yearly</h3>
                </div>
              </div>
              <p className="text-center text-gray-800">
                We also offer installment plans and scholarships for eligible students. Contact us to learn more about
                our payment options.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
