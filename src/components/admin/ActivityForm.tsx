"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Activity = {
  id: string;
  name: string;
  nameTh: string;
  slug: string;
  description: string;
  descriptionTh: string;
  coverImage: string;
  latitude: number | null;
  longitude: number | null;
  address: string;
  addressTh: string;
  published: boolean;
};

export default function ActivityForm({ activity }: { activity?: Activity }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
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
      category: "activity",
      latitude: lat ? parseFloat(lat) : null,
      longitude: lng ? parseFloat(lng) : null,
      address: formData.get("address") as string,
      addressTh: formData.get("addressTh") as string,
      published: formData.get("published") === "on",
    };

    const url = activity ? `/api/places/${activity.id}` : "/api/places";
    const method = activity ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSaving(false);

    if (res.ok) {
      router.push("/admin/activities");
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name (English) *</label>
          <input
            type="text"
            name="name"
            required
            defaultValue={activity?.name}
            onChange={(e) => {
              if (!activity) {
                const slugInput = e.target.form?.querySelector('input[name="slug"]') as HTMLInputElement;
                if (slugInput) slugInput.value = slugify(e.target.value);
              }
            }}
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name (Thai)</label>
          <input
            type="text"
            name="nameTh"
            defaultValue={activity?.nameTh}
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
          defaultValue={activity?.slug}
          className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none font-mono text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description (English) *</label>
        <textarea
          name="description"
          rows={5}
          required
          defaultValue={activity?.description}
          className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description (Thai)</label>
        <textarea
          name="descriptionTh"
          rows={5}
          defaultValue={activity?.descriptionTh}
          className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
        <input
          type="text"
          name="coverImage"
          defaultValue={activity?.coverImage}
          placeholder="https://example.com/image.jpg or /images/photo.jpg"
          className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address (English)</label>
          <input type="text" name="address" defaultValue={activity?.address} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address (Thai)</label>
          <input type="text" name="addressTh" defaultValue={activity?.addressTh} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
          <input type="number" name="latitude" step="any" defaultValue={activity?.latitude ?? ""} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
          <input type="number" name="longitude" step="any" defaultValue={activity?.longitude ?? ""} className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-forest)] focus:border-transparent outline-none" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="published" id="published" defaultChecked={activity?.published} className="rounded" />
        <label htmlFor="published" className="text-sm text-gray-700">Published</label>
      </div>

      <div className="flex gap-3 pt-4">
        <button type="submit" disabled={saving} className="bg-[var(--color-forest)] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[var(--color-forest-light)] transition-colors disabled:opacity-50">
          {saving ? "Saving..." : activity ? "Update Activity" : "Create Activity"}
        </button>
        <button type="button" onClick={() => router.back()} className="px-6 py-2.5 border rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
          Cancel
        </button>
      </div>
    </form>
  );
}
