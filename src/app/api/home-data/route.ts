import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const [posts, places, activities] = await Promise.all([
    prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: {
        id: true, title: true, titleTh: true, slug: true,
        excerpt: true, excerptTh: true, coverImage: true,
        category: true, createdAt: true,
      },
    }),
    prisma.place.findMany({
      where: { published: true, category: { not: "activity" } },
      take: 8,
      select: {
        id: true, name: true, nameTh: true, slug: true,
        description: true, descriptionTh: true, coverImage: true,
        category: true,
      },
    }),
    prisma.place.findMany({
      where: { published: true, category: "activity" },
      take: 6,
      select: {
        id: true, name: true, nameTh: true, slug: true,
        description: true, descriptionTh: true, coverImage: true,
        category: true,
      },
    }),
  ]);

  return NextResponse.json({ posts, places, activities });
}
