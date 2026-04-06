import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Way Back Home — Nan Province, Thailand",
    template: "%s | Way Back Home",
  },
  description:
    "Your complete guide to exploring Nan province, Thailand. Discover temples, nature, culture, and hidden gems in one of northern Thailand's most enchanting destinations.",
  keywords: [
    "Nan Thailand",
    "Nan province",
    "travel Nan",
    "Nan tourism",
    "northern Thailand",
    "Doi Phu Kha",
    "Wat Phumin",
    "Bo Kluea",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-warm)] text-[var(--color-text)]">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
