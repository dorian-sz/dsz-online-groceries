import { NextRequest, NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { User } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const user: User | null = await prismadb.user.findUnique({
      where: {
        id: params.userId,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const body = await request.json();

    const { emailaddress, password } = body;
    if (!emailaddress || !password)
      new NextResponse("All user data is required!", { status: 400 });

    const user = await prismadb.user.update({
      where: {
        id: params.userId,
      },
      data: {
        emailaddress,
        password,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const user = await prismadb.user.delete({
      where: {
        id: params.userId,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}
