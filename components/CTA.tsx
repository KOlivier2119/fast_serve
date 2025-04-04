import Link from "next/link"
import { FaGooglePlay, FaApple } from "react-icons/fa"
import Image from "next/image"

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "rgba(255, 139, 0, 0.1)" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#FF8B00]/10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#396C03]/10 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Content Column */}
          <div className="w-full md:w-1/2 max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3F3F3F] mb-4 leading-tight">
              Put us in <span className="text-[#396C03]">your pocket</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Download our app from Google Play or App Store and you don't have to worry about your food anymore. Order
              delicious meals anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store Button */}
              <Link
                href="#"
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <div className="bg-white rounded-full p-1.5 text-black">
                  <FaApple size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
              </Link>

              {/* Google Play Button */}
              <Link
                href="#"
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <div className="bg-white rounded-full p-1.5 text-black">
                  <FaGooglePlay size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-lg font-semibold -mt-1">Google Play</div>
                </div>
              </Link>
            </div>

            {/* Rating indicator */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FF8B00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-bold text-[#3F3F3F]">4.8/5</span> from over 1,000+ reviews
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 relative mr-5">
            <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-[#396C03]/20 to-transparent rounded-3xl transform rotate-3 scale-95 -z-10"></div>
              <div className="bg-white p-3 rounded-3xl shadow-xl">
                <Image
                  src="/foodtime.svg"
                  alt="FastServe Mobile App"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-1/4 -left-6 bg-white rounded-xl shadow-lg p-3 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#396C03] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-xs font-medium">Order Delivered!</div>
              </div>
            </div>

            <div className="absolute bottom-1/4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FF8B00] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-xs font-medium">20 min delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

