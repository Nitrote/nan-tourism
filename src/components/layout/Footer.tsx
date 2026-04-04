"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-3">Discover Nan</h3>
            <p className="text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{t("footer.explore")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/places" className="hover:text-white transition-colors">{t("nav.places")}</Link></li>
              <li><Link href="/activities" className="hover:text-white transition-colors">{t("nav.activities")}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">{t("nav.blog")}</Link></li>
              <li><Link href="/travel-info" className="hover:text-white transition-colors">{t("nav.travelInfo")}</Link></li>
              <li><Link href="/tours" className="hover:text-white transition-colors">{t("nav.tours")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm">
              <li>{t("contact.info.locationValue")}</li>
              <li>info@discovernan.com</li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("contact.form.title")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Discover Nan. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
