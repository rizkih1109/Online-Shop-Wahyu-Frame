import { checkPassword, createAccessToken, createRefreshToken } from "@/lib/helpers/util";
import prisma from "@/lib/prisma/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if(!(user && checkPassword(password, user.password))) throw Error ("email or password is wrong")

    const refreshToken = createRefreshToken({userid: user.id})

    await prisma.user.update({
        where: {email},
        data: {
            refreshToken
        }
    })

    return NextResponse.json({
        email: user.email,
        refreshToken,
        accessToken: createAccessToken({userid: user.id})
    }, {status: 200})

  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      return NextResponse.json({ message: err.message }, { status: 401 });
    }
  }
}
