import ProductCard from "@/components/Products/productCard";
import Banner from "@/components/home/Banner";
import { getProducts } from "@/controller/getAllProducts";
import { sanityProducts } from "../../types";

export default async function HomePage() {

  return (
    <main>
      <Banner />



      <ProductCard />
    </main>
  )
}
