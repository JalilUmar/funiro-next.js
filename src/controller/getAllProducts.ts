import { client } from "../../sanity/lib/client"


export const getProducts = async () => {
  const res = await client.fetch(`*[_type=="products" ]{
      _id,
      productImageMain,
      productTitle,
      productPrice ,
      productDescription,
  }`)
  return res
}