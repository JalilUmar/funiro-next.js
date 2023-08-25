"use client"

import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import Link from "next/link";
import { BsShop } from "react-icons/bs";




export default function ProductDetails({ params }: { params: { id: string } }) {

    const [productData, setProductData] = useState<any>(null);
    // const [addToCart, setAddToCart] = useState(second)
    const [Quantity, setQuantity] = useState(1)

    useEffect(() => {
        const fetchProductData = async () => {
            const res = await client.fetch(`*[_type=="products" && _id == $id]{
                _id,
              productImageMain,
                productTitle ,
                productPrice ,
                productDescription,
            }` , {
                id: params.id
            })
            console.log(res)
            setProductData(res[0]); // Assuming the query returns an array
        };

        fetchProductData();
    }, [params.id]);

    const incrementQuantity = () => {
        if (Quantity < 9) {
            setQuantity(Quantity + 1)
        }
    }
    const decrementQuantity = () => {
        if (Quantity > 1) {
            setQuantity(Quantity - 1)
        }
    }

    const handleAddToCart = async (id: string, title: string, price: number, url: string) => {
        try {
            const res = await fetch('/api/cart', {
                method: "POST",
                body: JSON.stringify({
                    productId: id,
                    productTitle: title,
                    productPrice: price,
                    imageUrl: url,
                    quantity: Quantity
                })
            })
            console.log('added to cart')
            return res
        } catch (error) {
            console.log(`error on handleAddToCart ....`, error)
        }
    }

    return (
        <main>
            {
                productData ? (
                    <section className="flex justify-center my-[100px]">
                        <div className=" inline-block border-[2px] rounded-xl  bg-transparent border-orange-800 px-[60px] py-[80px]">
                            <Image className=" object-contain max-w-[400px] max-h-[400px] h-[400px]" src={urlForImage(productData.productImageMain).url()} alt="" height={400} width={400} />
                        </div>
                        <div className="w-1/3 pl-10">
                            <h1 className="text-4xl font-sans font-bold">{productData.productTitle}</h1>
                            <h2 className="text-xl font-sans font-bold mt-10">Price: <span className="text-3xl">$ {productData.productPrice}</span></h2>

                            <span className=" ">
                                <h3 className=" md:text-xl text-[11px] font-semibold md:mt-[50px] mt-[20px] md:mb-[15px] ">Select Quantity</h3>
                                <span className="flex text-center">
                                    <button className=" md:text-4xl" onClick={() => decrementQuantity()}><AiFillMinusCircle /></button>
                                    <p className="md:text-2xl font-sans font-semibold md:px-8 px-4 md:mx-3 mx-1 border-2 border-orange-900 rounded-lg">{Quantity}</p>
                                    <button className=" md:text-4xl" onClick={() => incrementQuantity()}><AiFillPlusCircle /></button>
                                </span>
                            </span>

                            <button onClick={() => handleAddToCart(productData._id, productData.productTitle, productData.productPrice, urlForImage(productData.productImageMain).url())} className="flex gap-x-3 text-2xl font-sans font-bold text-orange-900 bg-transparent border-[3px] rounded-sm border-orange-900 px-6 py-3 mt-10 hover:bg-orange-900 hover:text-white hover:scale-105 active:scale-100  transition-all" >Add to Cart <BsShop className="mt-1" /> </button>
                        </div>


                    </section>
                ) : (
                    <p className="text-center ">Loading .....</p>
                )

            }
        </main >
    )
}
