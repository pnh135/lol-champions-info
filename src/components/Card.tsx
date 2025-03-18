import { CHAMP_IMAGE_URL } from "@/constants/api";
import { Champions } from "@/types/Champions";
import Image from "next/image";
import Link from "next/link";

const Card = ({ champion }: { champion: Champions }) => {
  return (
    <div className="bg-slate-200 border border-solid rounded-lg p-4 cursor-pointer">
      <Link href={`/champions/${champion.id}`}>
        <Image
          src={`${CHAMP_IMAGE_URL}${champion.image.full}`}
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
