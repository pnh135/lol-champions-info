import { CHAMP_ONE_URL } from "@/constants/api";
import { Champion } from "@/types/Champions";

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

  console.log(champion);

  return (
    <>
      <div>챔피온 개별 페이지</div>
      <div>아이디 값: {params.id}</div>
      <div>챔피언 이름: {champion.name}</div>
    </>
  );
};

export default ChampionDetailPage;
