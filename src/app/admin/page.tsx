import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminDashboard() {
  const [postCount, placeCount, publishedPosts, publishedPlaces] =
    await Promise.all([
      prisma.post.count(),
      prisma.place.count(),
      prisma.post.count({ where: { published: true } }),
      prisma.place.count({ where: { published: true } }),
    ]);

  const recentPosts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    select: { id: true, title: true, published: true, createdAt: true },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 border">
          <p className="text-sm text-gray-500">Total Posts</p>
          <p className="text-3xl font-bold">{postCount}</p>
          <p className="text-xs text-green-600 mt-1">
            {publishedPosts} published
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 border">
          <p className="text-sm text-gray-500">Total Places</p>
          <p className="text-3xl font-bold">{placeCount}</p>
          <p className="text-xs text-green-600 mt-1">
            {publishedPlaces} published
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 border">
          <p className="text-sm text-gray-500">Draft Posts</p>
          <p className="text-3xl font-bold">{postCount - publishedPosts}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border">
          <p className="text-sm text-gray-500">Draft Places</p>
          <p className="text-3xl font-bold">{placeCount - publishedPlaces}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3 mb-8">
        <Link
          href="/admin/posts/new"
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-primary-light)] transition-colors"
        >
          + New Post
        </Link>
        <Link
          href="/admin/places/new"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          + New Place
        </Link>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl border">
        <div className="p-5 border-b">
          <h2 className="font-bold">Recent Posts</h2>
        </div>
        <div className="divide-y">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/admin/posts/${post.id}`}
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="font-medium text-sm">{post.title}</p>
                <p className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  post.published
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {post.published ? "Published" : "Draft"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
