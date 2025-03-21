import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Provider from "@/provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const metadata: Metadata = {
  title: "SIMPLE LOL WIKI",
  description: "LOL의 정보 확인 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col w-full min-h-screen bg-slate-600">
        <header>
          <nav className="flex justify-between text-1xl bg-slate-700 text-white p-2">
            <Link href={"/"}>홈</Link>
            <Link href={"/champions"}>챔피언 목록</Link>
            <Link href={"/items"}>아이템 목록</Link>
            <Link href={"/rotation"}>챔피언 로테이션</Link>
          </nav>
        </header>
        <Provider>
          <main>{children}</main>
          <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
        <footer className="absolute bottom-0 bg-slate-700 w-full text-center">
          <p className="text-slate-400">League of Legend</p>
        </footer>
      </body>
    </html>
  );
}
