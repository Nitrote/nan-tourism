"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

type Place = {
  id: string;
  name: string;
  nameTh: string;
  slug: string;
  description: string;
  descriptionTh: string;
  coverImage: string;
  category: string;
  latitude: number | null;
  longitude: number | null;
  address: string;
  addressTh: string;
};

export default function PlaceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, localizedField } = useTranslation();
  const [place, setPlace] = useState<Place | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/places-list/${slug}`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then(setPlace)
      .catch(() => setPlace(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-warm)]"><p className="text-[var(--color-text-muted)]">Loading...</p></div>;
  if (!place) return <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-warm)]"><p className="text-[var(--color-text-muted)]">Place not found.</p></div>;

  return (
    <div className="bg-[var(--color-warm)]">
      {/* Immersive Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-16">
        {place.coverImage ? (
          <Image src={place.coverImage} alt={localizedField(place, "name")} fill className="object-cover" />
        ) : (
          <Image src="/images/village-placeholder.webp" alt={localizedField(place, "name")} fill className="object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-[var(--color-forest-dark)]/10 mix-blend-multiply" />

        <div className="relative max-w-4xl mx-auto px-6 pb-14 w-full">
          <Link href="/places" className="text-white/60 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
            &larr; {t("places.backToPlaces")}
          </Link>
          <span className="inline-block bg-[var(--color-forest)] text-white text-xs font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-3">
            {place.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            {localizedField(place, "name")}
          </h1>
          {place.address && (
            <p className="text-white/60 text-sm flex items-center gap-1.5">
              {localizedField(place, "address")}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[var(--color-text-muted)] leading-relaxed text-lg whitespace-pre-line">
          {localizedField(place, "description")}
        </p>

        {place.latitude && place.longitude && (
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border-l-4 border-[var(--color-forest)]">
            <p className="text-[var(--color-forest)] text-sm tracking-[0.2em] uppercase font-medium mb-2">
              Location
            </p>
            <h3 className="font-bold text-lg mb-4">{t("places.location")}</h3>
            <a
              href={`https://www.google.com/maps?q=${place.latitude},${place.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-forest)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--color-forest-light)] transition-colors text-sm"
            >
              {t("places.openMaps")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
