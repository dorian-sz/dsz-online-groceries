import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { Subcategory } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name } = body;

    if (!name) new NextResponse("Subcategory name required!", { status: 400 });

    const subcategory = await prismadb.subcategory.create({
      data: {
        name,
      },
    });

    return NextResponse.json(subcategory);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const subcategories: Subcategory[] = await prismadb.subcategory.findMany();

    return NextResponse.json(subcategories);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
