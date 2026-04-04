"use client";

import Link from "next/link";
import Image from "next/image";
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
    <div className="bg-[var(--color-warm)]">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden pt-16">
        <Image
          src="/images/village-placeholder.webp"
          alt="Tours in Nan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        <div className="relative max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-amber-200/90 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Curated Experiences
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t("tours.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            {t("tours.subtitle")}
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase font-medium mb-2">
            Packages
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">{t("tours.packages")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tourPackages.map((tour) => (
            <div
              key={tour.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-[var(--color-warm-dark)] to-[var(--color-warm)] h-36 flex items-center justify-center">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {tour.icon}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-xl">{tour.title}</h3>
                  <span className="text-xs font-medium text-[var(--color-terracotta)] bg-[var(--color-terracotta)]/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {tour.duration}
                  </span>
                </div>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                  {tour.description}
                </p>
                <ul className="space-y-2">
                  {tour.highlights.map((h) => (
                    <li key={h} className="text-sm text-[var(--color-text)] flex items-center gap-2">
                      <span className="text-[var(--color-primary)] text-xs">&#10003;</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Section */}
      <section className="bg-[var(--color-warm-dark)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Partnership
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("tours.business.title")}</h2>
            <p className="text-[var(--color-text-muted)] mb-8 text-lg leading-relaxed">
              {t("tours.business.desc")}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-primary)] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[var(--color-primary-light)] transition-colors"
            >
              {t("tours.business.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary-dark)]" />
        <Image
          src="/images/village-placeholder.webp"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-200/80 text-sm tracking-[0.25em] uppercase font-medium mb-4">
            Ready to explore?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
            {t("tours.cta.title")}
          </h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("tours.cta.desc")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[var(--color-accent-light)] transition-all hover:shadow-lg"
          >
            {t("tours.cta.contact")}
          </Link>
        </div>
      </section>
    </div>
  );
}
