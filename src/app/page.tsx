export default function Home() {
  return (
    <div className="w-full text-center">
      <div className="mb-4 text-white text-2xl mt-3">메인 페이지</div>
      <iframe
        className="w-full mt-10"
        width={840}
        height={473}
        src="https://www.youtube.com/embed/r6zIGXun57U?si=0P1NVOURWNgkCCJ3?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
