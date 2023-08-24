import { client } from "../../sanity/lib/client"


export const getProductsById = async (id: string) => {
  const res = await client.fetch(`*[_type=="products" && _id == $id]{
      _id,
    productImageMain,
      productTitle ,
      productPrice ,
      productDescription,
  }`)

  return res
}