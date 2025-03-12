import Image from "next/image";

const Card = ({ champions }) => {
  return (
    <div>
      {champions.map((champ) => {
        <div key={champ.name}>
          <Image src={champ.image} alt="..." />
          <div>{champ.plaintext}</div>
        </div>;
      })}
    </div>
  );
};

export default Card;
