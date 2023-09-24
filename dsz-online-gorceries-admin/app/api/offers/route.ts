import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { Offer } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name } = body;
    if (!name) new NextResponse("Offer name required!", { status: 400 });

    const offer = await prismadb.offer.create({
      data: {
        name,
      },
    });

    return NextResponse.json(offer);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const offers: Offer[] = await prismadb.offer.findMany({
      orderBy: { name: "asc" },
    });

    return NextResponse.json(offers);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
