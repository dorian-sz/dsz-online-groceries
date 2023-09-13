import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function DELETE(request: Request, params: { productId: string }) {
  try {
    const { userId } = auth();

    if (!userId) new NextResponse("Unauthorized", { status: 401 });

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
