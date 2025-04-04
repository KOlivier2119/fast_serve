import type React from "react";

interface Props {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ Icon, title, description }: Props) => {
  return (
    <div className="group w-full max-w-sm">
      <div
        className="relative overflow-hidden rounded-xl p-6 shadow-md transition-all duration-300 
                  hover:shadow-xl hover:translate-y-[-5px] bg-white border border-[#396C03]/10"
      >
        {/* Background decoration */}
        <div
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#396C03]/5 transition-transform duration-500 
                      group-hover:scale-150"
        ></div>

        {/* Content container */}
        <div className="relative z-10">
          {/* Icon container */}
          <div className="mb-5 inline-flex rounded-full bg-[#396C03]/10 p-3 text-[#396C03]">
            <Icon className="h-8 w-8" />
          </div>

          {/* Title with bottom border effect */}
          <h3 className="relative mb-4 text-xl font-bold text-[#3F3F3F] group-hover:text-[#396C03] transition-colors duration-300">
            {title}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#396C03] transition-all duration-300 group-hover:w-16"></span>
          </h3>

          {/* Description with improved readability */}
          <p className="text-[#676767] leading-relaxed">{description}</p>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#396C03] transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
