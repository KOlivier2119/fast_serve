import ServiceCard from "./ServiceCard";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  KitchenUtensilsIcon,
  NoodlesIcon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";

const Service = () => {
  const data = [
    {
      Icon: KitchenUtensilsIcon,
      title: "Wide selection of restaurants",
      description:
        "We provide all kinds of food. Just feel free to pick what you like.",
    },
    {
      Icon: NoodlesIcon,
      title: "Easy ordering process",
      description:
        "Ordering food is easy — you can order anytime, anywhere in just a few taps.",
    },
    {
      Icon: Clock01Icon,
      title: "Fast delivery within 20 min",
      description:
        "Fast delivery is our priority. Our agents can reach you easily and on time.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="section-inner">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#396C03]/10 text-[#396C03] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
            Everything you need for a seamless food delivery experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 justify-items-center">
          {data.map((item, index) => (
            <ServiceCard
              key={index}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Promotional banner */}
        <div className="w-full">
          <div className="relative rounded-3xl overflow-hidden bg-[#396C03]">
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#FF8B00]/10 -translate-x-1/4 translate-y-1/3 pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-center gap-0">
              {/* Left: Text content */}
              <div className="flex-1 p-10 md:p-14 lg:p-16 text-center lg:text-left z-10">
                <span className="inline-block bg-[#FF8B00]/20 text-[#FF8B00] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                  Partner with us
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white leading-tight tracking-tight">
                  Want to be a part<br className="hidden md:block" /> of FastServe?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  List your restaurant on FastServe and reach thousands of hungry
                  customers. Join our growing network of partners today.
                </p>
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 justify-center lg:justify-start">
                  <button className="bg-[#FF8B00] hover:bg-[#e07a00] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                    Get started
                  </button>
                  <button className="text-white/80 hover:text-white font-medium px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 text-base">
                    Learn more
                  </button>
                </div>

                {/* Stats row */}
                <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 pt-8 border-t border-white/10">
                  {[
                    { value: "2,000+", label: "Partner restaurants" },
                    { value: "500K+", label: "Happy customers" },
                    { value: "20 min", label: "Avg. delivery" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-white/60 text-sm mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:w-[420px] xl:w-[480px] flex-shrink-0 self-end">
                <img
                  src="/chef.svg"
                  alt="Chef preparing food"
                  className="w-full h-auto object-cover object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
