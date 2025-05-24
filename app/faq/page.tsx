import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function FAQPage() {
  const categories = [
    { id: "all", label: "All Questions" },
    { id: "accommodation", label: "Accommodation" },
    { id: "fees", label: "Fees & Payments" },
    { id: "facilities", label: "Facilities" },
    { id: "rules", label: "Rules & Policies" },
    { id: "admission", label: "Admission" },
  ]

  const faqs = [
    {
      question: "What types of rooms are available at Shiv Shakti Hostel?",
      answer:
        "Shiv Shakti Hostel offers two types of rooms: Single-Seater and Double-Seater. Each room is fully furnished with a premium bed and mattress, ergonomic study table and chair, spacious wardrobe, and attached bathroom. Additional amenities include air conditioning, free WiFi, 24/7 security, daily cleaning, CCTV surveillance, hot water facility, laundry service, healthy and hygienic meals, transportation, parking area, and free electricity.",
      category: "accommodation",
    },
    
    {
      question: "Are the rooms air-conditioned?",
      answer:
        "Yes, all rooms at Shiv Shakti Hostel are fully air-conditioned to ensure a comfortable stay for our residents.",
      category: "accommodation",
    },
    
    {
      question: "Can I choose my roommate?",
      answer:
        "Yes, if you're applying with a friend, you can request to be roommates. We try our best to accommodate such requests subject to availability.",
      category: "accommodation",
    },
    {
      question: "What is included in the hostel fees?",
      answer:
        "Your hostel fees cover everything you need for a comfortable stay: accommodation (single- or double-seater room), three healthy and hygienic meals a day, unlimited electricity and fully air-conditioned rooms, free high-speed WiFi, hot-water facility, daily room cleaning, laundry service, 24/7 security with CCTV surveillance, spacious parking area, scheduled transportation, and access to all common areas.",
      category: "fees",
    },
    
    {
      question: "What are the payment options available?",
      answer:
        "We offer flexible payment options including quarterly and annual plans. We accept payments through bank transfers, credit/debit cards, and popular UPI methods.",
      category: "fees",
    },
    {
      question: "Is there a security deposit?",
      answer:
        "Yes, a refundable security deposit is required at the time of admission. This is refundable when you vacate the hostel, subject to deductions for any damages.",
      category: "fees",
    },
    {
      question: "What meals are provided?",
      answer:
        "We provide four nutritious meals a day – breakfast, lunch, evening snacks, and dinner. The menu is thoughtfully planned and rotates weekly to offer variety. We also accommodate special dietary requirements with prior notice.",
      category: "facilities",
    },
    
    {
      question: "Is WiFi available in the hostel?",
      answer:
        "Yes, high-speed WiFi is available throughout the hostel premises. Each student is provided with login credentials for secure access.",
      category: "facilities",
    },
    {
      question: "Are there laundry facilities?",
      answer:
        "Yes, laundry facilities are available for all residents as part of the hostel services.",
      category: "facilities",
    },
    
    {
      question: "What are the hostel rules regarding visitors?",
      answer:
        "Visitors are allowed in designated areas during specific hours (10 AM to 10 PM). They must register at the reception. Overnight guests are not permitted without prior approval.",
      category: "rules",
    },
    {
      question: "Is there a curfew time?",
      answer:
        "Yes, for security reasons, there is a curfew time of 10 PM. Late entries require prior permission from the hostel management.",
      category: "rules",
    },
    {
      question: "Are pets allowed in the hostel?",
      answer: "No, pets are not allowed in the hostel premises for hygiene and allergy concerns.",
      category: "rules",
    },
    {
      question: "What is the admission process?",
      answer:
        "The admission process involves filling out an application form, submitting required documents (ID proof, address proof, college/university admission letter), paying the security deposit, and signing the hostel agreement.",
      category: "admission",
    },
    {
      question: "Can I visit the hostel before applying?",
      answer:
        "Yes, we encourage prospective residents to visit the hostel. You can schedule a tour by contacting our office or filling out the form on our website.",
      category: "admission",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "Required documents include identity proof (Aadhar/PAN/Passport), address proof, passport-sized photographs, college/university admission letter or ID card, and a character certificate from the previous institution (if applicable).",
      category: "admission",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-purple-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
            <p className="mx-auto max-w-2xl text-lg text-purple-100">
              Find answers to common questions about our hostel, facilities, policies, and more.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <div className="mx-auto flex max-w-md items-center gap-2">
                <Input placeholder="Search for questions..." className="border-purple-200" />
                <Button className="bg-purple-700 hover:bg-purple-800">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="mx-auto flex w-full max-w-3xl flex-wrap justify-between gap-2 rounded-lg bg-gray-100 p-1">
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
                  <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs
                        .filter((faq) => category.id === "all" || faq.category === category.id)
                        .map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium text-gray-900">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mx-auto mt-12 max-w-2xl rounded-lg bg-purple-50 p-6 text-center">
              <h3 className="mb-4 text-xl font-bold text-purple-700">Still have questions?</h3>
              <p className="mb-6 text-gray-600">
                If you couldn't find the answer to your question, feel free to contact us directly.
              </p>
              <Button className="bg-purple-700 hover:bg-purple-800">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
