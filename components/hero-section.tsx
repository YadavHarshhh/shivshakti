import Image from "next/image"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Shiv Shakti Hostel Building"
          width={1920}
          height={500}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 transform text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-orange-500">LUXURIOUS STUDENT</span>
            <span className="block text-blue-900">LIVING WITH</span>
            <span className="block text-orange-500">9 FLEXIBLE</span>
            <span className="block text-blue-900">&amp; EASY INSTALLMENTS</span>
          </h1>
        </div>
      </div>

      {/* Rating Card */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative -mt-16 ml-4 inline-block rounded-lg bg-white p-6 shadow-lg">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-orange-500">5.0</div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
              <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
              <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
              <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
              <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
            </div>
            <div className="mt-1 text-xs font-semibold text-gray-600">12 REVIEWS</div>
          </div>
        </div>
      </div>
    </section>
  )
}
