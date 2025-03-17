import { CHAMP_ONE_URL } from "@/constants/api";
import { Champion, spells } from "@/types/Champions";

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
  const spells: spells[] = Object.values(champion.spells);

  console.log(champion);

  return (
    <div className="w-full bg-slate-100">
      <div>챔피온 개별 페이지</div>
      {/* <div>아이디 값: {params.id}</div> */}
      {champion.map((champ) => (
        <>
          <div>챔피언 이름: {champ.name}</div>
          <div>챔피언 타이틀: {champ.title}</div>
          <div>{champ.blurb}</div>
        </>
      ))}
      {spells.map((spell) => (
        <div key={spell.id}>
          <div>{spell.name}</div>
          <div>{spell.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ChampionDetailPage;
