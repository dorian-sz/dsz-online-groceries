import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { Category, Offer, Product } from "@prisma/client";
import { connect } from "http2";

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
    const { name, price, image } = body;
    const categories: Category[] = body.categories.map(
      (categoryId: string) => ({
        id: categoryId,
      })
    );
    const offers: Offer[] = body.offers.map((offerId: string) => ({
      id: offerId,
    }));
    if (!name || !price || !image || !categories || !offers)
      new NextResponse("All product data is required!", { status: 400 });
    const product = await prismadb.product.create({
      data: {
        name,
        price,
        image,
        categories: { connect: categories },
        offers: { connect: offers },
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}
