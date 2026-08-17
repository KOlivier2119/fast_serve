import type { Metadata } from "next";
import MarketingLayout from "@/components/MarketingLayout";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  Call02Icon,
  Clock01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Contact Us | FastServe",
  description: "Support, partnerships, and press — get in touch with FastServe.",
};

const details = [
  {
    icon: Mail01Icon,
    label: "Email",
    value: "support@fastserve.com",
    href: "mailto:support@fastserve.com",
  },
  {
    icon: Call02Icon,
    label: "Phone",
    value: "+1 (800) 555-1234",
    href: "tel:+18005551234",
  },
  {
    icon: Clock01Icon,
    label: "Hours",
    value: "Mon–Fri 8am–10pm · Sat–Sun 9am–8pm",
  },
  {
    icon: Location01Icon,
    label: "Office",
    value: "123 Delivery Lane, San Francisco, CA 94102",
  },
];

export default function ContactPage() {
  return (
    <MarketingLayout>
      <section className="bg-[#396C03] text-white">
        <div className="section-inner max-w-3xl py-14 md:py-16">
          <p className="text-sm font-medium text-white/70">Contact</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            How can we help?
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Orders, restaurant partnerships, or press. We answer within a business day.
            If food is late right now, call.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="section-inner grid gap-10 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-16">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Direct lines</h2>
            <ul className="mt-6 space-y-3">
              {details.map((item) => (
                <li key={item.label} className="flex gap-4 rounded-2xl bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#396C03]/10">
                    <HugeiconsIcon icon={item.icon} size={18} color="#396C03" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block font-medium text-gray-900 hover:text-[#396C03]">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-gray-900">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-900">Send a message</h2>
            <p className="mt-1 text-sm text-gray-500">
              For anything that can wait until morning.
            </p>
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-shadow focus:border-[#396C03] focus:ring-2 focus:ring-[#396C03]/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-shadow focus:border-[#396C03] focus:ring-2 focus:ring-[#396C03]/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Topic
                </label>
                <select
                  id="subject"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#396C03] focus:ring-2 focus:ring-[#396C03]/20"
                >
                  <option>Order support</option>
                  <option>Restaurant partnership</option>
                  <option>Press</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#396C03] focus:ring-2 focus:ring-[#396C03]/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#396C03] py-3 text-sm font-semibold text-white hover:bg-[#2A5102] sm:w-auto sm:px-8"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
