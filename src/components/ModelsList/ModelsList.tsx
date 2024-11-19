"use client";

import React from "react";
import { useModels } from "@/hooks/useModels";
import { EmptyModelsMessage, ErrorMessage, LoadingMessage } from "@/common";
import styles from "./ModelsList.module.css";

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
    <ul className={styles.list}>
      {models.map((model, index) => (
        <li key={index} className={styles.item}>
          {model.Model_Name}
        </li>
      ))}
    </ul>
  );
};
