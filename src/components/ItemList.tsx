import { ITEM_IMAGE_URL } from "@/constants/api";
import { Item } from "@/types/Items";
import Image from "next/image";
import Link from "next/link";

const ItemList = ({ item }: { item: Item }) => {
  return (
    <div className="bg-slate-200 border border-solid rounded-lg p-4">
      <Link href={`/items/${item.name}`}>
        <Image
          className="grid items-center"
          src={`${ITEM_IMAGE_URL}${item.image.full}`}
          alt={item.name}
          width={100}
          height={100}
          priority
        />
        <div>{item.name}</div>
        <div>{item.plaintext}</div>
      </Link>
    </div>
  );
};

export default ItemList;
