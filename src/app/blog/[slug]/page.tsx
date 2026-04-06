"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

type Post = {
  id: string;
  title: string;
  titleTh: string;
  slug: string;
  content: string;
  contentTh: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string;
  createdAt: string;
  author: { name: string };
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, localizedField } = useTranslation();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then(setPost)
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-warm)]"><p className="text-[var(--color-text-muted)]">Loading...</p></div>;
  if (!post) return <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-warm)]"><p className="text-[var(--color-text-muted)]">Post not found.</p></div>;

  const content = lang === "th" && post.contentTh ? post.contentTh : post.content;

  return (
    <div className="bg-[var(--color-warm)]">
      {/* Hero with image */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-16">
        {post.coverImage ? (
          <Image src={post.coverImage} alt={localizedField(post, "title")} fill className="object-cover" />
        ) : (
          <Image src="/images/village-placeholder.webp" alt={localizedField(post, "title")} fill className="object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <div className="relative max-w-4xl mx-auto px-6 pb-14 w-full">
          <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
            &larr; {t("blog.backToBlog")}
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block bg-[var(--color-sky)] text-white text-xs font-medium tracking-wider uppercase px-3 py-1.5 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
            {localizedField(post, "title")}
          </h1>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span>{t("blog.by")} {post.author.name}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{new Date(post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div
          className="prose prose-lg max-w-none prose-headings:text-[var(--color-text)] prose-p:text-[var(--color-text-muted)] prose-a:text-[var(--color-sky)] prose-strong:text-[var(--color-text)]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {post.tags && (
          <div className="mt-12 pt-8 border-t border-[var(--color-warm-dark)] flex flex-wrap gap-2">
            {post.tags.split(",").map((tag) => (
              <span
                key={tag}
                className="bg-[var(--color-sky-tint)] text-[var(--color-sky)] text-xs font-medium px-4 py-1.5 rounded-full"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}
