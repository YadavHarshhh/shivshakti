import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "Shiv Shakti Hostel was established with a vision to provide quality accommodation for students.",
    },
    {
      year: "2019",
      title: "Expansion",
      description: "Added 50 more rooms and enhanced facilities to accommodate growing demand.",
    },
    {
      year: "2020",
      title: "Modern Amenities",
      description: "Upgraded all rooms with modern amenities and introduced new recreational facilities.",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Implemented digital systems for better management and student experience.",
    },
    {
      year: "2022",
      title: "Community Building",
      description: "Started various community programs and events to foster a sense of belonging.",
    },
    {
      year: "2023",
      title: "Sustainability Initiatives",
      description: "Introduced eco-friendly practices and renewable energy solutions.",
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Hostel Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in student accommodation management, Rajesh ensures the highest standards of service and care.",
    },
    {
      name: "Priya Singh",
      position: "Administrative Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Priya oversees all administrative operations and ensures smooth functioning of the hostel services.",
    },
    {
      name: "Amit Sharma",
      position: "Facilities Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Amit is responsible for maintaining all facilities and ensuring they meet the highest standards of quality and safety.",
    },
    {
      name: "Neha Patel",
      position: "Student Welfare Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Neha focuses on student well-being, organizing events and providing support for all residents.",
    },
  ]

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in all aspects of our service and facilities.",
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical standards in all our dealings.",
    },
    {
      title: "Community",
      description: "We foster a sense of belonging and support among our residents.",
    },
    {
      title: "Safety",
      description: "We prioritize the safety and security of all our residents.",
    },
    {
      title: "Innovation",
      description: "We continuously improve our services and facilities through innovative solutions.",
    },
    {
      title: "Respect",
      description: "We respect the diversity and individuality of all our residents.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-purple-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold">About Us</h1>
            <p className="mx-auto max-w-2xl text-lg text-purple-100">
              Learn about our journey, mission, and the team behind Shiv Shakti Hostel.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
            <div>
  <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
  <p className="mb-4 text-lg text-gray-600">
    Founded in 2020, Shiv Shakti Hostel began with a simple mission: to provide students with a safe,
    comfortable, and supportive living environment that feels like a home away from home.
  </p>
  <p className="mb-4 text-lg text-gray-600">
    Over the years, we've grown into a premier student accommodation known for its modern amenities,
    dedicated services, and a vibrant community of students from across the country.
  </p>
  <p className="mb-4 text-lg text-gray-600">
    Our growth has been guided by our commitment to understanding and meeting the evolving needs of
    students, while maintaining our core values of excellence, integrity, and community.
  </p>
</div>

              <div className="relative">
                <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/ABOUTYS.jpeg?height=400&width=600"
                    alt="Shiv Shakti Hostel Building"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey section commented out
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-purple-200"></div>
              <div className="relative">
                {timeline.map((item, index) => (
                  <div key={index} className="mb-12">
                    <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-center`}>
                      <div className="w-5/12"></div>
                      <div className="relative flex w-2/12 justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-white">
                          {item.year}
                        </div>
                      </div>
                      <div className="w-5/12">
                        <div className="rounded-lg bg-white p-6 shadow-md">
                          <h3 className="mb-2 text-xl font-bold text-purple-700">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Core Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-xl font-bold text-purple-700">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team section commented out
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <div key={index} className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="mb-4 text-sm font-medium text-purple-700">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}
      </main>
      <Footer />
    </div>
  )
}
