import ServiceCard from "./ServiceCard"
import { FaClock } from "react-icons/fa"
import { FaKitchenSet, FaBowlFood } from "react-icons/fa6"

const Service = () => {
  const data = [
    {
      Icon: FaKitchenSet,
      title: "Wide selection of restaurants",
      description: "We provide all kinds of food. Just feel free to pick what you like.",
    },
    {
      Icon: FaBowlFood,
      title: "Easy ordering process",
      description: "Ordering food is easy peazy you can order anytime, anywhere.",
    },
    {
      Icon: FaClock,
      title: "Fast delivery within 20 min",
      description: "Fast delivery is our priority, our agents can reach you easily",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.map((item, index) => (
            <ServiceCard key={index} Icon={item.Icon} title={item.title} description={item.description} />
          ))}
        </div>

        <div className="mt-24 max-w-5xl mx-auto">
          {/* Image container with overlay text */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* The main image */}
            <img src="/chef.svg" alt="Chef" className="w-full h-[500px] object-cover" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Text content positioned at bottom center */}
            <div className="absolute bottom-0 left-0 right-0 text-center p-8">
              <h2 className="text-3xl font-bold mb-3 text-white">Want to be a part of FastServe?</h2>
              <p className="text-white/90 mb-6 max-w-lg mx-auto">
                List your restaurant or shop on FastServe and reach more customers.
              </p>
              <button className="bg-[#FF8B00] hover:bg-[#E07A00] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service

