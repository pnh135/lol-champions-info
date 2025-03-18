import Card from "@/components/Card";
import { CHAMPIONS_URL } from "@/constants/api";
import { Champions } from "@/types/Champions";

export const revalidate = 86400;

const ChampionPage = async () => {
  const res = await fetch(`${CHAMPIONS_URL}`);
  const fetchData = await res.json();
  const champions: Champions[] = Object.values(fetchData.data);

  return (
    <div className="text-center">
      <div className="mb-4 text-white text-2xl mt-3">챔피온 페이지</div>
      <div className="grid grid-cols-6 gap-4 justify-center text-center">
        {champions.map((champion) => (
          <Card champion={champion} key={champion.id} />
        ))}
      </div>
    </div>
  );
};

export default ChampionPage;
