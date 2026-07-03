import type { Metadata } from "next";
import { Merienda, Roboto } from "next/font/google";
import "./globals.css";

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "FastServe — Order Food Online",
  description:
    "FastServe delivers freshly made food from your favorite local restaurants right to your door. Fast delivery, easy payment, and thousands of restaurants.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merienda.variable} ${roboto.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
