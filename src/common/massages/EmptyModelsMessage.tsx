type EmptyModelsMessageProps = {
  makeId: string;
  year: string;
};

export const EmptyModelsMessage = ({ makeId, year }: EmptyModelsMessageProps) => (
  <div className="flex justify-center items-center">
    <h2 className="text-2xl font-semibold">
      No models found for Make ID: {makeId} and Year: {year}
    </h2>
  </div>
);
