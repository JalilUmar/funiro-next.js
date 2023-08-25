import { db } from "@/database/drizzle"
import { cartData } from "@/model/dbSchema"
import { and, eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"


const userId = "565e20b6-1e9a-4b4e-a292-f59bf59b4f57"

export const POST = async (req: NextRequest) => {
    const { productId, productTitle, productPrice, imageUrl, quantity } = await req.json()

    try {
        const postData = await db.insert(cartData).values({
            uid: userId,
            productId,
            productTitle,
            productPrice,
            imageUrl,
            quantity
        })
        return NextResponse.json({
            message: "product added to cart successfully",
            postData
        })
    } catch (error) {
        console.log((error as { message: string }).message)
    }
}

export const GET = async (req: NextRequest) => {

    try {
        const res = await db.select().from(cartData).where(eq(cartData.uid, userId))

        return NextResponse.json(res)
    } catch (error) {
        console.log((error as { message: string }).message)
    }
}

export const DELETE = async (req: NextRequest) => {
    const { productId } = await req.json()
    try {
        const delData = await db.delete(cartData).where(and(
            eq(cartData.productId, productId),
            eq(cartData.uid, userId)
        ))
    } catch (error) {
        console.log(`Error deleting product.....`, error)
    }
}
