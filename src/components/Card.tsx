import { CHAMP_URL } from "@/constants/api";
import { Champions } from "@/types/Champions";
import Image from "next/image";
import Link from "next/link";

const Card = ({ champion }: { champion: Champions }) => {
  return (
    <div className="bg-slate-200 border border-solid border-red-200 rounded-lg cursor-pointer">
      <Link href={`/champions/${champion.id}`}>
        <Image
          src={`${CHAMP_URL}${champion.image.full}`}
          alt={champion.name}
          width={100}
          height={100}
          priority
        />
        <div>{champion.name}</div>
        <div>{champion.title}</div>
      </Link>
    </div>
  );
};

export default Card;
