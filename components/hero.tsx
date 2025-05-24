import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-purple-700 py-20 text-white md:py-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto grid gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col justify-center">
          <div className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Student Accommodation
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Your Home Away From Home</h1>
          <p className="mb-8 text-lg text-purple-100 md:pr-8">
            Experience comfortable living with modern amenities, secure environment, and a supportive community at Shiv
            Shakti Hostel.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
              <Link href="/book-now">Book Your Stay</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/virtual-tour">Take a Virtual Tour</Link>
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-lg bg-amber-500"></div>
          <div className="absolute -left-4 -bottom-4 h-full w-full rounded-lg border-2 border-white"></div>
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Shiv Shakti Hostel Building"
              width={600}
              height={400}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
