import Card from "@/components/Card";
import { CHAMPIONS_URL } from "@/constants/api";
import { Champions } from "@/types/Champions";

export const revalidate = 86400;

const ChampionPage = async () => {
  const res = await fetch(`${CHAMPIONS_URL}`);
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
