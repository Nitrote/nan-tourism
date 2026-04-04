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

  const place = await prisma.place.create({
    data: {
      name: data.name,
      nameTh: data.nameTh || "",
      slug: data.slug,
      description: data.description,
      descriptionTh: data.descriptionTh || "",
      coverImage: data.coverImage || "",
      category: data.category || "attraction",
      latitude: data.latitude,
      longitude: data.longitude,
      address: data.address || "",
      addressTh: data.addressTh || "",
      published: data.published || false,
    },
  });

  return NextResponse.json(place);
}
