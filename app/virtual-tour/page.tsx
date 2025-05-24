"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Maximize2, Info, Play } from "lucide-react"

export default function VirtualTourPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showInfo, setShowInfo] = useState(false)

  const tourAreas = [
    { id: "entrance", label: "Entrance & Reception" },
    { id: "rooms", label: "Rooms" },
    { id: "dining", label: "Dining Area" },
    { id: "facilities", label: "Facilities" },
    { id: "outdoor", label: "Outdoor Spaces" },
  ]

  const tourImages = {
    entrance: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Hostel Entrance",
        description: "The welcoming entrance of Shiv Shakti Hostel with modern architecture and landscaping.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Reception Area",
        description:
          "Our reception area is staffed 24/7 to assist residents and visitors with any queries or concerns.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Lobby",
        description:
          "The spacious lobby provides a comfortable waiting area with seating arrangements and information displays.",
      },
    ],
    rooms: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Standard Room",
        description:
          "Standard rooms feature comfortable beds, study tables, adequate storage, and good natural lighting.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Deluxe Room",
        description:
          "Deluxe rooms offer additional comfort with air conditioning, attached bathrooms, and premium furnishings.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Premium Suite",
        description:
          "Our premium suites provide the ultimate comfort with spacious layouts, modern amenities, and a small seating area.",
      },
    ],
    dining: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Dining Hall",
        description:
          "The large dining hall can accommodate all residents and serves nutritious meals three times a day.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Cafeteria",
        description: "The cafeteria offers snacks, beverages, and quick meals throughout the day in a casual setting.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Kitchen",
        description:
          "Our modern kitchen is equipped with industrial-grade equipment and maintained with the highest hygiene standards.",
      },
    ],
    facilities: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Study Room",
        description:
          "Dedicated study rooms provide a quiet environment with proper lighting and comfortable seating for focused studying.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Gym",
        description:
          "The fitness center is equipped with modern cardio and strength training equipment for physical fitness.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Recreation Room",
        description:
          "The recreation room features a TV, comfortable seating, and various indoor games for relaxation and socializing.",
      },
    ],
    outdoor: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Garden",
        description: "The well-maintained garden provides a serene environment for relaxation and outdoor studying.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Sports Area",
        description: "The outdoor sports area includes facilities for basketball, badminton, and other activities.",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Seating Area",
        description: "Outdoor seating areas are scattered throughout the campus for students to relax and socialize.",
      },
    ],
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? tourImages[selectedArea].length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === tourImages[selectedArea].length - 1 ? 0 : prev + 1))
  }

  const [selectedArea, setSelectedArea] = useState(tourAreas[0].id)

  const handleAreaChange = (area) => {
    setSelectedArea(area)
    setCurrentImageIndex(0)
    setShowInfo(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-purple-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold">Virtual Tour</h1>
            <p className="mx-auto max-w-2xl text-lg text-purple-100">
              Explore our hostel facilities and spaces from the comfort of your home.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Experience Shiv Shakti Hostel</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Navigate through different areas of our hostel to get a feel of the living spaces and facilities we
                offer.
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <Tabs value={selectedArea} onValueChange={handleAreaChange} className="mb-8">
                <TabsList className="mx-auto flex w-full max-w-3xl flex-wrap justify-between gap-2 rounded-lg bg-gray-100 p-1">
                  {tourAreas.map((area) => (
                    <TabsTrigger
                      key={area.id}
                      value={area.id}
                      className="rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
                    >
                      {area.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {tourAreas.map((area) => (
                  <TabsContent key={area.id} value={area.id} className="mt-6">
                    <div className="relative overflow-hidden rounded-lg bg-black">
                      <div className="relative aspect-video w-full">
                        <Image
                          src={tourImages[area.id][currentImageIndex].src || "/placeholder.svg"}
                          alt={tourImages[area.id][currentImageIndex].alt}
                          width={800}
                          height={600}
                          className="h-full w-full object-cover"
                        />

                        {/* Navigation Controls */}
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handlePrevImage}
                            className="rounded-full bg-black/30 text-white hover:bg-black/50"
                          >
                            <ArrowLeft className="h-6 w-6" />
                            <span className="sr-only">Previous</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleNextImage}
                            className="rounded-full bg-black/30 text-white hover:bg-black/50"
                          >
                            <ArrowRight className="h-6 w-6" />
                            <span className="sr-only">Next</span>
                          </Button>
                        </div>

                        {/* Image Controls */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowInfo(!showInfo)}
                            className="rounded-full bg-black/30 text-white hover:bg-black/50"
                          >
                            <Info className="h-5 w-5" />
                            <span className="sr-only">Information</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-black/30 text-white hover:bg-black/50"
                          >
                            <Maximize2 className="h-5 w-5" />
                            <span className="sr-only">Fullscreen</span>
                          </Button>
                        </div>

                        {/* Image Information */}
                        {showInfo && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                            <h3 className="mb-1 text-lg font-semibold">{tourImages[area.id][currentImageIndex].alt}</h3>
                            <p className="text-sm text-gray-200">
                              {tourImages[area.id][currentImageIndex].description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                      {tourImages[area.id].map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-md ${
                            currentImageIndex === index ? "ring-2 ring-purple-700" : ""
                          }`}
                        >
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={128}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>

                    {/* Video Tour Button */}
                    <div className="mt-8 text-center">
                      <Button className="bg-purple-700 hover:bg-purple-800">
                        <Play className="mr-2 h-4 w-4" /> Watch Video Tour
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-purple-100 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-purple-700"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Schedule a Visit</h3>
                    <p className="mb-4 text-gray-600">
                      Prefer to see the hostel in person? Schedule a visit and we'll be happy to show you around.
                    </p>
                    <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                      Book a Tour
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-purple-100 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-purple-700"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <path d="M12 18v-6"></path>
                        <path d="M8 15h8"></path>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Download Brochure</h3>
                    <p className="mb-4 text-gray-600">
                      Get detailed information about our facilities, pricing, and policies in our comprehensive
                      brochure.
                    </p>
                    <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-purple-100 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-purple-700"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Have Questions?</h3>
                    <p className="mb-4 text-gray-600">
                      Our team is ready to answer any questions you may have about our hostel and services.
                    </p>
                    <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
