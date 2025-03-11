const ChampionDetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <>
      <div>챔피온 개별 페이지</div>
      <div>아이디 값: {params.id}</div>
    </>
  );
};

export default ChampionDetailPage;
