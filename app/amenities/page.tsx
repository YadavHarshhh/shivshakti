import Image from "next/image"
import { Wifi, Utensils, Dumbbell, Shield, BookOpen, Bed, TvIcon, Fan, Shirt, Droplet, Bus, Coffee } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AmenitiesPage() {
  const amenities = [
    {
      icon: <Bed className="h-10 w-10 text-orange-500" />,
      title: "Comfortable Rooms",
      description: "Spacious and well-furnished rooms with comfortable beds, study tables, and wardrobes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Wifi className="h-10 w-10 text-orange-500" />,
      title: "High-Speed WiFi",
      description: "24/7 high-speed internet access throughout the hostel premises for seamless connectivity.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Utensils className="h-10 w-10 text-orange-500" />,
      title: "Nutritious Meals",
      description: "Three nutritious meals a day prepared in hygienic conditions with varied menu options.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance and professional security staff.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-orange-500" />,
      title: "Study Areas",
      description: "Dedicated quiet zones for focused studying and separate areas for group discussions.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Dumbbell className="h-10 w-10 text-orange-500" />,
      title: "Fitness Center",
      description: "Modern gym equipment to keep students physically active and healthy.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <TvIcon className="h-10 w-10 text-orange-500" />,
      title: "Recreation Room",
      description: "Entertainment area with TV, indoor games, and comfortable seating for relaxation.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Fan className="h-10 w-10 text-orange-500" />,
      title: "Air Conditioning",
      description: "Climate-controlled rooms for comfortable living in all weather conditions.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Shirt className="h-10 w-10 text-orange-500" />,
      title: "Laundry Services",
      description: "On-site laundry facilities with washing machines and dryers for convenience.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Droplet className="h-10 w-10 text-orange-500" />,
      title: "Hot Water Supply",
      description: "24/7 hot water supply in bathrooms for comfortable bathing experience.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Bus className="h-10 w-10 text-orange-500" />,
      title: "Transportation",
      description: "Regular shuttle service to nearby educational institutions and city centers.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Coffee className="h-10 w-10 text-orange-500" />,
      title: "Cafeteria",
      description: "In-house cafeteria serving snacks, beverages, and quick bites throughout the day.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-blue-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold">Our Amenities</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Shiv Shakti Hostel provides a range of modern amenities to ensure a comfortable and productive stay for
              all students.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={amenity.image || "/placeholder.svg"}
                      alt={amenity.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      {amenity.icon}
                      <h3 className="text-xl font-bold text-blue-900">{amenity.title}</h3>
                    </div>
                    <p className="text-gray-600">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
