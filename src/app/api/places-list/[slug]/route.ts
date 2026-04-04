import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: Context) {
  const { slug } = await context.params;
  const place = await prisma.place.findUnique({ where: { slug } });

  if (!place || !place.published || place.category === "activity") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(place);
}
