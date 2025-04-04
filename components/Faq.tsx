"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

// FAQ data
const generalFaqs = [
  {
    question: "How does FastServe delivery work?",
    answer:
      "FastServe partners with local restaurants and delivery drivers to bring food directly to your door. Simply place an order through our app or website, and we'll handle the rest, ensuring your food arrives fresh and on time.",
  },
  {
    question: "What are the delivery hours?",
    answer:
      "Most restaurants on FastServe are available for delivery from 8:00 AM to 10:00 PM, though specific hours may vary by restaurant. Some locations offer late-night delivery until midnight or later.",
  },
  {
    question: "How much does delivery cost?",
    answer:
      "Delivery fees typically range from $2.99 to $5.99 depending on your distance from the restaurant. Premium partners may offer free delivery on orders above a certain amount.",
  },
  {
    question: "Can I schedule an order in advance?",
    answer:
      "Yes! You can schedule orders up to 7 days in advance. Simply select the 'Schedule for Later' option during checkout and choose your preferred delivery date and time.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is confirmed, you can track its status in real-time through our app or website. You'll receive notifications when your order is being prepared, picked up, and when it's arriving.",
  },
  {
    question: "What if there's an issue with my order?",
    answer:
      "If you experience any issues with your order, please use the 'Help' section in our app or website to report the problem. Our customer service team is available 24/7 to assist you.",
  },
]

const businessFaqs = [
  {
    question: "How can I list my restaurant on FastServe?",
    answer:
      "To partner with FastServe, visit our 'Partner with Us' page and fill out the application form. Our team will review your information and contact you within 2-3 business days to discuss next steps.",
  },
  {
    question: "What fees does FastServe charge restaurants?",
    answer:
      "FastServe typically charges a commission on each order, ranging from 15-30% depending on your service level. We also offer marketing opportunities and premium placement for additional fees.",
  },
  {
    question: "Do I need my own delivery drivers?",
    answer:
      "No, FastServe provides delivery services through our network of drivers. However, if you have your own delivery team, we can accommodate that in our partnership agreement.",
  },
  {
    question: "How do I manage my menu on FastServe?",
    answer:
      "You'll have access to our Partner Portal where you can update your menu, prices, hours, and availability in real-time. Our team can also assist with initial menu setup and optimization.",
  },
  {
    question: "How quickly will I receive payment for orders?",
    answer:
      "FastServe processes payments to restaurant partners on a weekly basis. Funds are typically deposited into your account within 5-7 business days after the end of each payment period.",
  },
  {
    question: "Can I offer promotions through FastServe?",
    answer:
      "Yes! You can create and manage special offers, discounts, and promotions through our Partner Portal. Our marketing team can also help you design effective promotional campaigns.",
  },
]

// Accordion Item Component
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium text-[#3F3F3F] hover:text-[#396C03] transition-colors duration-200"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="pr-2">{question}</span>
        <span className="text-[#396C03] flex-shrink-0">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

const Faq = () => {
  const [activeTab, setActiveTab] = useState("general")
  const [openItems, setOpenItems] = useState<number[]>([0]) // First item open by default

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index))
    } else {
      setOpenItems([...openItems, index])
    }
  }

  const faqs = activeTab === "general" ? generalFaqs : businessFaqs
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[#3F3F3F] mb-8">Frequently Asked Questions</h2>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setActiveTab("general")
              setOpenItems([0])
            }}
            className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
              activeTab === "general"
                ? "bg-[#396C03] text-white shadow-md"
                : "bg-white text-[#396C03] hover:bg-gray-100"
            }`}
          >
            General
          </button>
          <button
            onClick={() => {
              setActiveTab("business")
              setOpenItems([0])
            }}
            className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
              activeTab === "business"
                ? "bg-[#396C03] text-white shadow-md"
                : "bg-white text-[#396C03] hover:bg-gray-100"
            }`}
          >
            For Business
          </button>
        </div>

        {/* Two-column Accordion Layout */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Left Column */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            {leftColumnFaqs.map((faq, index) => (
              <AccordionItem
                key={`left-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.includes(index)}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            {rightColumnFaqs.map((faq, index) => (
              <AccordionItem
                key={`right-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.includes(index + leftColumnFaqs.length)}
                onClick={() => toggleItem(index + leftColumnFaqs.length)}
              />
            ))}
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <Link href="/contact" className="inline-flex items-center text-[#396C03] font-medium hover:underline">
            Contact our support team
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Faq

