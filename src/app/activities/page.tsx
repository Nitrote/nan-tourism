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
    <div>
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t("activities.title")}</h1>
          <p className="text-green-100 text-lg max-w-2xl">
            {t("activities.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activities.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            {t("activities.empty")}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Link
                key={activity.id}
                href={`/activities/${activity.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    {activity.coverImage ? (
                      <Image
                        src={activity.coverImage}
                        alt={localizedField(activity, "name")}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-5xl">🎯</span>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide">
                      {t("category.activity")}
                    </span>
                    <h3 className="font-bold text-lg mt-1 group-hover:text-[var(--color-primary)] transition-colors">
                      {localizedField(activity, "name")}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                      {localizedField(activity, "description")}
                    </p>
                    {activity.address && (
                      <p className="text-gray-400 text-xs mt-3">
                        📍 {localizedField(activity, "address")}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
