"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete, MdProductionQuantityLimits } from "react-icons/md";
import { ImCart } from "react-icons/im";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { checkOut } from "@/controller/checkout";



export default function Header() {
    const [products, setProducts] = useState<any[]>([])
    const [isOpen, setIsOpen] = useState(false);
    const [deleted, setdeleted] = useState(false)



    useEffect(() => {
        fetch('http://localhost:3000/api/cart', { method: 'GET' })
            .then((res) => res.json())
            .then((data) => setProducts(data))

    }, [products, deleted]);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    }

    const deleteProduct = async (id: any) => {
        const res = await fetch('/api/cart', {
            method: 'DELETE',
            body: JSON.stringify({
                productId: id
            })
        })
    }

    return (
        <header className="flex justify-center items-center py-5 bg-orange-950">
            <section className="w-1/4">
                <Link href={'/'}>
                    <h1 className="text-5xl text-white font-sans font-extrabold">Funiro.</h1>
                </Link>
            </section>

            <section className="w-2/4 flex text-xl justify-center text-white font-semibold gap-x-[50px] text-center ">
                <Link href={'/'} >Home</Link>
                <Link href='/our-designs' >Our Designs</Link>
                <Link href={'/our-designs'} >Shop</Link>
            </section>

            <span className="relative ">

                <div className="flex justify-end p-4">
                    <p className="absolute right-3 bg-blue-500 text-white rounded-full text-[15px] px-[6px] font-semibold">1</p>
                    <button onClick={toggleCart} className="p-4 rounded-full md:text-2xl text-lg text-white inline"><ImCart /></button>
                    {isOpen && (
                        <div className="bg-black w-screen h-screen bg-opacity-40 absolute">
                            <div className="fixed top-0 right-0 h-screen w-1/4 bg-white shadow-2xl shadow-black p-4 transition-all">

                                <div className="flex mt-3 mb-10">

                                    <h2 className="text-2xl font-sans font-bold mb-4">Shopping Cart</h2>
                                    <button onClick={toggleCart} className="ml-auto text-2xl font-sans px-4 pb-[5px]  bg-slate-500 bg-opacity-10 rounded-full">x</button>
                                </div>
                                {products.map((product: any) => (
                                    <div key={product._id} className="flex bg-slate-400 bg-opacity-40 py-4 px-2 rounded-xl justify-between items-center gap-x-5 mb-3">
                                        <Image className="max-w-[120px] max-h-[120px] " src={product.imageUrl} alt="" height={120} width={120} />
                                        <span className="grid mr-auto font-sans ">
                                            <span className="text-xl font-bold text-orange-800">{product.productTitle}</span>
                                            <span className="text-base font-semibold">${product.productPrice}</span>
                                        </span>

                                        <span className="inline-grid">

                                            <button onClick={() => deleteProduct(product.productId)} className="text-3xl text-orange-900 hover:scale-105 active:scale-95 "><MdDelete /></button>
                                            <span>Quantity : {product.quantity}</span>
                                        </span>
                                    </div>
                                ))}

                                <button
                                    onClick={(() => {
                                        checkOut({
                                            lineItem: [{ price: "price_1NixDpAdyFmN12HeUOfNCB1G", quantity: 1 }]
                                        })
                                    })}
                                    className=" absolute bottom-3 text-center text-2xl font-sans font-bold text-white bg-orange-900 w-full border-[1px] rounded-lg hover:border-orange-900 px-6 py-3 mt-10 hover:bg-transparent hover:text-orange-900 hover:scale-105 active:scale-100 transition-all"
                                >Proceed to checkout</button>

                            </div>
                        </div>
                    )}
                </div>

            </span>
        </header>
    )
}
