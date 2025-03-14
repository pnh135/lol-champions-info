import { Champions } from "@/types/Champions";

const ChampionDetailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const fetchData = await res.json();
  const champions: Champions[] = Object.values(fetchData.data);
  const matchChamp = champions.filter((params) => params.id === champions.id);

  return (
    <>
      <div>챔피온 개별 페이지</div>
      <div>아이디 값: {params.id}</div>
      <div>챔피언 이름: {matchChamp.name}</div>
    </>
  );
};

export default ChampionDetailPage;
