import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MarketingLayout from "@/components/MarketingLayout";
import { authOptions } from "@/lib/auth";
import { findUserByEmail } from "@/lib/users";
import SignOutButton from "@/components/SignOutButton";

export const metadata = {
  title: "Profile | FastServe",
  description: "Your FastServe profile.",
};

const initialsFrom = (name?: string | null, email?: string | null) => {
  const source = name?.trim() || email?.trim() || "U";
  const parts = source.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return source.slice(0, 2).toUpperCase();
};

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const { name, email, image } = session.user;
  let signedInWith = image ? "Google" : "Email";
  try {
    if (email) {
      const stored = await findUserByEmail(email);
      if (stored?.passwordHash) signedInWith = "Email";
      else if (stored?.image || image) signedInWith = "Google";
    }
  } catch {
    // Local file store may be unavailable on Vercel.
  }

  return (
    <MarketingLayout>
      <section className="bg-[#396C03] text-white">
        <div className="section-inner py-12 md:py-14">
          <p className="text-sm font-medium text-white/70">Profile</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {name ?? "Your account"}
          </h1>
          <p className="mt-2 max-w-xl text-white/75">
            This is your space. Writing for the journal will live here later — nothing to publish yet.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="section-inner grid gap-8 py-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:py-16">
          <aside className="h-fit rounded-2xl bg-white p-6">
            <div className="flex flex-col items-center text-center">
              {image ? (
                <Image
                  src={image}
                  alt=""
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#396C03] text-2xl font-semibold text-white">
                  {initialsFrom(name, email)}
                </div>
              )}
              <h2 className="mt-4 text-xl font-semibold text-gray-900">{name}</h2>
              <p className="mt-1 text-sm text-[#396C03]">Writer</p>
              <p className="mt-2 break-all text-sm text-gray-500">{email}</p>
            </div>

            <dl className="mt-8 space-y-4 border-t border-gray-100 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-gray-500">Signed in with</dt>
                <dd className="font-medium text-gray-900">{signedInWith}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-500">Articles</dt>
                <dd className="font-medium text-gray-900">0</dd>
              </div>
            </dl>

            <div className="mt-8">
              <SignOutButton />
            </div>
          </aside>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-900">Your articles</h3>
              <p className="mt-1 text-sm text-gray-500">
                Only you can publish from this account. That tool is not open yet.
              </p>
              <div className="mt-8 rounded-xl border border-dashed border-gray-200 px-6 py-14 text-center">
                <p className="font-medium text-gray-900">No articles yet</p>
                <p className="mt-2 text-sm text-gray-500">
                  When writing is ready, new posts will show up here. Until then, you can read the journal.
                </p>
                <Link
                  href="/blog"
                  className="mt-6 inline-flex rounded-full bg-[#396C03] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2A5102]"
                >
                  Read the journal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
