import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { Category } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();

    const { name } = body;

    if (!userId) new NextResponse("Unathorized", { status: 401 });
    if (!name) new NextResponse("Category name required!", { status: 400 });

    const category = await prismadb.category.create({
      data: {
        name,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { userId } = auth();

    if (!userId) new NextResponse("Unauthorized", { status: 401 });

    const categories: Category[] = await prismadb.category.findMany();

    return NextResponse.json(categories);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
