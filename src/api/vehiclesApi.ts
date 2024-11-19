"use server";

const apiUrl = process.env.API_URL;
const revalidate = 3600;

export const getAllMakes = async () => {
  const response = await fetch(`${apiUrl}/vehicles/GetMakesForVehicleType/car?format=json`, {
    cache: "force-cache",
    next: { revalidate },
  });
  return await response.json();
};
