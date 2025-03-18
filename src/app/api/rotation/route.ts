import { ROTATION_URL } from "@/constants/api";
import { rotations } from "@/types/Rotation";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const res = await fetch(`${ROTATION_URL}`, {
    method: "GET",
    headers: {
      "X-Riot-Token": process.env.RIOT_API_KEY,
    },
    next: {
      revalidate: 86400,
    },
  });
  const data: rotations = await res.json();

  return NextResponse.json(data);
}
