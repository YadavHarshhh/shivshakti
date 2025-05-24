import { VideoHero } from "@/components/video-hero"
import { Navbar } from "@/components/navbar"
import { Features } from "@/components/features"
// import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <VideoHero />
        <AboutSection />
        <Features />
        {/* <Testimonials /> */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
