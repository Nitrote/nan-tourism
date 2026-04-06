"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

type Post = {
  id: string;
  title: string;
  titleTh: string;
  slug: string;
  content: string;
  contentTh: string;
  excerpt: string;
  excerptTh: string;
  coverImage: string;
  category: string;
  tags: string;
  published: boolean;
};

export default function PostForm({ post }: { post?: Post }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const contentThRef = useRef<HTMLTextAreaElement>(null);

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  async function handleImageUpload(targetRef: React.RefObject<HTMLTextAreaElement | null>) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      setUploading(false);

      if (data.url && targetRef.current) {
        const textarea = targetRef.current;
        const start = textarea.selectionStart;
        const before = textarea.value.substring(0, start);
        const after = textarea.value.substring(textarea.selectionEnd);
        const imgTag = `<img src="${data.url}" alt="${file.name}" style="max-width:100%;border-radius:8px;margin:1rem 0" />`;
        textarea.value = before + imgTag + after;
        textarea.focus();
      }
    };
    input.click();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title") as string,
      titleTh: formData.get("titleTh") as string,
      slug: formData.get("slug") as string,
      content: formData.get("content") as string,
      contentTh: formData.get("contentTh") as string,
      excerpt: formData.get("excerpt") as string,
      excerptTh: formData.get("excerptTh") as string,
      coverImage: formData.get("coverImage") as string,
      category: formData.get("category") as string,
      tags: formData.get("tags") as string,
      published: formData.get("published") === "on",
    };

    const url = post ? `/api/posts/${post.id}` : "/api/posts";
    const method = post ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSaving(false);

    if (res.ok) {
      router.push("/admin/posts");
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl space-y-5">
      {/* Title EN/TH */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title (English) *</label>
          <input
            type="text"
            name="title"
            required
            defaultValue={post?.title}
            onChange={(e) => {
              if (!post) {
                const slugInput = e.target.form?.querySelector('input[name="slug"]') as HTMLInputElement;
                if (slugInput) slugInput.value = slugify(e.target.value);
              }
            }}
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title (Thai)</label>
          <input
            type="text"
            name="titleTh"
            defaultValue={post?.titleTh}
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
        <input
          type="text"
          name="slug"
          required
          defaultValue={post?.slug}
          className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none font-mono text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
        <input
          type="text"
          name="coverImage"
          defaultValue={post?.coverImage}
          placeholder="/images/photo.jpg or https://example.com/image.jpg"
          className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none"
        />
      </div>

      {/* Excerpt EN/TH */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (English)</label>
          <textarea name="excerpt" rows={2} defaultValue={post?.excerpt} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (Thai)</label>
          <textarea name="excerptTh" rows={2} defaultValue={post?.excerptTh} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
      </div>

      {/* Content EN */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium text-gray-700">Content (English) * — HTML supported</label>
          <button
            type="button"
            onClick={() => handleImageUpload(contentRef)}
            disabled={uploading}
            className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md transition-colors disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "📷 Insert Image"}
          </button>
        </div>
        <textarea
          ref={contentRef}
          name="content"
          rows={12}
          required
          defaultValue={post?.content}
          className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none font-mono text-sm"
        />
      </div>

      {/* Content TH */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium text-gray-700">Content (Thai) — HTML supported</label>
          <button
            type="button"
            onClick={() => handleImageUpload(contentThRef)}
            disabled={uploading}
            className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md transition-colors disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "📷 Insert Image"}
          </button>
        </div>
        <textarea
          ref={contentThRef}
          name="contentTh"
          rows={12}
          defaultValue={post?.contentTh}
          className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none font-mono text-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select name="category" defaultValue={post?.category || "general"} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none bg-white">
            <option value="general">General</option>
            <option value="travel">Travel</option>
            <option value="culture">Culture</option>
            <option value="food">Food</option>
            <option value="nature">Nature</option>
            <option value="tips">Tips & Guides</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
          <input type="text" name="tags" defaultValue={post?.tags} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" placeholder="nan, temples, travel" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="published" id="published" defaultChecked={post?.published} className="rounded" />
        <label htmlFor="published" className="text-sm text-gray-700">Published</label>
      </div>

      <div className="flex gap-3 pt-4">
        <button type="submit" disabled={saving} className="bg-[var(--color-forest)] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[var(--color-forest-light)] transition-colors disabled:opacity-50">
          {saving ? "Saving..." : post ? "Update Post" : "Create Post"}
        </button>
        <button type="button" onClick={() => router.back()} className="px-6 py-2.5 border rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
          Cancel
        </button>
      </div>
    </form>
  );
}
