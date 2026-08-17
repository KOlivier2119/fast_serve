"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="w-full rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
