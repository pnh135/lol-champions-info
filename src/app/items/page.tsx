import ItemList from "@/components/ItemList";
import { Item } from "@/types/Items";

const ItemPage = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const fetchData = await res.json();
  const items: Item[] = Object.values(fetchData.data);

  return (
    <div className="text-center">
      <div className="mb-4 text-white text-2xl mt-3">아이템 페이지</div>
      <div className="grid grid-cols-6 gap-4 justify-center text-center">
        {items.map((item) => (
          <ItemList item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
