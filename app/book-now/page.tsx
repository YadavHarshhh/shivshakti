import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function BookNowPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Book Your Stay</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Interested in staying at Shiv Shakti Hostel? Fill out the form below and we'll get back to you within 24
              hours with availability and next steps.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Booking Inquiry</CardTitle>
                <CardDescription>
                  Tell us about yourself and your accommodation needs. Our team will contact you with available options
                  and pricing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Room Type</Label>
                    <RadioGroup defaultValue="single" className="grid gap-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single" />
                        <Label htmlFor="single">Single Seating (₹2,20,000/year)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="double" id="double" />
                        <Label htmlFor="double">Double Seating (₹1,50,000/year)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="move-in">Preferred Move-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>Pick a date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about any specific requirements, questions, or anything else you'd like us to know..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 rounded-lg bg-purple-50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-purple-700">What happens next?</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                  <p>We'll review your inquiry and check room availability for your preferred dates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                  <p>Our team will contact you within 24 hours with available options and pricing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                  <p>We can schedule a visit or virtual tour to help you make your decision</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                  <p>Once confirmed, we'll guide you through the simple booking process</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              Need immediate assistance? Call us at{" "}
              <a href="tel:+918559855477" className="font-medium text-purple-700 hover:underline">
              +91 85598 55477
              </a>{" "}
              or email{" "}
              <a href="mailto:panwarnarendra893@gmail.com" className="font-medium text-purple-700 hover:underline">
              panwarnarendra893@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
