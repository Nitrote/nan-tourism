"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const links = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/posts", label: "Blog Posts", icon: "📝" },
  { href: "/admin/places", label: "Places", icon: "📍" },
  { href: "/admin/activities", label: "Activities", icon: "🎯" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  if (pathname === "/admin/login") return null;

  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <div className="p-6">
        <h2 className="font-bold text-lg text-gray-900">Admin Panel</h2>
        <p className="text-xs text-gray-400 mt-1">Manage your content</p>
      </div>
      <nav className="px-3">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/admin" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium mb-1 transition-colors ${
                isActive
                  ? "bg-green-50 text-[var(--color-forest)]"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-0 w-64 p-4 border-t">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-sm text-gray-500 hover:text-red-600 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}
