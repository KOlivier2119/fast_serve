import Link from "next/link";
import MarketingLayout from "@/components/MarketingLayout";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  Leaf01Icon,
  BoltIcon,
  FavouriteCircleIcon,
  UserGroupIcon,
  Store01Icon,
  StarCircleIcon,
} from "@hugeicons/core-free-icons";

export const metadata = {
  title: "About Us | FastServe",
  description: "The story, values, and people behind FastServe.",
};

const stats: { icon: IconSvgElement; value: string; label: string }[] = [
  { icon: UserGroupIcon, value: "500K+", label: "Customers" },
  { icon: Store01Icon, value: "2,000+", label: "Restaurants" },
  { icon: BoltIcon, value: "20 min", label: "Average delivery" },
  { icon: StarCircleIcon, value: "4.8/5", label: "Rating" },
];

const values: { icon: IconSvgElement; title: string; description: string }[] = [
  {
    icon: BoltIcon,
    title: "Speed",
    description: "Food leaves the pass when the rider is close. Not before. Not twenty minutes after.",
  },
  {
    icon: Leaf01Icon,
    title: "Less waste",
    description: "Packaging that matches the dish. No extra bag for a single box.",
  },
  {
    icon: FavouriteCircleIcon,
    title: "Local kitchens",
    description: "We list restaurants that already cook well. We do not replace them with ghost brands.",
  },
  {
    icon: CheckmarkCircle01Icon,
    title: "A real standard",
    description: "Partners are reviewed for food safety, ticket times, and how the food holds in transit.",
  },
];

const team = [
  {
    name: "Kwizera Olivier",
    role: "Founder & CEO",
    initials: "KO",
    bio: "Started FastServe after one too many cold deliveries. Still takes weekend rider shifts.",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Product",
    initials: "SJ",
    bio: "Owns the order flow — from search to the moment the bag hits the door.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    initials: "MC",
    bio: "Builds dispatch, tracking, and the unglamorous systems that keep tickets moving.",
  },
  {
    name: "Amara Diallo",
    role: "Head of Operations",
    initials: "AD",
    bio: "Works with kitchens and riders on the two-minute pickup window.",
  },
  {
    name: "Priya Patel",
    role: "Marketing",
    initials: "PP",
    bio: "Writes the words you see in the app and keeps the restaurant stories honest.",
  },
  {
    name: "Alex Green",
    role: "Sustainability",
    initials: "AG",
    bio: "Pushes packaging changes that survive soup, rain, and a city compost bin.",
  },
];

const AboutPage = () => {
  return (
    <MarketingLayout>
      <section className="bg-[#396C03] text-white">
        <div className="section-inner max-w-3xl py-14 md:py-16">
          <p className="text-sm font-medium text-white/70">About</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Food that is still hot when it arrives
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            FastServe connects you with kitchens nearby. We started in 2020 because delivery kept
            optimizing for more pins on a map, not for the plate.
          </p>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white">
        <div className="section-inner grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:py-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <HugeiconsIcon icon={stat.icon} size={20} color="#396C03" strokeWidth={2} />
              <p className="mt-3 text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="section-inner grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-medium text-[#FF8B00]">How we work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
              The restaurant cooks. We handle the road.
            </h2>
            <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Partners are local restaurants, not cloud kitchens wearing someone else’s name. If
                a dish does not travel, it does not go on the delivery menu.
              </p>
              <p>
                Dispatch waits on the kitchen, then assigns a rider. That is why the estimate is
                twenty minutes more often than it is forty.
              </p>
            </div>
            <Link
              href="/register"
              className="mt-8 inline-flex rounded-full bg-[#396C03] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2A5102]"
            >
              Create an account
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/blog_restaurant.jpg"
              alt="A restaurant kitchen"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Since 2020</p>
              <p className="text-xs text-gray-500">50+ cities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="section-inner py-16 lg:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">What we refuse to trade away</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => (
              <div key={val.title} className="rounded-2xl bg-white p-6">
                <HugeiconsIcon icon={val.icon} size={22} color="#396C03" strokeWidth={2} />
                <h3 className="mt-4 font-semibold text-gray-900">{val.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-inner py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#FF8B00]">Team</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
              The people who keep the tickets moving
            </h2>
            <p className="mt-3 text-gray-600">
              Small group. Direct owners for product, kitchens, riders, and packaging.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li
                key={member.name}
                className="flex gap-4 rounded-2xl border border-gray-100 p-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#396C03] text-sm font-semibold text-white">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-[#396C03]">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#396C03] text-white">
        <div className="section-inner flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Come eat with us
            </h2>
            <p className="mt-2 max-w-md text-white/75">
              Half a million people already do. The next order can be yours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/register"
              className="rounded-full bg-[#FF8B00] px-6 py-3 text-sm font-semibold text-white hover:bg-[#E07A00]"
            >
              Order now
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default AboutPage;
