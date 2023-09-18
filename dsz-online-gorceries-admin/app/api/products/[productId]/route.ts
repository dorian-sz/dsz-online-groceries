import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@prisma/client";

export async function DELETE(
  request: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const product = await prismadb.product.delete({
      where: {
        id: params.productId,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const body = await request.json();
    const { name, price, image, categoryId } = body;
    console.log(body);
    if (!name || !price || !image || categoryId)
      new NextResponse("All product data is required!", { status: 400 });
    const product = await prismadb.product.update({
      where: { id: params.productId },
      data: {
        name,
        price,
        image,
        categoryId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}
