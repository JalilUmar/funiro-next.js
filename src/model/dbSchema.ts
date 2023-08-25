
import { decimal, integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const cartData = pgTable('cartdata', {
    uid: varchar('uid', { length: 255 }).notNull(),
    productId: varchar('product_id', { length: 255 }).notNull(),
    productTitle: varchar('product_title', { length: 255 }).notNull(),
    productPrice: decimal('product_price', { precision: 2, scale: 6 }).notNull(),
    imageUrl: varchar('image_url', { length: 500 }).notNull(),
    quantity: integer('quantity').notNull(),
})