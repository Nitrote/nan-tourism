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

const categoryIcons: Record<string, string> = {
  temple: "🏛️",
  nature: "🌿",
  culture: "🎭",
  attraction: "📍",
  activity: "🎯",
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
    <div className="bg-[var(--color-warm)]">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="Nan Province, Thailand"
          fill
          className="object-cover scale-[1.02]"
          priority
        />
        {/* Warm cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        <div className="relative max-w-6xl mx-auto px-6 pb-16 md:pb-24 w-full">
          <p className="text-amber-200/90 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Northern Thailand
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-2xl">
            {t("home.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            {t("home.hero.description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/places"
              className="bg-white/95 text-[var(--color-primary-dark)] font-semibold px-7 py-3.5 rounded-full hover:bg-white transition-all hover:shadow-lg"
            >
              {t("home.hero.explorePlaces")}
            </Link>
            <Link
              href="/tours"
              className="border border-white/40 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              {t("home.hero.bookTour")}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ WELCOME STRIP ═══════════ */}
      <section className="bg-[var(--color-primary-dark)] text-white py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm">
          <span className="flex items-center gap-2 opacity-80">
            <span className="text-lg">🏛️</span> {t("home.cards.temples.title")}
          </span>
          <span className="flex items-center gap-2 opacity-80">
            <span className="text-lg">⛰️</span> {t("home.cards.mountains.title")}
          </span>
          <span className="flex items-center gap-2 opacity-80">
            <span className="text-lg">🎭</span> {t("home.cards.culture.title")}
          </span>
          <span className="flex items-center gap-2 opacity-80">
            <span className="text-lg">🎯</span> {t("category.activity")}
          </span>
        </div>
      </section>

      {/* ═══════════ INTRO SECTION ═══════════ */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
        <p className="text-[var(--color-accent)] text-sm tracking-[0.25em] uppercase font-medium mb-4">
          {t("home.hero.subtitle")}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug max-w-3xl mx-auto">
          {t("home.cards.temples.desc")}
        </h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto text-lg">
          {t("home.places.desc")}
        </p>
      </section>

      {/* ═══════════ FEATURED PLACES — Editorial Grid ═══════════ */}
      {places.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase font-medium mb-2">
                Explore
              </p>
              <h2 className="text-3xl font-bold">{t("home.places.title")}</h2>
            </div>
            <Link
              href="/places"
              className="hidden md:inline-block text-[var(--color-primary)] font-medium hover:underline underline-offset-4"
            >
              {t("home.places.viewAll")} &rarr;
            </Link>
          </div>

          {/* Asymmetric magazine grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {places.slice(0, 4).map((place, i) => {
              const isLarge = i === 0 || i === 3;
              return (
                <Link
                  key={place.id}
                  href={`/places/${place.slug}`}
                  className={`group relative overflow-hidden rounded-2xl ${
                    isLarge ? "md:col-span-7" : "md:col-span-5"
                  } ${i < 2 ? "h-72 md:h-80" : "h-64 md:h-72"}`}
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
                    <span className="text-white/70 text-xs tracking-wider uppercase">
                      {categoryIcons[place.category] || "📍"}{" "}
                      {t(`category.${place.category}` as Parameters<typeof t>[0])}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-1 group-hover:translate-x-1 transition-transform duration-300">
                      {localizedField(place, "name")}
                    </h3>
                    <p className="text-white/70 text-sm mt-1 line-clamp-2 max-w-md">
                      {localizedField(place, "description")}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden text-center mt-6">
            <Link
              href="/places"
              className="text-[var(--color-primary)] font-medium hover:underline"
            >
              {t("home.places.viewAll")} &rarr;
            </Link>
          </div>
        </section>
      )}

      {/* ═══════════ ACTIVITIES — Horizontal cards ═══════════ */}
      {activities.length > 0 && (
        <section className="bg-[var(--color-warm-dark)] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[var(--color-terracotta)] text-sm tracking-[0.2em] uppercase font-medium mb-2">
                  Experience
                </p>
                <h2 className="text-3xl font-bold">{t("home.activities.title")}</h2>
                <p className="text-[var(--color-text-muted)] mt-2 max-w-lg">
                  {t("home.activities.desc")}
                </p>
              </div>
              <Link
                href="/activities"
                className="hidden md:inline-block text-[var(--color-primary)] font-medium hover:underline underline-offset-4"
              >
                {t("home.activities.viewAll")} &rarr;
              </Link>
            </div>

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
                  </div>
                </Link>
              ))}
            </div>

            <div className="md:hidden text-center mt-6">
              <Link
                href="/activities"
                className="text-[var(--color-primary)] font-medium hover:underline"
              >
                {t("home.activities.viewAll")} &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ FULL-WIDTH IMAGE BREAK ═══════════ */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/village-placeholder.webp"
          alt="Life in Nan"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-3">
              Slow down. Breathe in.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-lg leading-snug">
              Nan moves at its own pace
            </h2>
          </div>
        </div>
      </section>

      {/* ═══════════ BLOG — Clean editorial ═══════════ */}
      {posts.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase font-medium mb-2">
                  Stories
                </p>
                <h2 className="text-3xl font-bold">{t("home.blog.title")}</h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-block text-[var(--color-primary)] font-medium hover:underline underline-offset-4"
              >
                {t("home.blog.readMore")} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className={`group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                >
                  <article
                    className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex ${
                      i === 0 ? "flex-col" : "flex-col"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        i === 0 ? "h-64 md:h-80" : "h-44"
                      }`}
                    >
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={localizedField(post, "title")}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <Image
                          src="/images/village-placeholder.webp"
                          alt={localizedField(post, "title")}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[var(--color-accent)] text-xs font-medium tracking-wider uppercase">
                          {post.category}
                        </span>
                        <span className="text-gray-300">|</span>
                        <time className="text-[var(--color-text-muted)] text-xs">
                          {new Date(post.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <h3
                        className={`font-bold group-hover:text-[var(--color-primary)] transition-colors leading-snug ${
                          i === 0 ? "text-2xl mb-3" : "text-lg mb-2"
                        }`}
                      >
                        {localizedField(post, "title")}
                      </h3>
                      <p
                        className={`text-[var(--color-text-muted)] flex-1 ${
                          i === 0 ? "text-base line-clamp-3" : "text-sm line-clamp-2"
                        }`}
                      >
                        {localizedField(post, "excerpt")}
                      </p>
                      <span className="text-[var(--color-primary)] text-sm font-medium mt-4 group-hover:underline underline-offset-4">
                        Read more &rarr;
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="md:hidden text-center mt-6">
              <Link
                href="/blog"
                className="text-[var(--color-primary)] font-medium hover:underline"
              >
                {t("home.blog.readMore")} &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ CTA — Warm & inviting ═══════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary-dark)]" />
        <Image
          src="/images/hero-banner.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-200/80 text-sm tracking-[0.25em] uppercase font-medium mb-4">
            Your journey starts here
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
            {t("home.cta.title")}
          </h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("home.cta.desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tours"
              className="bg-[var(--color-accent)] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[var(--color-accent-light)] transition-all hover:shadow-lg"
            >
              {t("home.cta.viewTours")}
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              {t("home.cta.getInTouch")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
