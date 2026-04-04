import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminPlacesPage() {
  const places = await prisma.place.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Places</h1>
        <Link
          href="/admin/places/new"
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-primary-light)] transition-colors"
        >
          + New Place
        </Link>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-5 py-3 text-sm font-medium text-gray-500">Name</th>
              <th className="text-left px-5 py-3 text-sm font-medium text-gray-500">Category</th>
              <th className="text-left px-5 py-3 text-sm font-medium text-gray-500">Status</th>
              <th className="text-right px-5 py-3 text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {places.map((place) => (
              <tr key={place.id} className="hover:bg-gray-50">
                <td className="px-5 py-3">
                  <Link href={`/admin/places/${place.id}`} className="font-medium text-sm hover:text-[var(--color-primary)]">
                    {place.name}
                  </Link>
                </td>
                <td className="px-5 py-3 text-sm text-gray-500 capitalize">{place.category}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${place.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {place.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/admin/places/${place.id}`} className="text-sm text-blue-600 hover:underline">Edit</Link>
                    <DeleteButton id={place.id} type="places" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {places.length === 0 && (
          <p className="text-center text-gray-400 py-8">No places yet. Add your first one!</p>
        )}
      </div>
    </div>
  );
}
