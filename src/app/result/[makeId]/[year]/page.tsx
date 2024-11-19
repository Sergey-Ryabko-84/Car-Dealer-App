import React from "react";
import { getAllMakes } from "@/api/vehiclesApi";
import { ModelsList } from "@/components";

type Props = {
  params: Promise<{ makeId: string; year: string }>;
};

export default function Result({ params }: Props) {
  const { makeId, year } = React.use(params);

  return (
    <main className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-semibold mb-4">Models:</h1>
      <ModelsList makeId={makeId} year={year} />
    </main>
  );
}

export async function generateStaticParams() {
  const fetchedMakes = await getAllMakes();
  const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString());

  const paths = fetchedMakes.Results.map((MakeId: string) =>
    years.map((year) => ({
      MakeId,
      year,
    }))
  );

  return paths.flat();
}
