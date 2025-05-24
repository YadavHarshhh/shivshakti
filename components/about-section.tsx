import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const highlights = [
    "Affordable and flexible payment options",
    "Secure and safe environment with 24/7 security",
    "Located near major educational institutions",
    "Modern amenities and comfortable living spaces",
    "Supportive staff and community environment",
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/room.jpeg?height=500&width=600"
                alt="Students in common area"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-white p-6 shadow-lg md:max-w-[300px]">
              <div className="mb-2 text-3xl font-bold text-purple-700">5+ Years</div>
              <p className="text-gray-600">Providing quality accommodation to students since 2018</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-white-900 md:text-4xl">About Shiv Shakti Hostel</h2>
            <p className="mb-6 text-lg text-white-600">
              Established in 2020, Shiv Shakti Hostel has been a trusted name in student accommodation, providing
              comfortable and secure living spaces for students from across the country.
            </p>
            <p className="mb-8 text-lg text-white-600">
              Our mission is to create a supportive environment where students can focus on their academic goals while
              enjoying a balanced lifestyle with all necessary amenities at their fingertips.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
