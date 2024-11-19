type EmptyModelsMessageProps = {
  makeId: string;
  year: string;
};

export const EmptyModelsMessage = ({ makeId, year }: EmptyModelsMessageProps) => (
  <main className="flex flex-col items-center p-10">
    <h1 className="text-2xl font-semibold">
      No models found for Make ID: {makeId} and Year: {year}
    </h1>
  </main>
);
