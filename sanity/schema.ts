import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],   // added schema in [], we can add multiple schemas separated by a comma.
}
