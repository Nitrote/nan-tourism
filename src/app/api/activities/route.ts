import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const activities = await prisma.place.findMany({
    where: { category: "activity", published: true },
    orderBy: { name: "asc" },
  });
  return NextResponse.json(activities);
}
