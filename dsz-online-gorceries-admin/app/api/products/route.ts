import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { Category, Offer, Product } from "@prisma/client";
import { connect } from "http2";
import axios from "axios";

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
    const { name, price, image, categories, offers } = body;

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
