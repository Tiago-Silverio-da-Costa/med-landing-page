import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className="bg-white mx-auto max-w-2xl w-5/6">
            <div className="flex text-2xl justify-between gap-4 py-8 ">
                <div className="flex items-center gap-4">
                    { /* colocar email */}
                    <Link
                        href="mailto:something@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText hover:text-defaultText/65 transition-all duration-300"
                        aria-label="E-mail da Praxis Med Brasil"
                    >
                        <BiLogoGmail />
                    </Link>
                    {/* colocar numero */}
                    <Link
                        href="https://api.whatsapp.com/send?phone=something"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText hover:text-defaultText/65 transition-all duration-300"
                        aria-label="Whatsapp da Praxis Med Brasil"
                    >
                        <FaWhatsapp />
                    </Link>
                </div>

                <p className="text-lg tracking-tighter font-semibold">
                    © {new Date().getFullYear()} | Praxis Med Brasil
                </p>
            </div>
        </footer >
    )
}