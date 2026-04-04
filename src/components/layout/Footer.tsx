"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--color-primary-dark)] text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Discover Nan</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              {t("footer.explore")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/places" className="hover:text-white transition-colors">{t("nav.places")}</Link></li>
              <li><Link href="/activities" className="hover:text-white transition-colors">{t("nav.activities")}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">{t("nav.blog")}</Link></li>
              <li><Link href="/travel-info" className="hover:text-white transition-colors">{t("nav.travelInfo")}</Link></li>
              <li><Link href="/tours" className="hover:text-white transition-colors">{t("nav.tours")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>{t("contact.info.locationValue")}</li>
              <li>info@discovernan.com</li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("contact.form.title")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Discover Nan. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
