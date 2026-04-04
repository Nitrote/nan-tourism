"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

type Post = {
  id: string;
  title: string;
  titleTh: string;
  slug: string;
  excerpt: string;
  excerptTh: string;
  coverImage: string;
  category: string;
  createdAt: string;
};

type Place = {
  id: string;
  name: string;
  nameTh: string;
  slug: string;
  description: string;
  descriptionTh: string;
  coverImage: string;
  category: string;
};

export default function HomePage() {
  const { t, localizedField } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);
  const [activities, setActivities] = useState<Place[]>([]);

  useEffect(() => {
    fetch("/api/home-data")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.posts || []);
        setPlaces(data.places || []);
        setActivities(data.activities || []);
      });
  }, []);

  return (
    <div>
      {/* Hero Section with banner image */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        <Image
          src="/images/hero-banner.jpg"
          alt="Nan Province, Thailand"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              {t("home.hero.title")}
              <span className="block text-[var(--color-accent)]">
                {t("home.hero.subtitle")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              {t("home.hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/places"
                className="inline-block bg-[var(--color-accent)] text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-[var(--color-accent-light)] transition-colors"
              >
                {t("home.hero.explorePlaces")}
              </Link>
              <Link
                href="/tours"
                className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                {t("home.hero.bookTour")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: t("home.cards.temples.title"),
              desc: t("home.cards.temples.desc"),
              icon: "🏛️",
            },
            {
              title: t("home.cards.mountains.title"),
              desc: t("home.cards.mountains.desc"),
              icon: "⛰️",
            },
            {
              title: t("home.cards.culture.title"),
              desc: t("home.cards.culture.desc"),
              icon: "🎭",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <span className="text-3xl mb-3 block">{card.icon}</span>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Places */}
      {places.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{t("home.places.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("home.places.desc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {places.map((place) => (
              <Link key={place.id} href={`/places/${place.slug}`} className="group">
                <div className="relative bg-gray-100 rounded-xl h-48 mb-3 overflow-hidden flex items-center justify-center group-hover:shadow-md transition-shadow">
                  {place.coverImage ? (
                    <Image src={place.coverImage} alt={localizedField(place, "name")} fill className="object-cover" />
                  ) : (
                    <span className="text-4xl">
                      {place.category === "temple" ? "🏛️" : place.category === "nature" ? "🌿" : place.category === "culture" ? "🎭" : "📍"}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide">
                  {t(`category.${place.category}` as Parameters<typeof t>[0])}
                </span>
                <h3 className="font-semibold mt-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {localizedField(place, "name")}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {localizedField(place, "description")}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/places" className="text-[var(--color-primary)] font-semibold hover:underline">
              {t("home.places.viewAll")} &rarr;
            </Link>
          </div>
        </section>
      )}

      {/* Activities Section */}
      {activities.length > 0 && (
        <section className="bg-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">{t("home.activities.title")}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t("home.activities.desc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity) => (
                <Link key={activity.id} href={`/activities/${activity.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                      {activity.coverImage ? (
                        <Image src={activity.coverImage} alt={localizedField(activity, "name")} fill className="object-cover" />
                      ) : (
                        <span className="text-5xl">🎯</span>
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium text-[var(--color-primary)] uppercase">{t("category.activity")}</span>
                      <h3 className="font-bold mt-1 group-hover:text-[var(--color-primary)] transition-colors">
                        {localizedField(activity, "name")}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {localizedField(activity, "description")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/activities" className="text-[var(--color-primary)] font-semibold hover:underline">
                {t("home.activities.viewAll")} &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recent Blog Posts */}
      {posts.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">{t("home.blog.title")}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t("home.blog.desc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                      {post.coverImage ? (
                        <Image src={post.coverImage} alt={localizedField(post, "title")} fill className="object-cover" />
                      ) : (
                        <span className="text-4xl">📝</span>
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium text-[var(--color-primary)] uppercase">{post.category}</span>
                      <h3 className="font-bold mt-1 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                        {localizedField(post, "title")}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{localizedField(post, "excerpt")}</p>
                      <time className="text-xs text-gray-400 mt-3 block">
                        {new Date(post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </time>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="text-[var(--color-primary)] font-semibold hover:underline">
                {t("home.blog.readMore")} &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("home.cta.title")}</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">{t("home.cta.desc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-[var(--color-accent)] text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-[var(--color-accent-light)] transition-colors">
              {t("home.cta.viewTours")}
            </Link>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              {t("home.cta.getInTouch")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
