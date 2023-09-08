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
