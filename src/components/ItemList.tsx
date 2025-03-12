import Image from "next/image";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        <div key={item.name}>
          <Image src={item.image} alt="..." />
          <div>{item.name}</div>
          <div>{item.plaintext}</div>
        </div>;
      })}
    </div>
  );
};

export default ItemList;
