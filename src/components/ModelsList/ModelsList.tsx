"use client";

import React from "react";
import { useModels } from "@/hooks/useModels";
import { EmptyModelsMessage, ErrorMessage, LoadingMessage } from "@/common";

type Props = {
  makeId: string;
  year: string;
};

export const ModelsList = ({ makeId, year }: Props) => {
  const { models, loading, error } = useModels(makeId, year);

  if (loading) return <LoadingMessage />;
  if (error) return <ErrorMessage message={error} />;
  if (models.length === 0) return <EmptyModelsMessage makeId={makeId} year={year} />;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model, index) => (
        <li
          key={index}
          className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition">
          {model.Model_Name}
        </li>
      ))}
    </ul>
  );
};
