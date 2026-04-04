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

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center"><p className="text-gray-400">Loading...</p></div>;
  if (!post) return <div className="min-h-[60vh] flex items-center justify-center"><p className="text-gray-500">Post not found.</p></div>;

  const content = lang === "th" && post.contentTh ? post.contentTh : post.content;

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-16">
        {post.coverImage && (
          <Image src={post.coverImage} alt={localizedField(post, "title")} fill className="object-cover opacity-20" />
        )}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/blog" className="text-green-200 hover:text-white text-sm mb-4 inline-block">
            &larr; {t("blog.backToBlog")}
          </Link>
          <span className="block text-xs font-medium text-[var(--color-accent)] uppercase tracking-wide mb-2">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{localizedField(post, "title")}</h1>
          <div className="flex items-center gap-4 text-green-200 text-sm">
            <span>{t("blog.by")} {post.author.name}</span>
            <span>{new Date(post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[var(--color-primary)]" dangerouslySetInnerHTML={{ __html: content }} />
        {post.tags && (
          <div className="mt-8 pt-8 border-t flex flex-wrap gap-2">
            {post.tags.split(",").map((tag) => (
              <span key={tag} className="bg-green-50 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">{tag.trim()}</span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}
