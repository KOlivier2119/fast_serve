"use client";

import { useEffect, useState } from "react";
import LinkGroup from "./LinkGroup";
import Image from "next/image";
import plate from "../public/plate.svg";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative bg-[#396C03] overflow-hidden pt-8"
      aria-label="Hero section"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#FF8B00]/10 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="section-inner min-h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center justify-between gap-10 py-16 lg:py-20 relative">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Fast delivery in your city
          </motion.div>

          {/* Heading */}
          <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Order food online
            <br />
            from your{" "}
            <span className="relative inline-block text-[#FF8B00]">
              favorite
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9 C50 3, 150 3, 198 9"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            <span className="text-[#FF8B00]">local restaurants</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-lg md:text-xl mt-7 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
            Freshly made food delivered to your door. Browse thousands of
            restaurants and get it in{" "}
            <span className="font-semibold text-[#FF8B00]">under 30 minutes</span>.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <LinkGroup />
          </div>

          {/* Social proof + features */}
          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-5">
            {/* Star rating */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <HugeiconsIcon
                    key={s}
                    icon={StarIcon}
                    size={16}
                    color="#FF8B00"
                    strokeWidth={0}
                    className="fill-[#FF8B00]"
                  />
                ))}
              </div>
              <p className="text-sm text-white/70 mt-1">
                <span className="font-semibold text-white">4.8/5</span> · 1,000+ reviews
              </p>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/20" />

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {["Fast delivery", "Easy payment", "500K+ orders"].map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 text-sm text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full shadow-sm font-medium"
                >
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} color="white" strokeWidth={2} />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[480px]">
            {/* Spinning ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full border-[2px] border-dashed border-[#396C03]/15 animate-spin-slow pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full border-[2px] border-dashed border-[#FF8B00]/15 pointer-events-none" />

            {/* Plate image */}
            <div className="relative z-10 drop-shadow-2xl hover:scale-[1.03] transition-transform duration-500">
              <Image
                src={plate}
                alt="Delicious food plate"
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating card — delivery time */}
            <motion.div
              className="absolute top-6 -right-4 md:-right-8 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-9 h-9 rounded-xl bg-[#FF8B00]/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#FF8B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Avg. delivery</p>
                <p className="text-sm font-bold text-gray-800">~20 min</p>
              </div>
            </motion.div>

            {/* Floating card — order delivered */}
            <motion.div
              className="absolute bottom-10 -left-4 md:-left-8 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-9 h-9 rounded-xl bg-[#396C03]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#396C03]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Status</p>
                <p className="text-sm font-bold text-gray-800">Order delivered!</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
