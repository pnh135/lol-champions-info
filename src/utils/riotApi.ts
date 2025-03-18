export const getChampionRotation = async () => {
  const res = await fetch("/api/rotation");
  const data = await res.json();
};
