import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type Context = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: Context) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const data = await request.json();

  const post = await prisma.post.update({
    where: { id },
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
    },
  });

  return NextResponse.json(post);
}

export async function DELETE(_request: Request, context: Context) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  await prisma.post.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
