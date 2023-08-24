import { defineType, defineField } from "sanity"

export const products = defineType(
    {
        name: 'products',
        title: 'Products',
        type: 'document',
        fields: [
            defineField(
                {
                    name: 'productImageMain',
                    title: 'Main Product Image',
                    type: 'image'
                }
            ),
            defineField(
                {
                    name: 'productTitle',
                    title: 'Product Title',
                    type: 'string'
                }
            ),
            defineField(
                {
                    name: 'productPrice',
                    title: 'Product Price',
                    type: 'number'
                }
            ),
            defineField(
                {
                    name: 'productDescription',
                    title: 'Product Description',
                    type: 'string'
                }
            ),
        ]
    }
)