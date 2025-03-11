import Image from "next/image";

const ItemList = ({ item }) => {
  return (
    <>
      <div>
        <Image src={item.image} alt="..." />
        <div>{item.name}</div>
        <div>{item.plaintext}</div>
      </div>
    </>
  );
};

export default ItemList;
