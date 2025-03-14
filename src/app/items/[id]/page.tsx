const ItemDetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <>
      <div>아이디 값: {params.id}</div>
    </>
  );
};

export default ItemDetailPage;
