import Image from "next/image";
import { FaHospital, FaHospitalAlt } from "react-icons/fa";
import { RiHospitalFill } from "react-icons/ri";

export default function Offers() {

    return (
        <section id="oferecemos" className="bg-[#1E5377] text-white">
            <div className="flex items-center flex-col gap-4 mx-auto w-5/6 max-w-5xl py-8">
                <div className="flex items-start flex-col gap-4">
                    <h1 className="mx-auto text-center rounded-2xl text-4xl tracking-tighter font-bold">
                        O que oferecemos:
                    </h1>
                    <h1 className="text-start w-full rounded-2xl text-3xl tracking-tighter font-semibold">
                        O Internato na Prática
                    </h1>
                    <p className="text-start text-sm tracking-tighter leading-6 max-w-2xl">
                        No Brasil, os estudantes de medicina entram no estágio conhecido como "internato médico" nos dois últimos anos da faculdade, onde começam a aplicar na prática os conhecimentos adquiridos. Durante o internato, os estudantes circulam por diversas especialidades médicas, ganhando experiência prática essencial. A Praxis Med Brasil, aproxima e capacita o médico interno a ter esta vivência no Brasil, proporcionando acesso a conhecimento de ponta, experiências internacionais e uma visão ampla de mundo. Objetivamos que nossos estudantes retornem a seus países com expertise, preparados para aplicarem e compartilharem esse conhecimento, elevando o padrão da prática médica aonde quer que estejam.
                    </p>

                    <h1 className="text-start w-full rounded-2xl text-3xl tracking-tighter font-semibold">
                        Suporte jurídico
                    </h1>
                    <p className="text-start text-sm tracking-tighter leading-6 max-w-2xl">
                        Oferecemos, também, suporte jurídico para os médicos recém-formados no exterior, assessorando no processo de revalidação pela tramitação simplificada, por meio de uma parceria com advogados especializados.
                    </p>

                    <div className="flex flex-col">
                        <h1 className="text-start w-full rounded-2xl text-3xl tracking-tighter font-semibold">
                            Cursos e treinamentos
                        </h1>
                        <p className="text-start text-sm tracking-tighter leading-6 max-w-2xl">
                            Cursos conforme demanda e disponibilidade de turmas.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between w-full  items-start md:items-end gap-4">
                        <p className="flex flex-col gap-2 font-semibold text-sm tracking-tighter leading-6 max-w-2xl">
                            <span>Ventilação Mecânica Invasiva e Não Invasiva</span>
                            <span>Direito médico</span>
                            <span>Urgências pediátricas</span>
                            <span>Urgência e emergência Adulto</span>
                            <span>Urgências Cardiológica</span>
                            <span>USG Aplicada na Urgência (Point-of-care US)</span>
                            <span>Urgências Neurológicas</span>
                            <span>Doenças infectocontagiosas</span>
                            <span>Ginecologia e Obstetrícia na Emergência</span>
                            <span>Medicina de família (ESF)</span>
                        </p>

                        <div className="flex flex-col items-center max-w-xl gap-2">
                            <div className="flex gap-2 items-center">
                                <div className="flex flex-col justify-center items-center rounded-2xl p-2 bg-white text-black">
                                    <FaHospitalAlt />
                                    Hospitais
                                </div>
                                <div className="flex flex-col justify-center items-center rounded-2xl p-2 bg-white text-black">
                                    <FaHospital />
                                    UPAs
                                </div>
                                <div className="flex flex-col justify-center items-center rounded-2xl p-2 bg-white text-black">
                                    <RiHospitalFill />
                                    UBSs
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center rounded-2xl p-8 bg-white">
                                <Image className="" src="/unisul.png" alt="" width={150} height={90} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}