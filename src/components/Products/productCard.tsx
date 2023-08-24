import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { addAbortListener } from "events";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import { sanityProducts } from "../../../types";
import { getProducts } from "@/controller/getAllProducts";




export default async function ProductCard() {
    const data: sanityProducts[] = await getProducts()
    return (
        <>
            <section className="text-center my-[70px] grid gap-y-5">
                <h1 className="font-sans font-extrabold text-5xl text-orange-900">Our Work Furniture</h1>
                <p className="text-orange-800">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteratio</p>
            </section>

            <section className=" w-3/4 grid grid-cols-3 gap-x-5 gap-y-10 mx-auto my-10">
                {
                    data.map((item: any) => {
                        return (
                            <div key={item._id} className=" inline-block mx-auto border-2 rounded-xl py-[60px] border-orange-900 hover:bg-orange-200 transition-all ">
                                <div className="px-[90px]">
                                    <Image className=" object-contain max-w-[200px] max-h-[200px] h-[200px]" src={urlForImage(item.productImageMain).url()} alt="" height={200} width={200} />
                                </div>

                                <div className="grid gap-y-1 mb-3 mt-7 text-left text-xl  font-sans font-semibold pl-5">
                                    <h2>{item.productTitle}</h2>
                                    <h2 className="text-orange-900" >Price: $ {item.productPrice}</h2>
                                </div>
                                <Link href={`/product-details/${item._id}`} className="flex justify-center ">
                                    <button className=" gap-x-3 text-xl font-sans font-bold text-white bg-orange-900 border-[1px] rounded-sm border-orange-900 px-[60px] py-2 mt-10 hover:scale-105 active:scale-100 " >Buy Now </button>
                                </Link>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}
