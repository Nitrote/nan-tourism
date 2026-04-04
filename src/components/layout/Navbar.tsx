"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/lib/useTranslation";

const navLinks = [
  { href: "/", key: "nav.home" as const },
  { href: "/about", key: "nav.about" as const },
  { href: "/places", key: "nav.places" as const },
  { href: "/activities", key: "nav.activities" as const },
  { href: "/blog", key: "nav.blog" as const },
  { href: "/travel-info", key: "nav.travelInfo" as const },
  { href: "/tours", key: "nav.tours" as const },
  { href: "/contact", key: "nav.contact" as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[var(--color-primary)]">
                {lang === "th" ? "ค้นพบน่าน" : "Discover Nan"}
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-green-50 transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-1.5 rounded-full text-sm font-bold border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-full text-xs font-bold border-2 border-[var(--color-primary)] text-[var(--color-primary)]"
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-green-50"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
