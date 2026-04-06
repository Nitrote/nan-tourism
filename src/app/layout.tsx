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
    default: "Way Back Home — เยือนบ้านเฮา | South of Nan, Thailand",
    template: "%s | Way Back Home",
  },
  description:
    "An immersive journey in the South of Nan, experiencing the local lived experience. อยากให้รู้สึกเหมือนตอนเด็กที่เราโตมา",
  keywords: [
    "Nan Thailand",
    "South of Nan",
    "Way Back Home",
    "เยือนบ้านเฮา",
    "Nan tourism",
    "northern Thailand",
    "Doi Phu Kha",
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
