import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const places = await prisma.place.findMany({
    where: { published: true, category: { not: "activity" } },
    orderBy: { name: "asc" },
  });
  return NextResponse.json(places);
}
