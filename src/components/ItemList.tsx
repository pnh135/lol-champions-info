import { IMAGE_URL } from "@/constants/api";
import { Item } from "@/types/Items";
import Image from "next/image";
import Link from "next/link";

const ItemList = ({ item }: { item: Item }) => {
  return (
    <div className="bg-slate-200 border border-solid border-red-200 rounded-lg">
      <Link href={`/items/${item.name}`}>
        <Image
          src={`${IMAGE_URL}${item.image.full}`}
          alt={item.name}
          width={100}
          height={100}
        />
        <div>{item.name}</div>
        <div>{item.plaintext}</div>
      </Link>
    </div>
  );
};

export default ItemList;
