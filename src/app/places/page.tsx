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
    <div className="bg-[var(--color-warm)]">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden pt-16">
        <Image
          src="/images/village-placeholder.webp"
          alt="Places in Nan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        <div className="relative max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-amber-200/90 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Explore
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t("places.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            {t("places.subtitle")}
          </p>
        </div>
      </section>

      {/* Category Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <div className="mb-8">
              <span className="inline-block bg-[var(--color-primary)] text-white text-sm tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-full mb-2">
                {t(`category.${category}` as TranslationKey)}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                {t(`category.${category}` as TranslationKey)}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {places.filter((p) => p.category === category).map((place, i) => {
                const isLarge = i === 0;
                return (
                  <Link
                    key={place.id}
                    href={`/places/${place.slug}`}
                    className={`group relative overflow-hidden rounded-2xl ${
                      isLarge ? "md:col-span-7 h-72 md:h-80" : "md:col-span-5 h-64"
                    }`}
                  >
                    {place.coverImage ? (
                      <Image
                        src={place.coverImage}
                        alt={localizedField(place, "name")}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <Image
                        src="/images/village-placeholder.webp"
                        alt={localizedField(place, "name")}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mt-1 group-hover:translate-x-1 transition-transform duration-300">
                        {localizedField(place, "name")}
                      </h3>
                      <p className="text-white/70 text-sm mt-1 line-clamp-2 max-w-md">
                        {localizedField(place, "description")}
                      </p>
                      {place.address && (
                        <p className="text-white/50 text-xs mt-2">
                          {localizedField(place, "address")}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
