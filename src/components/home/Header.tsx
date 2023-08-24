"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { ImCart } from "react-icons/im";



export default function Header() {
    const [isOpen, setIsOpen] = useState(false);


    const products = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
        { id: 3, name: "Product 3", price: 30 },
    ];

    const toggleCart = () => {
        setIsOpen(!isOpen);
    }



    return (
        <header className="flex justify-center items-center py-5 bg-orange-950">
            <section className="w-1/4">
                <h1 className="text-5xl text-white font-sans font-extrabold">Funiro.</h1>
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
                                {products.map((product) => (
                                    <div key={product.id} className="flex bg-slate-400 bg-opacity-40 py-4 px-2 rounded-xl justify-between items-center gap-x-5 mb-3">
                                        <Image className="max-w-[120px] max-h-[120px] " src={'/images/img-1.png'} alt="" height={120} width={120} />
                                        <span className="grid mr-auto font-sans ">
                                            <span className="text-xl font-bold text-orange-800">{product.name}</span>
                                            <span className="text-base font-semibold">${product.price}</span>
                                        </span>

                                        <span>
                                            <button className="text-4xl text-orange-900 hover:scale-105 active:scale-95"><MdDelete /></button>
                                        </span>
                                    </div>
                                ))}

                                <button className=" absolute bottom-3 text-center text-2xl font-sans font-bold text-white bg-orange-900 w-full border-[1px] rounded-lg hover:border-orange-900 px-6 py-3 mt-10 hover:bg-transparent hover:text-orange-900 hover:scale-105 active:scale-100 transition-all" >Proceed to checkout</button>

                            </div>
                        </div>
                    )}
                </div>

            </span>
        </header>
    )
}
