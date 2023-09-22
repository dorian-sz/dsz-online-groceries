import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { Category, Offer, Product } from "@prisma/client";


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
    const { name, price, image, categories, offers } = body;

    if (!name || !price || !image || !categories)
      new NextResponse("All product data is required!", { status: 400 });

    const prevProduct = await prismadb.product.findUnique({
      where: { id: params.productId },
      include: { categories: true, offers: true },
    });
    const removeOffers = prevProduct?.offers.filter(
      (offer) => !offers.some((newOffer: Offer) => offer.id === newOffer.id)
    );
    const removeCategories = prevProduct?.categories.filter(
      (category) =>
        !categories.some(
          (newCategory: Category) => category.id === newCategory.id
        )
    );
    console.log(removeOffers);
    const product = await prismadb.product.update({
      where: { id: params.productId },
      data: {
        name,
        price,
        image,
        categories: { connect: categories, disconnect: removeCategories },
        offers: {
          connect: offers,
          disconnect: removeOffers,
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}
