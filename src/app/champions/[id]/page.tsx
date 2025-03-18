import { CHAMP_ONE_URL, LARGE_IMAGE_URL } from "@/constants/api";
import { Champion } from "@/types/Champions";
import Image from "next/image";

const ChampionDetailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const paramsId = params.id;
  const res = await fetch(`${CHAMP_ONE_URL}${paramsId}.json`);
  const fetchData = await res.json();
  const champion: Champion[] = Object.values(fetchData.data);

  return (
    <div className="w-full bg-slate-100 flex flex- justify-center text-center p-4">
      {/* <div>아이디 값: {params.id}</div> */}
      {champion.map((champ) => (
        <>
          <Image
            src={`${LARGE_IMAGE_URL}${champ.id}_0.jpg`}
            alt={champ.name}
            width={600}
            height={600}
            priority
          />
          <div>
            <div className="text-2xl font-semibold m-4 w-full">
              {champ.name}
            </div>
            <div className="text-lg font-medium m-4 w-full">{champ.title}</div>
            <div className="text-lg font-medium m-4">{champ.lore}</div>
            <div className="text-red-500" key={champ.spells.id}>
              {champ.spells.name}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ChampionDetailPage;
