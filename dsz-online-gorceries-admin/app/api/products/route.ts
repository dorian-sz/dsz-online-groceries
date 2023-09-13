import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { Product } from "@prisma/client";

export async function GET() {
  try {
    const { userId } = auth();

    if (!userId) new NextResponse("Unauthorized", { status: 401 });

    const products: Product[] = await prismadb.product.findMany();

    return NextResponse.json(products);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}
