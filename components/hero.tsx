import Image from "next/image"

export default function Hero() {
    return (
        <section id="inicio" className="bg-[#2d7eb4]">
            <div className="mx-auto w-5/6 max-w-5xl py-8">
                <div className="bg-[#1E5377]  px-8 pt-8 rounded-2xl flex flex-col md:flex-row-reverse items-center justify-center gap-4 ">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white text-xl md:text-2xl tracking-tighter leading-6 font-bold">
                            Bem-vindo a Praxis Med Brasil
                        </h1>
                        <p className="text-white text-sm tracking-tighter leading-6 max-w-xs">
                            Imagine viver a medicina prática focada na realidade brasileira.
                            A Praxi Med Brasil oportuniza a você esta experiência.
                        </p>
                    </div>
                    <Image src="/doctt.png" alt="" width={400} height={200} />
                </div>
            </div>
        </section>
    )
}