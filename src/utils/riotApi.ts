import { ROTATION_URL } from "@/constants/api";

export const getChampionRotation = async () => {
  try {
    const res = await fetch(`${ROTATION_URL}${process.env.RIOT_API_KEY}`);
    if (!res.ok) {
      throw new Error("Failed to fetch champion rotation");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API 요청 실패:", error);
    return null;
  }
};
