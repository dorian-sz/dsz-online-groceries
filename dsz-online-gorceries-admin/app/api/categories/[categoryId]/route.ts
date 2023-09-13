import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function DELETE(
  request: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) new NextResponse("Unauthorized", { status: 401 });

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
    const { userId } = auth();
    const body = await request.json();
    const { name } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
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
