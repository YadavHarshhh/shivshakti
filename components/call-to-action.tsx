import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-16 text-white md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Join Our Community?</h2>
          <p className="mb-8 text-lg text-purple-100">
            Book your stay now and experience the perfect blend of comfort, convenience, and community at Shiv Shakti
            Hostel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
              <Link href="/book-now" className="flex items-center gap-2">
                Book Your Stay <ArrowRight size={16} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
