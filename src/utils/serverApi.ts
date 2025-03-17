import { Champions } from "@/types/Champions";
import { Item } from "@/types/Items";

export const fetchItemList = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json"
  );
  const fetchData = await res.json();
  const item: Item[] = fetchData.data;

  return item;
};

export const fetchChampionList = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const fetchData = await res.json();
  const champions: Champions[] = Object.values(fetchData.data);

  return champions;
};
