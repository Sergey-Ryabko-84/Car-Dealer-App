"use server";

const apiUrl = process.env.API_URL;
const revalidate = 3600;

export const getAllMakes = async () => {
  const response = await fetch(`${apiUrl}/vehicles/GetMakesForVehicleType/car?format=json`, {
    cache: "force-cache",
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch models");
  }

  return await response.json();
};

export const getModelsForMakeIdYear = async (makeId: string, year: string) => {
  const response = await fetch(
    `${apiUrl}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch models for makeId ${makeId} and year ${year}`);
  }

  return response.json();
};
