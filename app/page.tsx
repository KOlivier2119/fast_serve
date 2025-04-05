import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Explore />
      <Service />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}
