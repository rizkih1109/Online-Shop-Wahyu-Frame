import prisma from "@/lib/prisma/db"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users)
    } catch (err) {
        console.log(err)
        return NextResponse.json({message: 'get users faild'}, {status: 401})
    }
}