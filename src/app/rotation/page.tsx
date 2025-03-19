"use client";

import Card from "@/components/Card";
import { CHAMPIONS_URL } from "@/constants/api";
import { Champions } from "@/types/Champions";
import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";

const RotationPage = () => {
  const {
    data: rotationData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["rotations"],
    queryFn: async () => {
      const { Rotationdata } = await getChampionRotation();
      return Rotationdata;
    },
    staleTime: 60 * 60 * 24,
  });

  if (isPending) {
    return <div>Loading ... </div>;
  }

  if (error) {
    return <div>데이터를 가져오는 도중 오류가 발생하였습니다.</div>;
  }

  const Championdata = async () => {
    const res = await fetch(`${CHAMPIONS_URL}`);
    const fetchData = await res.json();
    const champions: Champions[] = Object.values(fetchData.data);

    const filterChampion = champions.filter((champion) =>
      rotationData.freeChampionIds.includes(champion.key)
    );
    return filterChampion;
  };

  return (
    <>
      <div className="mb-4 text-white text-2xl mt-3">금주의 챔피언 페이지</div>
      <div className="grid grid-cols-6 gap-4 justify-center text-center">
        {filterChampion.map((champion) => (
          <Card champion={champion} key={champion.id} />
        ))}
      </div>
    </>
  );
};

export default RotationPage;
