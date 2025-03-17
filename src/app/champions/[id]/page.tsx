import { CHAMP_ONE_URL } from "@/constants/api";
import { Champions } from "@/types/Champions";

const ChampionDetailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const res = await fetch(`${CHAMP_ONE_URL}${params.id}.json`);
  const fetchData = await res.json();
  const champions: Champions[] = Object.values(fetchData.data);

  console.log(champions);

  return (
    <>
      <div>챔피온 개별 페이지</div>
      <div>아이디 값: {params.id}</div>
      <div>챔피언 이름: {champions.name}</div>
    </>
  );
};

export default ChampionDetailPage;
