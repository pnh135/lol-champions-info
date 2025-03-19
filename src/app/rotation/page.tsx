"use client";

// import Card from "@/components/Card";
// import { CHAMPIONS_URL } from "@/constants/api";
// import { Champions } from "@/types/Champions";
// import { getChampionRotation } from "@/utils/riotApi";
// import { useQuery } from "@tanstack/react-query";

const RotationPage = () => {
  // rotations 정보를 tanstack으로 캐싱하기
  // const {
  //   data: rotationData,
  //   isPending,
  //   error,
  // } = useQuery({
  //   queryKey: ["rotations"],
  //   queryFn: async () => {
  //     const { Rotationdata } = await getChampionRotation();
  //     return Rotationdata;
  //   },
  //   staleTime: 60 * 60 * 24,
  // });

  // 불러오는 중일 때 로딩 중 표시
  // if (isPending) {
  //   return <div>Loading ... </div>;
  // }

  // 불러오는 걸 실패할 시 실패 오류 출력
  // if (error) {
  //   return <div>데이터를 가져오는 도중 오류가 발생하였습니다.</div>;
  // }

  // 기존 챔피언 데이터 fetch 하기
  // const Championdata = async () => {
  //   const res = await fetch(`${CHAMPIONS_URL}`);
  //   const fetchData = await res.json();
  //   const champions: Champions[] = Object.values(fetchData.data);

  // "rotations" 정보와 비교하여 로테이션 챔피언 뽑기
  //   const filterChampion = champions.filter((champion) =>
  //     rotationData.freeChampionIds.includes(champion.key)
  //   );
  //   return filterChampion;
  // };

  return (
    <>
      <div className="mb-4 text-white text-2xl mt-3">금주의 챔피언 페이지</div>
      <div className="grid grid-cols-6 gap-4 justify-center text-center">
        {/* 챔피언 렌더링 */}
        {/* {filterChampion.map((champion) => (
          <Card champion={champion} key={champion.id} />
        ))} */}
      </div>
    </>
  );
};

export default RotationPage;
