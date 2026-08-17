"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthNav = ({ variant }: { variant: "desktop" | "mobile" }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (session?.user) {
    const name = session.user.name?.split(" ")[0] ?? "Account";
    if (variant === "desktop") {
      return (
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/profile"
            className="text-sm font-semibold text-white/90 hover:text-white px-4 py-2 rounded-lg"
          >
            Hi, {name}
          </Link>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-sm font-semibold bg-white/15 text-white hover:bg-white/25 px-5 py-2 rounded-full"
          >
            Sign out
          </button>
        </div>
      );
    }
    return (
      <div className="space-y-3">
        <Link
          href="/profile"
          className="flex items-center justify-center w-full px-4 py-3 rounded-xl border-2 border-[#396C03] text-[#396C03] font-semibold text-sm"
        >
          Profile
        </Link>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-[#FF8B00] text-white font-semibold text-sm"
        >
          Sign out
        </button>
      </div>
    );
  }

  if (variant === "desktop") {
    return (
      <div className="hidden md:flex items-center gap-2">
        <Link
          href="/login"
          className="text-sm font-semibold text-white/90 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="text-sm font-semibold bg-[#FF8B00] text-white hover:bg-[#E07A00] px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Get Started
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Link
        href="/login"
        className="flex items-center justify-center w-full px-4 py-3 rounded-xl border-2 border-[#396C03] text-[#396C03] font-semibold text-sm hover:bg-[#396C03]/5 transition-colors duration-200"
      >
        Sign In
      </Link>
      <Link
        href="/register"
        className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-[#FF8B00] text-white font-semibold text-sm hover:bg-[#E07A00] transition-colors duration-200 shadow-sm"
      >
        Get Started
      </Link>
    </div>
  );
};

export default AuthNav;
