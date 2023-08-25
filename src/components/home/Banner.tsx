
import Image from "next/image";
import Link from "next/link";
import { BsShop } from "react-icons/bs";

export default function Banner() {

    return (
        <main className="w-full flex py-[100px] bg-orange-200 shadow-xl shadow-slate-600 " >
            <section className="w-1/2 ml-[180px] pl-[100px]">
                <h2 className="text-orange-800 font-sans font-extrabold text-7xl">Best <br /> Furniture <br /> Designz</h2>
                <br />
                <p className="text-red-800 font-sans font-bold text-base">If you are going to use a passage of Lorem Ipsum, you need to be <br /> sure there isn't anything embarrassing hidden in the middle of text.</p>
                
            <Link href={'/our-designs'} >
                <button className="flex gap-x-3 text-2xl font-sans font-bold text-orange-900 bg-transparent border-[1px] rounded-sm border-orange-900 px-6 py-3 mt-10 hover:bg-orange-900 hover:text-white hover:scale-105 active:scale-100  transition-all" >Shop Now <BsShop className="mt-1" /> </button>
            </Link>

            </section>

            <section className="w-1/2 ">
                <Image src={'/images/img-1.png'} alt="" height={700} width={700} />
            </section>
        </main>
    )
}
