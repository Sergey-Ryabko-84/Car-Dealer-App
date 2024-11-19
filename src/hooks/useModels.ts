import { useEffect, useState } from "react";
import { getModelsForMakeIdYear } from "@/api/vehiclesApi";

type Model = {
  Model_Name: string;
};

type Return = {
  models: Model[];
  loading: boolean;
  error: string | null;
};

export const useModels = (makeId: string, year: string): Return => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModels = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getModelsForMakeIdYear(makeId, year);
        setModels(data.Results || []);
      } catch (err) {
        setError("Failed to fetch models");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (makeId && year) {
      fetchModels();
    }
  }, [makeId, year]);

  return { models, loading, error };
};
