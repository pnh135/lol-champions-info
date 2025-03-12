export const fetchItemList = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json"
  );
  const fetchData = await res.json();
  const item = fetchData.data;

  return item;
};
