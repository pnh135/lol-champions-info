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
    <>
      <div className="bg-slate-300 mb-4">아이템 페이지</div>
      <div className="grid grid-cols-2 md:cols-4 lg:cols-6 gap-4">
        {items.map((item) => (
          <ItemList item={item} key={item.name} />
        ))}
      </div>
    </>
  );
};

export default ItemPage;
