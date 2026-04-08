"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/useTranslation";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";

type Post = {
  id: string; title: string; titleTh: string; slug: string;
  excerpt: string; excerptTh: string; coverImage: string;
  category: string; createdAt: string;
};

type Place = {
  id: string; name: string; nameTh: string; slug: string;
  description: string; descriptionTh: string; coverImage: string;
  category: string;
};

function CardSkeleton({ className = "" }: { className?: string }) {
  return <div className={`flex-shrink-0 ${className}`}><div className="skeleton w-full h-full rounded-2xl" /></div>;
}

function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 md:row-span-2 skeleton h-[24rem] md:h-[30rem] rounded-2xl" />
      <div className="skeleton h-60 rounded-2xl" />
      <div className="skeleton h-60 rounded-2xl" />
    </div>
  );
}

export default function HomePage() {
  const { t, localizedField } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);
  const [activities, setActivities] = useState<Place[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/home-data")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.posts || []);
        setPlaces(data.places || []);
        setActivities(data.activities || []);
        setLoaded(true);
      });
  }, []);

  return (
    <div>
      {/* ═══ HERO — Sky Blue ═══ */}
      <section className="relative h-[92vh] min-h-[600px] flex items-end overflow-hidden">
        <Image src="/images/hero-banner.jpg" alt="Nan Province" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sky-dark)]/70 via-[var(--color-sky)]/10 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 pb-24 w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.08] mb-6 max-w-2xl">
            {t("home.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-lg leading-relaxed">
            {t("home.hero.description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/places" className="bg-white text-[var(--color-sky-dark)] font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all">
              {t("home.hero.explorePlaces")}
            </Link>
            <Link href="/tours" className="border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              {t("home.hero.bookTour")}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ INTRO — Sky Blue tint ═══ */}
      <section className="bg-[var(--color-sky-tint)] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-[3px] bg-[var(--color-sky)] mx-auto mb-10 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
            {t("home.intro.title")}
          </h2>
          <p className="text-[var(--color-text-muted)] leading-[1.8] text-lg">
            {t("home.intro.desc")}
          </p>
        </div>
      </section>

      {/* ═══ PLACES — Forest Green ═══ */}
      <section className="bg-[var(--color-forest-tint)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-block bg-[var(--color-forest)] text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                {t("home.places.label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">{t("home.places.title")}</h2>
            </div>
            <Link href="/places" className="hidden md:inline-block text-[var(--color-forest)] font-medium hover:underline underline-offset-4">
              {t("home.places.viewAll")} &rarr;
            </Link>
          </div>
        </div>

        {!loaded ? (
          <div className="flex gap-5 px-6 overflow-hidden">
            <CardSkeleton className="w-[300px] md:w-[380px] h-80" />
            <CardSkeleton className="w-[300px] md:w-[380px] h-80" />
            <CardSkeleton className="w-[300px] md:w-[380px] h-80" />
          </div>
        ) : places.length > 0 ? (
          <div className="fade-in px-6">
            <AutoScrollCarousel speed={0.4} resumeDelay={3000} arrowColor="var(--color-forest)">
              {places.map((place) => (
                <Link key={place.id} href={`/places/${place.slug}`} className="group relative overflow-hidden rounded-2xl w-[300px] md:w-[380px] h-80 flex-shrink-0">
                  <Image src={place.coverImage || "/images/village-placeholder.webp"} alt={localizedField(place, "name")} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <span className="inline-block bg-[var(--color-forest)]/90 text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                      {t(`category.${place.category}` as Parameters<typeof t>[0])}
                    </span>
                    <h3 className="text-white text-xl font-bold group-hover:translate-x-1 transition-transform duration-300">{localizedField(place, "name")}</h3>
                    <p className="text-white/65 text-sm mt-2 line-clamp-2 max-w-sm leading-relaxed">{localizedField(place, "description")}</p>
                  </div>
                </Link>
              ))}
            </AutoScrollCarousel>
          </div>
        ) : null}

        <div className="md:hidden text-center mt-10 px-6">
          <Link href="/places" className="text-[var(--color-forest)] font-medium hover:underline">{t("home.places.viewAll")} &rarr;</Link>
        </div>
      </section>

      {/* ═══ ACTIVITIES — Golden ═══ */}
      <section className="bg-[var(--color-golden-tint)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-block bg-[var(--color-golden-dark)] text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                {t("home.activities.label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">{t("home.activities.title")}</h2>
              <p className="text-[var(--color-text-muted)] mt-3 max-w-lg leading-relaxed">{t("home.activities.desc")}</p>
            </div>
            <Link href="/activities" className="hidden md:inline-block text-[var(--color-golden-dark)] font-medium hover:underline underline-offset-4">
              {t("home.activities.viewAll")} &rarr;
            </Link>
          </div>
        </div>

        {!loaded ? (
          <div className="flex gap-5 px-6 overflow-hidden">
            <CardSkeleton className="w-[280px] md:w-[340px] h-80" />
            <CardSkeleton className="w-[280px] md:w-[340px] h-80" />
            <CardSkeleton className="w-[280px] md:w-[340px] h-80" />
          </div>
        ) : activities.length > 0 ? (
          <div className="fade-in px-6">
            <AutoScrollCarousel speed={0.35} resumeDelay={3000} arrowColor="var(--color-golden-dark)">
              {activities.map((activity) => (
                <Link key={activity.id} href={`/activities/${activity.slug}`} className="group bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 w-[280px] md:w-[340px] flex-shrink-0">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={activity.coverImage || "/images/village-placeholder.webp"} alt={localizedField(activity, "name")} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 border-t-[3px] border-[var(--color-golden)]">
                    <span className="text-[var(--color-golden-dark)] text-xs font-semibold tracking-wider uppercase">{t("category.activity")}</span>
                    <h3 className="font-bold text-lg mt-2 group-hover:text-[var(--color-forest)] transition-colors">{localizedField(activity, "name")}</h3>
                    <p className="text-[var(--color-text-muted)] text-sm mt-2 line-clamp-2 leading-relaxed">{localizedField(activity, "description")}</p>
                  </div>
                </Link>
              ))}
            </AutoScrollCarousel>
          </div>
        ) : null}

        <div className="md:hidden text-center mt-10 px-6">
          <Link href="/activities" className="text-[var(--color-golden-dark)] font-medium hover:underline">{t("home.activities.viewAll")} &rarr;</Link>
        </div>
      </section>

      {/* ═══ BLOG — Sunset tint ═══ */}
      <section className="bg-[var(--color-sunset-tint)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block bg-[var(--color-sunset)] text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                {t("home.blog.label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">{t("home.blog.title")}</h2>
            </div>
            <Link href="/blog" className="hidden md:inline-block text-[var(--color-sunset)] font-medium hover:underline underline-offset-4">
              {t("home.blog.readMore")} &rarr;
            </Link>
          </div>

          {!loaded ? <BlogSkeleton /> : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
              {posts.map((post, i) =>
                i === 0 ? (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl h-[24rem] md:h-full min-h-[22rem]">
                    <Image src={post.coverImage || "/images/village-placeholder.webp"} alt={localizedField(post, "title")} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-[var(--color-sunset)] text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">{post.category}</span>
                        <time className="text-white/50 text-xs">{new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-3 max-w-lg">{localizedField(post, "title")}</h3>
                      <p className="text-white/70 line-clamp-2 max-w-md leading-relaxed">{localizedField(post, "excerpt")}</p>
                      <span className="inline-block text-white/70 text-sm font-medium mt-5 group-hover:text-white transition-colors">{t("home.blog.readArticle")} &rarr;</span>
                    </div>
                  </Link>
                ) : (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <article className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-44 overflow-hidden">
                        <Image src={post.coverImage || "/images/village-placeholder.webp"} alt={localizedField(post, "title")} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col border-t-[3px] border-[var(--color-sunset)]">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[var(--color-sunset)] text-xs font-semibold tracking-wider uppercase">{post.category}</span>
                          <span className="text-gray-300">|</span>
                          <time className="text-[var(--color-text-muted)] text-xs">{new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</time>
                        </div>
                        <h3 className="font-bold text-lg leading-snug group-hover:text-[var(--color-sunset)] transition-colors mb-2">{localizedField(post, "title")}</h3>
                        <p className="text-[var(--color-text-muted)] text-sm flex-1 line-clamp-2 leading-relaxed">{localizedField(post, "excerpt")}</p>
                        <span className="text-[var(--color-sunset)] text-sm font-medium mt-4 group-hover:underline underline-offset-4">{t("home.blog.readArticle")} &rarr;</span>
                      </div>
                    </article>
                  </Link>
                )
              )}
            </div>
          ) : null}

          <div className="md:hidden text-center mt-10">
            <Link href="/blog" className="text-[var(--color-sunset)] font-medium hover:underline">{t("home.blog.readMore")} &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ═══ IMAGE BREAK ═══ */}
      <section className="relative h-80 md:h-[30rem] overflow-hidden">
        <Image src="/images/village-placeholder.webp" alt="Life in Nan" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-5">{t("home.break.label")}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-md leading-snug">{t("home.break.title")}</h2>
          </div>
        </div>
      </section>

      {/* ═══ CTA — Sunset ═══ */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-[var(--color-sunset)] to-[var(--color-sunset-dark)]">
        <Image src="/images/hero-banner.jpg" alt="" fill className="object-cover opacity-10" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-[3px] bg-white/30 mx-auto mb-10 rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-snug">{t("home.cta.title")}</h2>
          <p className="text-white/75 mb-12 max-w-xl mx-auto text-lg leading-[1.8]">{t("home.cta.desc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-white text-[var(--color-sunset-dark)] font-semibold px-9 py-4 rounded-full hover:shadow-lg transition-all">
              {t("home.cta.viewTours")}
            </Link>
            <Link href="/contact" className="border border-white/30 text-white font-medium px-9 py-4 rounded-full hover:bg-white/10 transition-all">
              {t("home.cta.getInTouch")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
