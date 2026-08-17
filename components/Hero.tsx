"use client";

import Image from "next/image";
import plate from "../public/plate.svg";
import LinkGroup from "./LinkGroup";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

const Hero = () => {
  return (
    <section
      className="relative bg-[#396C03] overflow-hidden"
      aria-label="Hero section"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#FF8B00]/10" />

      <div className="section-inner relative grid grid-cols-1 items-center gap-6 py-10 md:h-[calc(100dvh-68px)] md:min-h-[520px] md:max-h-[860px] md:grid-cols-2 md:gap-10 md:py-10 lg:gap-16">
        <div className="text-center md:text-left">
          <p className="mb-4 text-sm font-medium text-white/80">
            Delivery in 20 minutes
          </p>

          <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            Food from your
            <br />
            favorite restaurants,
            <br />
            <span className="text-[#FF8B00]">delivered fast</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/75 md:mx-0 md:mt-5 md:text-lg">
            Browse local menus and get a hot meal at your door in under 30 minutes.
          </p>

          <div className="mt-6 flex justify-center md:mt-8 md:justify-start">
            <LinkGroup />
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 md:justify-start">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((s) => (
                <HugeiconsIcon
                  key={s}
                  icon={StarIcon}
                  size={14}
                  color="#FF8B00"
                  strokeWidth={0}
                  className="fill-[#FF8B00]"
                />
              ))}
            </div>
            <p className="text-sm text-white/70">
              <span className="font-medium text-white">4.8</span>
              {" "}from 1,000+ reviews
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex h-44 w-full max-w-[280px] items-center justify-center sm:h-56 sm:max-w-[320px] md:h-full md:max-h-[min(520px,70dvh)] md:max-w-[420px]">
          <Image
            src={plate}
            alt="A plated meal ready for delivery"
            className="h-full w-auto max-h-full object-contain drop-shadow-2xl"
            priority
          />

          <div className="absolute bottom-2 left-0 hidden rounded-xl bg-white px-3 py-2 shadow-lg sm:flex items-center gap-2.5 md:bottom-6 md:-left-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#396C03]/10 text-[#396C03]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <p className="text-[11px] leading-none text-gray-500">Status</p>
              <p className="mt-0.5 text-sm font-semibold text-gray-900">Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
