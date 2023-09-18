import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function DELETE(
  request: Request,
  { params }: { params: { subcategoryId: string } }
) {
  try {
    const subcategory = await prismadb.subcategory.delete({
      where: {
        id: params.subcategoryId,
      },
    });
    return NextResponse.json(subcategory);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { subcategoryId: string } }
) {
  try {
    const body = await request.json();
    const { name } = body;
    if (!name) new NextResponse("Subcategory name required!", { status: 400 });

    const subcategory = await prismadb.subcategory.update({
      where: {
        id: params.subcategoryId,
      },
      data: {
        name: name,
      },
    });
    return NextResponse.json(subcategory);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
