import Image from "next/image"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Engineering Student",
      avatar: "/placeholder.svg?height=80&width=80",
      text: "Living at Shiv Shakti Hostel has been a great experience. The facilities are excellent and the staff is very supportive. I've made great friends here and feel completely at home.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Medical Student",
      avatar: "/placeholder.svg?height=80&width=80",
      text: "The study environment here is perfect for medical students like me. The rooms are spacious, food is nutritious, and the location is convenient for my college commute.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "MBA Student",
      avatar: "/placeholder.svg?height=80&width=80",
      text: "As someone who values both comfort and affordability, Shiv Shakti Hostel has been the perfect choice. The flexible payment options really helped me manage my finances better.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">What Our Residents Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Hear from students who call Shiv Shakti Hostel their home.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-lg bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -top-4 left-8 text-purple-200">
                <Quote size={48} />
              </div>
              <div className="relative">
                <div className="mb-6 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mb-6 text-gray-600">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
