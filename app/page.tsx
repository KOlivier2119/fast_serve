import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Explore />
      <Service />
      <Faq />
    </div>
  );
}
