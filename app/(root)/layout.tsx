import React, { ReactNode } from "react";

// Layout for (root) routes — Navbar is included per-page to keep it flexible
const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <div className="w-full">{children}</div>;
};

export default layout;
