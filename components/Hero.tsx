"use client"

import { useEffect, useState } from "react"
import Badge from "./Badge"
import LinkGroup from "./LinkGroup"
import Image from "next/image"
import plate from "../public/plate.svg"
import { motion } from "framer-motion"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-[rgba(107,145,66,0.1)] overflow-hidden" aria-label="Hero section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 min-h-[90vh] flex flex-col lg:flex-row items-center justify-between relative">
        {/* Badge Positioned at Top-Right */}
        {/* <div className="absolute top-10 right-10 z-10">
          <Badge />
        </div> */}

        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-[#396C03] text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="block mb-2">Order food online</span>
            <span className="block mb-2">from your favorite</span>
            <span className="block relative">
              local restaurants
              <span className="absolute -bottom-2 left-0 lg:left-0 w-24 h-1 bg-[#FF8B00] rounded-full"></span>
            </span>
          </h1>

          <p className="text-[#676767] text-lg md:text-xl mt-6 max-w-lg mx-auto lg:mx-0">
            Freshly made food delivered to your door.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <LinkGroup />
          </div>

          <div className="hidden lg:flex mt-12 gap-6">
            <div className="flex items-center">
              <div className="bg-[#396C03] rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="ml-2 text-[#676767]">Fast delivery</span>
            </div>
            <div className="flex items-center">
              <div className="bg-[#396C03] rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="ml-2 text-[#676767]">Easy payment</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image with Animation */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -z-10 w-[400px] h-[400px] rounded-full border-2 border-dashed border-[#396C03]/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -z-10 w-[300px] h-[300px] rounded-full border-2 border-dashed border-[#396C03]/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Main image with shadow */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[80%] h-[20px] bg-black/10 rounded-full blur-md"></div>
              <Image
                src={plate || "/placeholder.svg"}
                alt="Delicious food plate"
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Mobile features section */}
        <div className="lg:hidden w-full flex justify-center gap-6 mt-8">
          <div className="flex items-center">
            <div className="bg-[#396C03] rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="ml-2 text-[#676767]">Fast delivery</span>
          </div>
          <div className="flex items-center">
            <div className="bg-[#396C03] rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="ml-2 text-[#676767]">Easy payment</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

