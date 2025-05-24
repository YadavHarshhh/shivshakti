"use client"
import React, { useState } from "react"
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
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [roomType, setRoomType] = useState("single")
  const [moveInDate, setMoveInDate] = useState<Date | undefined>(undefined)
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSuccessMessage("")
    setErrorMessage("")

    if (!firstName || !lastName || !email || !phone || !roomType || !moveInDate) {
      setErrorMessage("Please fill in all required fields.")
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch("/api/book-now", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          roomType,
          moveInDate: moveInDate.toISOString().split("T")[0],
          message,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccessMessage(data.message || "Booking inquiry sent successfully!")
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setRoomType("single")
        setMoveInDate(undefined)
        setMessage("")
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled={submitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={submitting}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={submitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={submitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Room Type</Label>
                    <RadioGroup
                      value={roomType}
                      onValueChange={(value) => setRoomType(value)}
                      className="grid gap-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single" disabled={submitting} />
                        <Label htmlFor="single">Single Seating (₹2,20,000/year)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="double" id="double" disabled={submitting} />
                        <Label htmlFor="double">Double Seating (₹1,50,000/year)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="move-in">Preferred Move-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                          disabled={submitting}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>{moveInDate ? moveInDate.toDateString() : "Pick a date"}</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={moveInDate}
                          onSelect={setMoveInDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about any specific requirements, questions, or anything else you'd like us to know..."
                      className="min-h-[120px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={submitting}
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-sm text-green-600">{successMessage}</p>
                  )}

                  <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Inquiry"}
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
