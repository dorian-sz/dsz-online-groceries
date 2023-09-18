import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function DELETE(
  request: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const category = await prismadb.category.delete({
      where: {
        id: params.categoryId,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name) new NextResponse("Category name required!", { status: 400 });

    const category = await prismadb.category.update({
      where: {
        id: params.categoryId,
      },
      data: {
        name: name,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
