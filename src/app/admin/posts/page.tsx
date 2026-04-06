import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminPostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: { select: { name: true } } },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link
          href="/admin/posts/new"
          className="bg-[var(--color-forest)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-forest-light)] transition-colors"
        >
          + New Post
        </Link>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-5 py-3 text-sm font-medium text-gray-500">
                Title
              </th>
              <th className="text-left px-5 py-3 text-sm font-medium text-gray-500">
                Category
              </th>
              <th className="text-left px-5 py-3 text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="text-left px-5 py-3 text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="text-right px-5 py-3 text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-5 py-3">
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="font-medium text-sm hover:text-[var(--color-forest)]"
                  >
                    {post.title}
                  </Link>
                </td>
                <td className="px-5 py-3 text-sm text-gray-500 capitalize">
                  {post.category}
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      post.published
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-5 py-3 text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/posts/${post.id}`}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <DeleteButton id={post.id} type="posts" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {posts.length === 0 && (
          <p className="text-center text-gray-400 py-8">
            No posts yet. Create your first one!
          </p>
        )}
      </div>
    </div>
  );
}
