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

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center"><p className="text-gray-400">Loading...</p></div>;
  if (!place) return <div className="min-h-[60vh] flex items-center justify-center"><p className="text-gray-500">Place not found.</p></div>;

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-16">
        {place.coverImage && (
          <Image src={place.coverImage} alt={localizedField(place, "name")} fill className="object-cover opacity-30" />
        )}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/places" className="text-green-200 hover:text-white text-sm mb-4 inline-block">
            &larr; {t("places.backToPlaces")}
          </Link>
          <span className="block text-xs font-medium text-[var(--color-accent)] uppercase tracking-wide mb-2">{place.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold">{localizedField(place, "name")}</h1>
          {place.address && <p className="text-green-200 mt-2">📍 {localizedField(place, "address")}</p>}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
          {localizedField(place, "description")}
        </p>

        {place.latitude && place.longitude && (
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold mb-2">{t("places.location")}</h3>
            <a
              href={`https://www.google.com/maps?q=${place.latitude},${place.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-primary)] text-white font-medium px-4 py-2 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors text-sm"
            >
              {t("places.openMaps")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
