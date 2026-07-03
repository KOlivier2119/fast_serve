import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  Leaf01Icon,
  BoltIcon,
  FavouriteCircleIcon,
  UserGroupIcon,
  Store01Icon,
  StarCircleIcon,
} from "@hugeicons/core-free-icons"

export const metadata = {
  title: "About Us | FastServe",
  description: "Learn about FastServe — our story, mission, and the team behind the fastest food delivery service.",
}

const stats: { icon: IconSvgElement; value: string; label: string }[] = [
  { icon: UserGroupIcon, value: "500K+", label: "Happy Customers" },
  { icon: Store01Icon, value: "2,000+", label: "Partner Restaurants" },
  { icon: BoltIcon, value: "20 min", label: "Average Delivery" },
  { icon: StarCircleIcon, value: "4.8/5", label: "Customer Rating" },
]

const values: { icon: IconSvgElement; title: string; description: string }[] = [
  {
    icon: BoltIcon,
    title: "Speed First",
    description: "We obsess over delivery time so your food reaches you hot, fresh, and on time — every single order.",
  },
  {
    icon: Leaf01Icon,
    title: "Sustainability",
    description: "Eco-friendly packaging, carbon-neutral deliveries, and partnerships with local farms power our mission.",
  },
  {
    icon: FavouriteCircleIcon,
    title: "Community",
    description: "We uplift local restaurants and riders, creating real economic value in every neighborhood we serve.",
  },
  {
    icon: CheckmarkCircle01Icon,
    title: "Quality Guaranteed",
    description: "Our restaurant partners are carefully vetted for food safety, taste, and service excellence.",
  },
]

const team = [
  { name: "Kwizera Olivier", role: "Founder & CEO", initials: "KO", color: "bg-[#396C03]" },
  { name: "Sarah Johnson", role: "Head of Product", initials: "SJ", color: "bg-blue-500" },
  { name: "Michael Chen", role: "CTO", initials: "MC", color: "bg-purple-500" },
  { name: "Amara Diallo", role: "Head of Operations", initials: "AD", color: "bg-orange-500" },
  { name: "Priya Patel", role: "Marketing Director", initials: "PP", color: "bg-pink-500" },
  { name: "Alex Green", role: "Head of Sustainability", initials: "AG", color: "bg-teal-500" },
]

const AboutPage = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-[#396C03] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#FF8B00]/10 -translate-x-1/4 translate-y-1/3 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Delivering More Than Just{" "}
              <span className="text-[#FF8B00]">Food</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
              FastServe was born from a simple idea: great food should reach great people quickly, reliably, and with a
              smile. Since 2020, we've been on a mission to connect communities through the joy of food.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#396C03]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#396C03]">
                  <HugeiconsIcon icon={stat.icon} size={24} color="#396C03" strokeWidth={2} />
                </div>
                <div className="text-3xl font-bold text-[#396C03] mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <span className="inline-block bg-[#FF8B00]/10 text-[#FF8B00] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#396C03] mb-6 leading-tight">
                Making Every Meal an Experience Worth Remembering
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  We partner with the best local restaurants, carefully selecting partners who share our commitment
                  to quality, freshness, and customer satisfaction.
                </p>
                <p>
                  Our technology-first approach means real-time tracking, AI-powered route optimization, and a
                  seamless ordering experience that puts the best food in your city at your fingertips.
                </p>
              </div>
              <Link
                href="/register"
                className="inline-flex items-center mt-8 bg-[#396C03] hover:bg-[#2A5001] text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/blog_restaurant.jpg"
                  alt="Team working at FastServe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#396C03]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                  <div className="text-[#396C03] font-bold text-lg">Founded in 2020</div>
                  <div className="text-gray-500 text-sm">Serving 50+ cities worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#396C03]/10 text-[#396C03] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-[#396C03]/10 rounded-xl flex items-center justify-center mb-5 text-[#396C03] group-hover:bg-[#396C03] group-hover:text-white transition-colors duration-300">
                  <HugeiconsIcon icon={val.icon} size={24} color="currentColor" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#FF8B00]/10 text-[#FF8B00] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              The People Behind FastServe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div
                  className={`w-24 h-24 rounded-2xl ${member.color} flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                <p className="text-[#396C03] text-sm font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#396C03]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to taste the difference?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join half a million happy customers who rely on FastServe every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-[#FF8B00] hover:bg-[#E07A00] text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Order Now
            </Link>
            <Link
              href="/blog"
              className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
