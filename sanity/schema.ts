import { type SchemaTypeDefinition } from 'sanity'
import { products } from './lib/schemas/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
