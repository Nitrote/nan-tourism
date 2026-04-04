import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PlaceForm from "@/components/admin/PlaceForm";

type Props = { params: Promise<{ id: string }> };

export default async function EditPlacePage({ params }: Props) {
  const { id } = await params;
  const place = await prisma.place.findUnique({ where: { id } });

  if (!place) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Place</h1>
      <PlaceForm place={place} />
    </div>
  );
}
