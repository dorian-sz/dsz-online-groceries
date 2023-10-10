import { NextRequest, NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { User } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    const users: User[] = await prismadb.user.findMany({});
    return NextResponse.json(users);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { emailaddress, password } = body;

    if (!emailaddress || !password)
      new NextResponse("All user data is required!", { status: 400 });

    const user = await prismadb.user.create({
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
