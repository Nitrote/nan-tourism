import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminActivitiesPage() {
  const activities = await prisma.place.findMany({
    where: { category: "activity" },
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Activities</h1>
        <Link
          href="/admin/activities/new"
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-primary-light)] transition-colors"
        >
          + New Activity
        </Link>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-5 py-3 text-sm font-medium text-gray-500">Name</th>
              <th className="text-left px-5 py-3 text-sm font-medium text-gray-500">Status</th>
              <th className="text-right px-5 py-3 text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {activities.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50">
                <td className="px-5 py-3">
                  <Link href={`/admin/activities/${a.id}`} className="font-medium text-sm hover:text-[var(--color-primary)]">
                    {a.name}
                  </Link>
                </td>
                <td className="px-5 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${a.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {a.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/admin/activities/${a.id}`} className="text-sm text-blue-600 hover:underline">Edit</Link>
                    <DeleteButton id={a.id} type="places" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {activities.length === 0 && (
          <p className="text-center text-gray-400 py-8">No activities yet. Add your first one!</p>
        )}
      </div>
    </div>
  );
}
