import type { Metadata } from "next";
import Link from "next/link";
import MarketingLayout from "@/components/MarketingLayout";

export const metadata: Metadata = {
  title: "Terms of Service | FastServe",
  description: "Read the FastServe Terms of Service governing use of our food delivery platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using FastServe's website, mobile application, or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Service Description",
    content:
      "FastServe provides an online platform connecting customers with local restaurants and independent delivery partners. We facilitate ordering and delivery but are not the seller of food items unless explicitly stated.",
  },
  {
    title: "3. User Accounts",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate information when creating an account and notify us immediately of any unauthorized use.",
  },
  {
    title: "4. Orders and Payments",
    content:
      "All orders placed through FastServe are subject to restaurant availability and acceptance. Prices, fees, and taxes are displayed at checkout. Payment is processed at the time of order unless otherwise specified.",
  },
  {
    title: "5. Cancellations and Refunds",
    content:
      "Cancellation policies vary by restaurant and order status. Refunds for undelivered or incorrect orders may be issued at our discretion. Contact support within 24 hours of delivery for order-related issues.",
  },
  {
    title: "6. Prohibited Conduct",
    content:
      "You may not misuse our platform, harass delivery partners or restaurant staff, submit fraudulent orders, or attempt to circumvent our payment systems. Violations may result in account suspension or termination.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "FastServe is not liable for indirect, incidental, or consequential damages arising from use of our services. Our total liability for any claim shall not exceed the amount paid for the relevant order.",
  },
  {
    title: "8. Changes to Terms",
    content:
      "We may update these Terms of Service from time to time. Continued use of FastServe after changes constitutes acceptance of the updated terms. We will notify users of material changes via email or in-app notice.",
  },
];

export default function TermsPage() {
  return (
    <MarketingLayout>
      <section className="relative pt-16 pb-12 bg-[#396C03] text-white">
        <div className="section-inner relative text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/85">Last updated: August 17, 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16 bg-white">
        <div className="section-inner max-w-3xl">
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            These Terms of Service govern your use of FastServe. Please read them carefully before using our platform.
          </p>
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Questions about these terms?{" "}
              <Link href="/contact" className="text-[#396C03] font-medium hover:underline">
                Contact us
              </Link>
              {" "}or review our{" "}
              <Link href="/privacy" className="text-[#396C03] font-medium hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
