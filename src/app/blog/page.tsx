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
  author: { name: string };
};

export default function BlogPage() {
  const { t, localizedField } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  return (
    <div className="bg-[var(--color-warm)]">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden pt-16">
        <Image
          src="/images/village-placeholder.webp"
          alt="Nan Stories"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        <div className="relative max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-amber-200/90 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Stories
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t("blog.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {posts.length === 0 ? (
          <p className="text-center text-[var(--color-text-muted)] py-12">{t("blog.empty")}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className={`relative overflow-hidden ${i === 0 ? "h-64 md:h-80" : "h-44"}`}>
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
                    <h2
                      className={`font-bold group-hover:text-[var(--color-primary)] transition-colors leading-snug ${
                        i === 0 ? "text-2xl mb-3" : "text-lg mb-2"
                      }`}
                    >
                      {localizedField(post, "title")}
                    </h2>
                    <p
                      className={`text-[var(--color-text-muted)] flex-1 ${
                        i === 0 ? "text-base line-clamp-3" : "text-sm line-clamp-2"
                      }`}
                    >
                      {localizedField(post, "excerpt")}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-xs text-[var(--color-text-muted)]">
                      <span>{t("blog.by")} {post.author.name}</span>
                      <span className="text-[var(--color-primary)] font-medium group-hover:underline underline-offset-4">
                        Read more &rarr;
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
