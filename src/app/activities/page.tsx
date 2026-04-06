"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

type Activity = {
  id: string;
  name: string;
  nameTh: string;
  slug: string;
  description: string;
  descriptionTh: string;
  coverImage: string;
  address: string;
  addressTh: string;
};

export default function ActivitiesPage() {
  const { t, localizedField } = useTranslation();
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch("/api/activities")
      .then((r) => r.json())
      .then(setActivities);
  }, []);

  return (
    <div className="bg-[var(--color-warm)]">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden pt-16">
        <Image
          src="/images/village-placeholder.webp"
          alt="Activities in Nan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        <div className="relative max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-amber-200/90 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Experience
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t("activities.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            {t("activities.subtitle")}
          </p>
        </div>
      </section>

      {/* Activity Cards */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {activities.length === 0 ? (
          <p className="text-center text-[var(--color-text-muted)] py-12">
            {t("activities.empty")}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Link
                key={activity.id}
                href={`/activities/${activity.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  {activity.coverImage ? (
                    <Image
                      src={activity.coverImage}
                      alt={localizedField(activity, "name")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <Image
                      src="/images/village-placeholder.webp"
                      alt={localizedField(activity, "name")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </div>
                <div className="p-5">
                  <span className="text-[var(--color-terracotta)] text-xs font-medium tracking-wider uppercase">
                    {t("category.activity")}
                  </span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {localizedField(activity, "name")}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm mt-2 line-clamp-2">
                    {localizedField(activity, "description")}
                  </p>
                  {activity.address && (
                    <p className="text-[var(--color-text-muted)] text-xs mt-3 opacity-60">
                      {localizedField(activity, "address")}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
