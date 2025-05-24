import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const categories = [
    { id: "all", label: "All" },
    { id: "rooms", label: "Rooms" },
    { id: "facilities", label: "Facilities" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "rooms",
      title: "Room View",
      image: "/room.jpeg",
    },
    {
      id: 2,
      category: "rooms",
      title: "Room Interior",
      image: "/room1.jpeg",
    },
    {
      id: 3,
      category: "rooms",
      title: "Room Setup",
      image: "/room2.jpeg",
    },
    {
      id: 4,
      category: "facilities",
      title: "Study Area",
      image: "/studytable.jpeg",
    },
    {
      id: 5,
      category: "facilities",
      title: "Double Room",
      image: "/double.jpeg",
    },
    {
      id: 7,
      category: "rooms",
      title: "Room View 1",
      image: "/WhatsApp Image 2025-05-17 at 08.21.09.jpeg",
    },
    {
      id: 8,
      category: "rooms",
      title: "Room View 2",
      image: "/WhatsApp Image 2025-05-17 at 08.21.21.jpeg",
    },
    {
      id: 9,
      category: "rooms",
      title: "Room View 3",
      image: "/WhatsApp Image 2025-05-17 at 08.21.23.jpeg",
    },
    {
      id: 10,
      category: "rooms",
      title: "Room View 4",
      image: "/WhatsApp Image 2025-05-17 at 08.21.27.jpeg",
    },
    {
      id: 11,
      category: "rooms",
      title: "Room View 5",
      image: "/WhatsApp Image 2025-05-17 at 08.21.30.jpeg",
    },
    {
      id: 12,
      category: "rooms",
      title: "Room View 6",
      image: "/WhatsApp Image 2025-05-17 at 08.21.31 (1).jpeg",
    },
    {
      id: 13,
      category: "rooms",
      title: "Room View 7",
      image: "/WhatsApp Image 2025-05-17 at 08.21.32 (1).jpeg",
    },
    {
      id: 14,
      category: "rooms",
      title: "Room View 8",
      image: "/WhatsApp Image 2025-05-17 at 08.21.32 (2).jpeg",
    },
    {
      id: 15,
      category: "rooms",
      title: "Room View 9",
      image: "/WhatsApp Image 2025-05-17 at 08.21.32.jpeg",
    },
    {
      id: 16,
      category: "rooms",
      title: "Room View 10",
      image: "/WhatsApp Image 2025-05-17 at 08.21.33 (1).jpeg",
    },
    {
      id: 17,
      category: "rooms",
      title: "Room View 11",
      image: "/WhatsApp Image 2025-05-17 at 08.21.33.jpeg",
    },
    {
      id: 18,
      category: "rooms",
      title: "Room View 12",
      image: "/WhatsApp Image 2025-05-17 at 08.21.34 (1).jpeg",
    },
    {
      id: 19,
      category: "rooms",
      title: "Room View 13",
      image: "/WhatsApp Image 2025-05-17 at 08.21.34 (2).jpeg",
    },
    {
      id: 20,
      category: "rooms",
      title: "Room View 14",
      image: "/WhatsApp Image 2025-05-17 at 08.21.34.jpeg",
    },
    {
      id: 21,
      category: "rooms",
      title: "Room View 15",
      image: "/WhatsApp Image 2025-05-17 at 08.21.35 (1).jpeg",
    },
    {
      id: 22,
      category: "rooms",
      title: "Room View 16",
      image: "/WhatsApp Image 2025-05-17 at 08.21.35 (2).jpeg",
    },
    {
      id: 23,
      category: "rooms",
      title: "Room View 17",
      image: "/WhatsApp Image 2025-05-17 at 08.21.35.jpeg",
    },
    {
      id: 24,
      category: "rooms",
      title: "Room View 18",
      image: "/WhatsApp Image 2025-05-17 at 08.21.36 (1).jpeg",
    },
    {
      id: 25,
      category: "rooms",
      title: "Room View 19",
      image: "/WhatsApp Image 2025-05-17 at 08.21.36.jpeg",
    },
    {
      id: 26,
      category: "rooms",
      title: "Room View 20",
      image: "/WhatsApp Image 2025-05-17 at 08.21.37 (1).jpeg",
    },
    {
      id: 27,
      category: "rooms",
      title: "Room View 21",
      image: "/WhatsApp Image 2025-05-17 at 08.21.37 (2).jpeg",
    },
    {
      id: 28,
      category: "rooms",
      title: "Room View 22",
      image: "/WhatsApp Image 2025-05-17 at 08.21.37.jpeg",
    },
    {
      id: 29,
      category: "rooms",
      title: "Room View 23",
      image: "/WhatsApp Image 2025-05-17 at 08.21.38 (1).jpeg",
    },
    {
      id: 30,
      category: "rooms",
      title: "Room View 24",
      image: "/WhatsApp Image 2025-05-17 at 08.21.38.jpeg",
    },
    {
      id: 31,
      category: "rooms",
      title: "Room View 25",
      image: "/WhatsApp Image 2025-05-17 at 08.21.41 (1).jpeg",
    },
    {
      id: 32,
      category: "rooms",
      title: "Room View 26",
      image: "/WhatsApp Image 2025-05-17 at 08.21.41.jpeg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-purple-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold">Gallery</h1>
            <p className="mx-auto max-w-2xl text-lg text-purple-100">
              Take a visual tour of our hostel facilities and rooms.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="mx-auto flex w-full max-w-2xl justify-between rounded-lg bg-gray-100 p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {galleryItems
                      .filter((item) => category.id === "all" || item.category === category.id)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className="relative h-60 w-full overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={600}
                              height={400}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
