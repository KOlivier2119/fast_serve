import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
