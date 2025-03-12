import ItemList from "@/components/ItemList";
import { Item } from "@/types/Items";

const ItemPage = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json"
  );
  const fetchData = await res.json();
  // const fetchItem = fetchData.map((id)=> {
  //   id: fetchData.data[0],
  //   name: fetchData.data.name,
  //   plaintext: fetchData.data.plaintext,
  //   image: fetchData.data.image,
  // })
  const item: Item = Object.entries(fetchData.data);

  //  obj.entries 로 배열로 변환하여 객체> 배열

  return (
    <>
      <div>아이템 페이지</div>
      <ItemList items={item} />
    </>
  );
};

export default ItemPage;
