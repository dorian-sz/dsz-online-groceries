import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function DELETE(
  request: Request,
  { params }: { params: { offerId: string } }
) {
  try {
    const offer = await prismadb.offer.delete({
      where: {
        id: params.offerId,
      },
    });
    return NextResponse.json(offer);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { offerId: string } }
) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name) new NextResponse("Offer name required!", { status: 400 });

    const offer = await prismadb.offer.update({
      where: {
        id: params.offerId,
      },
      data: {
        name: name,
      },
    });
    return NextResponse.json(offer);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
