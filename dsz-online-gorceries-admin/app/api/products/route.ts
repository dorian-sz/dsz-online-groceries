import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { Product } from "@prisma/client";

export async function GET() {
  try {
    const products: Product[] = await prismadb.product.findMany();

    return NextResponse.json(products);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, image, categoryId, subcategoryId } = body;

    if (!name || !price || !image || categoryId)
      new NextResponse("All product data is required!", { status: 400 });
    const product = await prismadb.product.create({
      data: {
        name,
        price,
        image,
        categoryId,
        subcategoryId,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}
