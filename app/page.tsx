import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Service from "@/components/Service";

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Explore />
      <Service />
    </div>
  );
}
