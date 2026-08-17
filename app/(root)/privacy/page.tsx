import type { Metadata } from "next";
import Link from "next/link";
import MarketingLayout from "@/components/MarketingLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | FastServe",
  description: "Learn how FastServe collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly, such as your name, email, phone number, delivery address, and payment details. We also collect usage data including order history, device information, and location data when you use our app.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use your information to process orders, facilitate delivery, provide customer support, improve our services, send transactional communications, and — with your consent — marketing messages about promotions and new features.",
  },
  {
    title: "3. Information Sharing",
    content:
      "We share necessary order details with restaurants and delivery partners to fulfill your orders. We may share data with payment processors, analytics providers, and legal authorities when required by law. We do not sell your personal information.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement industry-standard security measures including encryption in transit and at rest, access controls, and regular security audits. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Cookies and Tracking",
    content:
      "Our website uses cookies and similar technologies to remember preferences, analyze traffic, and improve user experience. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "6. Your Rights",
    content:
      "Depending on your location, you may have the right to access, correct, delete, or export your personal data, and to opt out of certain processing. Contact us at privacy@fastserve.com to exercise these rights.",
  },
  {
    title: "7. Data Retention",
    content:
      "We retain your information for as long as your account is active or as needed to provide services, comply with legal obligations, resolve disputes, and enforce our agreements.",
  },
  {
    title: "8. Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically. We will notify you of material changes via email or a prominent notice on our platform. Your continued use after changes constitutes acceptance.",
  },
];

export default function PrivacyPage() {
  return (
    <MarketingLayout>
      <section className="relative pt-16 pb-12 bg-[#396C03] text-white">
        <div className="section-inner relative text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/85">Last updated: August 17, 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16 bg-white">
        <div className="section-inner max-w-3xl">
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            FastServe is committed to protecting your privacy. This policy explains how we handle your personal information.
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
              For privacy-related inquiries, email{" "}
              <a href="mailto:privacy@fastserve.com" className="text-[#396C03] font-medium hover:underline">
                privacy@fastserve.com
              </a>
              {" "}or visit our{" "}
              <Link href="/contact" className="text-[#396C03] font-medium hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
