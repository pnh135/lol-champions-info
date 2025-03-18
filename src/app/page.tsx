export default function Home() {
  return (
    <div className="w-full text-center">
      <div className="mb-4 text-white text-2xl mt-3">메인 페이지</div>
      <div className="grid grid-cols-3 text-center items-center justify-center p-3">
        <div className="bg-slate-200">
          <p className="text-lg">가용 챔피언 목록</p>
        </div>
        <div className="bg-slate-200">
          <p className="text-lg">가용 아이템 목록</p>
        </div>
        <div className="bg-slate-200">
          <p className="text-lg">금주의 무료 챔피언</p>
        </div>
      </div>
    </div>
  );
}
