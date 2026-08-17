import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import MarketingLayout from "@/components/MarketingLayout";

export default function Home() {
  return (
    <MarketingLayout>
      <Hero />
      <Explore />
      <Service />
      <Faq />
      <CTA />
    </MarketingLayout>
  );
}
