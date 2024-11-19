// hooks/useMakes.ts
import { useEffect, useState } from "react";
import { getAllMakes } from "@/api/vehiclesApi";

interface VehicleMake {
  MakeId: number;
  MakeName: string;
}

export const useMakes = () => {
  const [makes, setMakes] = useState<VehicleMake[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMakes = async () => {
      setLoading(true);
      try {
        const fetchedMakes = await getAllMakes();
        setMakes(fetchedMakes.Results);
      } catch (error) {
        console.error("Error fetching makes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMakes();
  }, []);

  const makeOptions = loading
    ? []
    : makes.map((make) => ({ id: make.MakeId, name: make.MakeName }));

  return { makeOptions, loading };
};
