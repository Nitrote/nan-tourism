"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/useTranslation";
import type { TranslationKey } from "@/lib/translations";

type Place = {
  id: string;
  name: string;
  nameTh: string;
  slug: string;
  description: string;
  descriptionTh: string;
  coverImage: string;
  category: string;
  address: string;
  addressTh: string;
};

const categoryIcons: Record<string, string> = {
  temple: "🏛️", nature: "🌿", culture: "🎭", food: "🍜", attraction: "📍",
};

export default function PlacesPage() {
  const { t, localizedField } = useTranslation();
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    fetch("/api/places-list")
      .then((r) => r.json())
      .then(setPlaces);
  }, []);

  const categories = [...new Set(places.map((p) => p.category))];

  return (
    <div>
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t("places.title")}</h1>
          <p className="text-green-100 text-lg max-w-2xl">{t("places.subtitle")}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>{categoryIcons[category] || "📍"}</span>
              {t(`category.${category}` as TranslationKey)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {places.filter((p) => p.category === category).map((place) => (
                <Link key={place.id} href={`/places/${place.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow h-full">
                    <div className="relative h-40 bg-gray-100 flex items-center justify-center">
                      {place.coverImage ? (
                        <Image src={place.coverImage} alt={localizedField(place, "name")} fill className="object-cover" />
                      ) : (
                        <span className="text-5xl group-hover:scale-110 transition-transform">{categoryIcons[place.category] || "📍"}</span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg group-hover:text-[var(--color-primary)] transition-colors">
                        {localizedField(place, "name")}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-3">{localizedField(place, "description")}</p>
                      {place.address && (
                        <p className="text-gray-400 text-xs mt-3">📍 {localizedField(place, "address")}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
