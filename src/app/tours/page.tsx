"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

export default function ToursPage() {
  const { t, lang } = useTranslation();

  const tourPackages = [
    {
      title: lang === "th" ? "ทัวร์วัดในเมืองน่าน" : "Nan City Temple Tour",
      duration: lang === "th" ? "ครึ่งวัน (4 ชั่วโมง)" : "Half Day (4 hours)",
      description: lang === "th"
        ? "เยี่ยมชมวัดที่มีชื่อเสียงที่สุดของน่าน รวมถึงวัดภูมินทร์ วัดพระธาตุช้างค้ำ และพิพิธภัณฑ์แห่งชาติน่าน"
        : "Visit Nan's most iconic temples including Wat Phumin, Wat Phra That Chang Kham, and the Nan National Museum.",
      highlights: lang === "th"
        ? ["วัดภูมินทร์และจิตรกรรมฝาผนัง", "พิพิธภัณฑ์แห่งชาติน่าน", "เดินชมเมืองเก่า", "รวมอาหารกลางวัน"]
        : ["Wat Phumin & its famous murals", "Nan National Museum", "Walking tour of old town", "Local lunch included"],
      icon: "🏛️",
    },
    {
      title: lang === "th" ? "ผจญภัยดอยภูคา" : "Doi Phu Kha Adventure",
      duration: lang === "th" ? "เต็มวัน (8 ชั่วโมง)" : "Full Day (8 hours)",
      description: lang === "th"
        ? "สำรวจอุทยานแห่งชาติดอยภูคาอันงดงาม พร้อมเดินป่า จุดชมวิว และเยี่ยมชมต้นชมพูภูคา"
        : "Explore the stunning Doi Phu Kha National Park with guided trekking, scenic viewpoints, and rare Chomphu Phu Kha trees.",
      highlights: lang === "th"
        ? ["เดินป่าอุทยานแห่งชาติ", "จุดชมวิวบนภูเขา", "เยี่ยมชมน้ำตก", "อาหารและรถรับส่ง"]
        : ["National park trekking", "Scenic mountain viewpoints", "Waterfall visits", "Packed lunch & transport"],
      icon: "⛰️",
    },
    {
      title: lang === "th" ? "ประสบการณ์วัฒนธรรมบ่อเกลือ" : "Bo Kluea Cultural Experience",
      duration: lang === "th" ? "เต็มวัน (8 ชั่วโมง)" : "Full Day (8 hours)",
      description: lang === "th"
        ? "เดินทางสู่หมู่บ้านเกลือโบราณบ่อเกลือ เรียนรู้การทำเกลือแบบดั้งเดิม เยี่ยมชมชุมชน และสำรวจทิวทัศน์ภูเขา"
        : "Journey to the ancient salt village of Bo Kluea, learn traditional salt-harvesting techniques, visit local communities.",
      highlights: lang === "th"
        ? ["บ่อเกลือโบราณ", "เยี่ยมชมหมู่บ้าน", "ทิวทัศน์ภูเขา", "อาหารท้องถิ่น"]
        : ["Traditional salt wells", "Local village visits", "Mountain scenery drive", "Authentic local meals"],
      icon: "🧂",
    },
    {
      title: lang === "th" ? "แผนท่องเที่ยวน่านแบบกำหนดเอง" : "Custom Nan Itinerary",
      duration: lang === "th" ? "1-7 วัน" : "1-7 Days",
      description: lang === "th"
        ? "ให้เราออกแบบประสบการณ์น่านที่สมบูรณ์แบบ บอกความสนใจ วันเดินทาง และงบประมาณ แล้วเราจะสร้างแผนเที่ยวเฉพาะสำหรับคุณ"
        : "Let us design your perfect Nan experience. Tell us your interests, dates, and budget for a personalized itinerary.",
      highlights: lang === "th"
        ? ["วางแผนเฉพาะบุคคล", "ความรู้จากคนในพื้นที่", "ช่วยจองที่พัก", "ซัพพอร์ตตลอดทริป"]
        : ["Personalized planning", "Local insider knowledge", "Accommodation booking help", "24/7 trip support"],
      icon: "🗺️",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t("tours.title")}</h1>
          <p className="text-green-100 text-lg max-w-2xl">{t("tours.subtitle")}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">{t("tours.packages")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourPackages.map((tour) => (
            <div key={tour.title} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-green-50 h-32 flex items-center justify-center text-5xl">{tour.icon}</div>
              <div className="p-6">
                <h3 className="font-bold text-xl">{tour.title}</h3>
                <span className="text-sm text-[var(--color-primary)] font-medium">{tour.duration}</span>
                <p className="text-gray-600 mt-3 text-sm">{tour.description}</p>
                <ul className="mt-4 space-y-1">
                  {tour.highlights.map((h) => (
                    <li key={h} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">{t("tours.business.title")}</h2>
            <p className="text-gray-600 mb-8">{t("tours.business.desc")}</p>
            <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
              {t("tours.business.cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("tours.cta.title")}</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">{t("tours.cta.desc")}</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-[var(--color-accent-light)] transition-colors">
            {t("tours.cta.contact")}
          </Link>
        </div>
      </section>
    </div>
  );
}
