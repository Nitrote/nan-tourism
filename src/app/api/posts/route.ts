import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await request.json();
  const userId = (session.user as { id: string }).id;

  const post = await prisma.post.create({
    data: {
      title: data.title,
      titleTh: data.titleTh || "",
      slug: data.slug,
      content: data.content,
      contentTh: data.contentTh || "",
      excerpt: data.excerpt || "",
      excerptTh: data.excerptTh || "",
      coverImage: data.coverImage || "",
      category: data.category || "general",
      tags: data.tags || "",
      published: data.published || false,
      authorId: userId,
    },
  });

  return NextResponse.json(post);
}
