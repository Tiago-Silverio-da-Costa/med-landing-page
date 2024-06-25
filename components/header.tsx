"use client";

import Link from "next/link";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";


export default function Header() {
    const [openPopup, setOpenPopup] = useState(false);
    
    return (
        <header className="text-black ">
            <div className="justify-between mx-auto w-5/6 max-w-2xl flex items-center py-4 ">

                <Image src="/logo.png" alt="" width={100} height={100}  />

                <nav className="items-end gap-4 justify-center hidden md:flex">
                    <ul>
                        <li className="flex flex-col items-center">
                            <Link className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#inicio">Ínicio</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="flex flex-col items-center">
                            <Link className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#quemsomos">Quem Somos</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="flex flex-col items-center">
                            <Link className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#nossoobjetivo">Nosso Objetivo</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="flex flex-col items-center">
                            <Link className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#oferecemos">O que oferecemos</Link>
                        </li>
                    </ul>
                </nav>

                {/* mobile */}

                <button
                    aria-label="Menu"
                    type="button"
                    className="md:hidden text-defaultText text-2xl"
                    onClick={() => setOpenPopup(!openPopup)}
                >
                    <ImMenu />
                </button>

                {
                    openPopup && (
                        <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-[#1E5377] z-50 flex flex-col items-center justify-center">
                            <button
                                aria-label="close menu"
                                type="button"
                                className="absolute top-4 right-4 text-textOpacity px-4 py-2 font-bold text-lg text-white cursor-pointer"
                                onClick={() => setOpenPopup(false)}
                            >
                                <IoMdClose />
                            </button>
                            <ul className="flex flex-col gap-4 mt-8">
                                <li className="flex gap-2 items-center justify-end">
                                    <Link onClick={() => setOpenPopup(false)} className="text-white text-xl hover:text-white/65 transition-all duration-300" href="/#inicio">Ínicio</Link>
                                </li>
                                <li className="flex gap-2 items-center justify-end">
                                    <Link onClick={() => setOpenPopup(false)} className="text-white text-xl hover:text-white/65 transition-all duration-300" href="/#quemsomos">Quem Somos</Link>
                                </li>
                                <li className="flex gap-2 items-center justify-end">
                                    <Link onClick={() => setOpenPopup(false)} className="text-white text-xl hover:text-white/65 transition-all duration-300" href="/#nossoobjetivo">Nosso Objetivo</Link>
                                </li>
                                <li className="flex gap-2 items-center justify-end">
                                    <Link onClick={() => setOpenPopup(false)} className=" text-white text-xl hover:text-white/65 transition-all duration-300" href="/#oferecemos">O que oferecemos</Link>
                                </li>
                            </ul>
                        </nav>
                    )
                }


            </div>

        </header >
    )
}