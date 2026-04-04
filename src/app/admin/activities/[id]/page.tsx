import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ActivityForm from "@/components/admin/ActivityForm";

type Props = { params: Promise<{ id: string }> };

export default async function EditActivityPage({ params }: Props) {
  const { id } = await params;
  const activity = await prisma.place.findUnique({ where: { id } });

  if (!activity || activity.category !== "activity") notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Activity</h1>
      <ActivityForm activity={activity} />
    </div>
  );
}
