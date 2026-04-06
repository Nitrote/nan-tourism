"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span
                className={`text-xl font-bold tracking-tight transition-colors ${
                  scrolled ? "text-[var(--color-sky-dark)]" : "text-white"
                }`}
              >
                {lang === "th" ? "เยือนบ้านเฮา" : "Way Back Home"}
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-[var(--color-text-muted)] hover:text-[var(--color-forest)] hover:bg-[var(--color-sky-tint)]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className={`ml-2 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                scrolled
                  ? "border-[var(--color-forest)] text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-white"
                  : "border-white/50 text-white hover:bg-white/10"
              }`}
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                scrolled
                  ? "border-[var(--color-forest)] text-[var(--color-forest)]"
                  : "border-white/50 text-white"
              }`}
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? "text-[var(--color-text)]" : "text-white"
              }`}
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

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[var(--color-text-muted)] hover:text-[var(--color-forest)] hover:bg-[var(--color-warm)]"
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
