"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

type Activity = {
  id: string;
  name: string;
  nameTh: string;
  slug: string;
  description: string;
  descriptionTh: string;
  coverImage: string;
  latitude: number | null;
  longitude: number | null;
  address: string;
  addressTh: string;
};

export default function ActivityDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, localizedField } = useTranslation();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/activities/${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then(setActivity)
      .catch(() => setActivity(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-warm)]">
        <p className="text-[var(--color-text-muted)]">Loading...</p>
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-warm)]">
        <p className="text-[var(--color-text-muted)]">Activity not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-warm)]">
      {/* Immersive Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-16">
        {activity.coverImage ? (
          <Image src={activity.coverImage} alt={localizedField(activity, "name")} fill className="object-cover" />
        ) : (
          <Image src="/images/village-placeholder.webp" alt={localizedField(activity, "name")} fill className="object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        <div className="relative max-w-4xl mx-auto px-6 pb-14 w-full">
          <Link href="/activities" className="text-white/60 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
            &larr; {t("activities.backToActivities")}
          </Link>
          <span className="block text-[var(--color-accent)] text-xs font-medium tracking-[0.2em] uppercase mb-3">
            {t("category.activity")}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            {localizedField(activity, "name")}
          </h1>
          {activity.address && (
            <p className="text-white/60 text-sm flex items-center gap-1.5">
              {localizedField(activity, "address")}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[var(--color-text-muted)] leading-relaxed text-lg whitespace-pre-line">
          {localizedField(activity, "description")}
        </p>

        {activity.latitude && activity.longitude && (
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase font-medium mb-2">
              Location
            </p>
            <h3 className="font-bold text-lg mb-4">{t("places.location")}</h3>
            <a
              href={`https://www.google.com/maps?q=${activity.latitude},${activity.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--color-primary-light)] transition-colors text-sm"
            >
              {t("places.openMaps")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
