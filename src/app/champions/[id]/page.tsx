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
    <div className="w-full bg-slate-100 flex flex-col justify-center text-center p-2">
      <div>챔피온 개별 페이지</div>
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
          <div>챔피언 이름: {champ.name}</div>
          <div>챔피언 타이틀: {champ.title}</div>
          <div>{champ.lore}</div>
          <div className="text-red-500" key={champ.spells.id}>
            {champ.spells.name}
          </div>
        </>
      ))}
    </div>
  );
};

export default ChampionDetailPage;
