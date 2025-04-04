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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-32">
          {data.map((item, index) => (
            <ServiceCard key={index} Icon={item.Icon} title={item.title} description={item.description} />
          ))}
        </div>

        {/* Promotional section with larger image */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* Larger image with better object positioning */}
            <img src="/chef.svg" alt="Chef" className="w-full h-[600px] md:h-[700px] object-cover object-center" />

            {/* Stronger gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#396C03] via-[#396C03]/70 to-transparent"></div>

            {/* Content box with semi-transparent background for better readability */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-40">
              <div className="max-w-2xl mx-auto bg-black/20 backdrop-blur-sm p-8 rounded-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">
                  Want to be a part of FastServe?
                </h2>
                <p className="text-white text-lg mb-8 max-w-xl mx-auto leading-relaxed drop-shadow-md">
                  List your restaurant or shop on FastServe and reach more customers. Join our growing network of
                  partners today.
                </p>
                <button className="bg-[#FF8B00] hover:bg-[#E07A00] text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service

