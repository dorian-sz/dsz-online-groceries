import { NextRequest, NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { Category, Offer, Product } from "@prisma/client";
import axios from "axios";

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams;
    const offerQuery: string = query.get("offer") ?? "";
    const products: Product[] = await prismadb.product.findMany({
      where: {
        offers: {
          some: {
            id: offerQuery,
          },
        },
      },
      include: { unit: true },
    });
    return NextResponse.json(products);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      price,
      nectarPrice,
      image,
      size,
      amount,
      description,
      origin,
      storage,
      categories,
      offers,
      unitId,
    } = body;

    if (
      !name ||
      !price ||
      !nectarPrice ||
      !image ||
      !categories ||
      !offers ||
      !description ||
      !origin ||
      !unitId
    )
      new NextResponse("All product data is required!", { status: 400 });
    console.log(body);
    const product = await prismadb.product.create({
      data: {
        name,
        price,
        nectarPrice,
        image,
        size,
        amount,
        description,
        origin,
        storage,
        categories: { connect: categories },
        offers: { connect: offers },
        unitId,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}
