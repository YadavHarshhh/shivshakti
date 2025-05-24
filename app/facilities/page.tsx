import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Bed,
  BookOpen,
  Wifi,
  Bus,
  Shield,
  Zap,
  Sparkles,
  Utensils,
  Video,
  Shirt,
  Car,
  Droplet,
  DoorOpen,
  Snowflake,
  Box,
} from "lucide-react"

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: <Bed className="h-10 w-10 text-purple-700" />,
      title: "Premium Bedding",
      description: "Comfortable beds with premium mattresses for a good night's sleep",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-purple-700" />,
      title: "Study Space",
      description: "Study table and ergonomic chair for comfortable studying",
    },
    {
      icon: <Box className="h-10 w-10 text-purple-700" />,
      title: "Spacious Wardrobe",
      description: "Ample storage space for all your belongings",
    },
    {
      icon: <DoorOpen className="h-10 w-10 text-purple-700" />,
      title: "Attached Bathroom",
      description: "Private bathroom facilities for each room",
    },
    {
      icon: <Snowflake className="h-10 w-10 text-purple-700" />,
      title: "Air Conditioning",
      description: "Climate controlled rooms for maximum comfort",
    },
    {
      icon: <Wifi className="h-10 w-10 text-purple-700" />,
      title: "Free WiFi",
      description: "High-speed internet access throughout the premises",
    },
    {
      icon: <Bus className="h-10 w-10 text-purple-700" />,
      title: "Transportation",
      description: "Regular transportation service for students",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-700" />,
      title: "24/7 Security",
      description: "Round-the-clock security for your safety",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-700" />,
      title: "Free Electricity",
      description: "Unlimited electricity usage included",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-700" />,
      title: "Daily Cleaning",
      description: "Regular cleaning and maintenance of rooms",
    },
    {
      icon: <Utensils className="h-10 w-10 text-purple-700" />,
      title: "Healthy Meals",
      description: "Healthy and hygienic meals provided daily",
    },
    {
      icon: <Video className="h-10 w-10 text-purple-700" />,
      title: "CCTV Surveillance",
      description: "24/7 CCTV monitoring for enhanced security",
    },
    {
      icon: <Shirt className="h-10 w-10 text-purple-700" />,
      title: "Laundry Service",
      description: "Professional laundry service available",
    },
    {
      icon: <Car className="h-10 w-10 text-purple-700" />,
      title: "Parking Area",
      description: "Secure parking space for vehicles",
    },
    {
      icon: <Droplet className="h-10 w-10 text-purple-700" />,
      title: "Hot Water",
      description: "24/7 hot water facility in bathrooms",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-purple-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold">Our Facilities</h1>
            <p className="mx-auto max-w-2xl text-lg text-purple-100">
              Discover the range of modern amenities and services we offer to ensure a comfortable and productive stay
              for all students.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {facilities.map((facility, index) => (
                        <div
                          key={index}
                  className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-4 flex items-center gap-3">
                              {facility.icon}
                              <h3 className="text-xl font-bold text-gray-900">{facility.title}</h3>
                            </div>
                  <p className="text-gray-700">{facility.description}</p>
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
