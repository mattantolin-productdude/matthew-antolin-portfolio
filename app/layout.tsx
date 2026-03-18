import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/app/components/Nav";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Matthew Antolin - Product Director",
  description:
    "Product Director specializing in regulated enterprise SaaS: healthcare, pharma, and life sciences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable}`}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
