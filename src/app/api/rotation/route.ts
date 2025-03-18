import { ROTATION_URL } from "@/constants/api";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(request: Request) {
  const res = await fetch(`${ROTATION_URL}`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Whale/4.30.291.11 Safari/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: "https://developer.riotgames.com",
      "X-Riot-Token": process.env.RIOT_API_KEY,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
