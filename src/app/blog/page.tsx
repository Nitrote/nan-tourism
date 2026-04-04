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
    <div>
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t("blog.title")}</h1>
          <p className="text-green-100 text-lg max-w-2xl">{t("blog.subtitle")}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-12">{t("blog.empty")}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                    {post.coverImage ? (
                      <Image src={post.coverImage} alt={localizedField(post, "title")} fill className="object-cover" />
                    ) : (
                      <span className="text-5xl">📝</span>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide">{post.category}</span>
                    <h2 className="font-bold text-xl mt-1 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {localizedField(post, "title")}
                    </h2>
                    <p className="text-gray-600 text-sm flex-1">{localizedField(post, "excerpt")}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t text-xs text-gray-400">
                      <span>{t("blog.by")} {post.author.name}</span>
                      <time>{new Date(post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
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
