
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const cartData = pgTable('cartdata' , {
    uid : varchar('uid' , {length : 255}).notNull().primaryKey() ,
    productId : varchar('product_id' , {length : 255}).notNull().unique() ,
    quantity :integer('quantity').notNull()
})