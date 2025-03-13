import Card from "@/components/Card";
import { Champions } from "@/types/Champions";

const ChampionPage = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
    {
      cache: "force-cache",
    }
  );
  const fetchData = await res.json();
  const champions: Champions[] = Object.values(fetchData.data);

  return (
    <>
      <div>챔피온 페이지</div>
      <div className="grid grid-cols-2 md:cols-4 lg:cols-6 gap-4">
        {champions.map((champion) => (
          <Card champion={champion} key={champion.id} />
        ))}
      </div>
    </>
  );
};

export default ChampionPage;
