import Image from "next/image";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        <div key={item.id}>
          <Image src={item.image} alt="..." />
          <div>{item.name}</div>
          <div>{item.plaintext}</div>
        </div>;
      })}
    </>
  );
};

export default ItemList;
