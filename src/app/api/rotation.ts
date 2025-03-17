import { ROTATION_URL } from "@/constants/api";

const getRotationData = async () => {
  const res = await fetch(`${ROTATION_URL}${process.env.RIOT_API_KEY}`);
  const data = await res.json();
  return data;
};
