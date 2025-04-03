"use client"

import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa6"
import Image from "next/image"
import bicycle from "../public/biker.svg"
import { motion } from "framer-motion"

const Explore = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const elementPosition = document.getElementById("explore-section")?.offsetTop || 0

      if (scrollPosition > elementPosition) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="explore-section"
      className="bg-[rgba(255,139,0,0.05)] py-16 md:py-24 overflow-hidden"
      aria-label="Explore food section"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-lg">
              <div className="inline-block bg-[#FF8B00]/20 px-3 py-1 rounded-full text-[#FF8B00] text-sm font-medium mb-4">
                Local Favorites
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#396C03] mb-6 leading-tight">
                Explore your favorite city's food.
              </h2>

              <div className="space-y-4 text-[#676767] text-lg">
                <p>
                  We provide different kind of popular dishes from different countries and they are prepared and served
                  by their country natives.
                </p>
                <p>Join us to enjoy these beautiful dishes together.</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF8B00]/20 flex items-center justify-center text-[#FF8B00]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Fast delivery within 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF8B00]/20 flex items-center justify-center text-[#FF8B00]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">100% secure checkout</span>
                </div>
              </div>

              <button className="mt-8 py-3.5 px-7 bg-[#396C03] rounded-full flex items-center gap-3 text-white font-medium transition-all duration-300 hover:bg-[#2e5802] hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 group">
                Explore
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Background elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#FF8B00]/10 rounded-full -z-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] border-2 border-dashed border-[#FF8B00]/30 rounded-full -z-10 animate-spin-slow"></div>

              {/* Main image */}
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Image
                    src={bicycle || "/placeholder.svg"}
                    width={500}
                    height={500}
                    alt="Food delivery cyclist"
                    className="max-w-full h-auto"
                  />
                </motion.div>

                {/* Shadow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[20px] bg-black/10 rounded-full blur-md"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Explore

