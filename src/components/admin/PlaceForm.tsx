"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Place = {
  id: string;
  name: string;
  nameTh: string;
  slug: string;
  description: string;
  descriptionTh: string;
  coverImage: string;
  category: string;
  latitude: number | null;
  longitude: number | null;
  address: string;
  addressTh: string;
  published: boolean;
};

export default function PlaceForm({ place }: { place?: Place }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  function slugify(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData(e.currentTarget);
    const lat = formData.get("latitude") as string;
    const lng = formData.get("longitude") as string;

    const data = {
      name: formData.get("name") as string,
      nameTh: formData.get("nameTh") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      descriptionTh: formData.get("descriptionTh") as string,
      coverImage: formData.get("coverImage") as string,
      category: formData.get("category") as string,
      latitude: lat ? parseFloat(lat) : null,
      longitude: lng ? parseFloat(lng) : null,
      address: formData.get("address") as string,
      addressTh: formData.get("addressTh") as string,
      published: formData.get("published") === "on",
    };

    const url = place ? `/api/places/${place.id}` : "/api/places";
    const method = place ? "PUT" : "POST";

    const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false);

    if (res.ok) {
      router.push("/admin/places");
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name (English) *</label>
          <input
            type="text" name="name" required defaultValue={place?.name}
            onChange={(e) => { if (!place) { const s = e.target.form?.querySelector('input[name="slug"]') as HTMLInputElement; if (s) s.value = slugify(e.target.value); } }}
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name (Thai)</label>
          <input type="text" name="nameTh" defaultValue={place?.nameTh} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
        <input type="text" name="slug" required defaultValue={place?.slug} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none font-mono text-sm" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
        <input type="text" name="coverImage" defaultValue={place?.coverImage} placeholder="/images/photo.jpg or https://..." className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description (English) *</label>
        <textarea name="description" rows={5} required defaultValue={place?.description} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description (Thai)</label>
        <textarea name="descriptionTh" rows={5} defaultValue={place?.descriptionTh} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select name="category" defaultValue={place?.category || "attraction"} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none bg-white">
          <option value="temple">Temple</option>
          <option value="nature">Nature</option>
          <option value="culture">Culture</option>
          <option value="food">Food & Dining</option>
          <option value="attraction">Attraction</option>
        </select>
        <p className="text-xs text-gray-400 mt-1">For activities (cooking, weaving, farming), use the Activities section instead.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address (English)</label>
          <input type="text" name="address" defaultValue={place?.address} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address (Thai)</label>
          <input type="text" name="addressTh" defaultValue={place?.addressTh} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
          <input type="number" name="latitude" step="any" defaultValue={place?.latitude ?? ""} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
          <input type="number" name="longitude" step="any" defaultValue={place?.longitude ?? ""} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="published" id="published" defaultChecked={place?.published} className="rounded" />
        <label htmlFor="published" className="text-sm text-gray-700">Published</label>
      </div>

      <div className="flex gap-3 pt-4">
        <button type="submit" disabled={saving} className="bg-[var(--color-forest)] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[var(--color-forest-light)] transition-colors disabled:opacity-50">
          {saving ? "Saving..." : place ? "Update Place" : "Create Place"}
        </button>
        <button type="button" onClick={() => router.back()} className="px-6 py-2.5 border rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
      </div>
    </form>
  );
}
