"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({
  id,
  type,
}: {
  id: string;
  type: "posts" | "places";
}) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this?")) return;

    const res = await fetch(`/api/${type}/${id}`, { method: "DELETE" });
    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-sm text-red-600 hover:underline"
    >
      Delete
    </button>
  );
}
