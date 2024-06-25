import SliderSquad from "./sliderSquad"

export default function About() {

    return (
        <section id="quemsomos" className="bg-[#1E5377]">
            <div className="flex items-center flex-col gap-4 mx-auto w-5/6 max-w-2xl py-8">
                <div className="flex items-center flex-col gap-6">
                    <h1 className="text-center rounded-2xl text-white text-4xl tracking-tighter font-bold">
                        Quem Somos
                    </h1>
                    <p className="text-center text-white text-sm tracking-tighter leading-6 max-w-2xl">
                        A graduação, por si só, <strong>não basta!</strong>
                        <br />
                        <br />
                        A Praxis Med Brasil é uma empresa brasileira que atua na formação acadêmica para graduandos em medicina do exterior, trazendo vivência e imersão do médico em formação para a realidade brasileira através de internato médico no Brasil, em parceria com faculdades brasileiras de medicina.
                        <br />
                        <br />
                        Conhecer as oportunidades para complementar a graduação médica em solo brasileiro é um passo fundamental e assertivo para a conclusão do curso, bem como a capacitação e reconhecimento para sua vida profissional.
                    </p>
                </div>

                <SliderSquad />

                <div className="flex flex-col md:flex-row items-start justify-center gap-8 py-8">
                    <div className="bg-[#2d7eb4] p-8 rounded-2xl flex items-center flex-col gap-4">
                        <h1 className="text-center rounded-2xl text-white text-4xl tracking-tighter font-bold">
                            Visão
                        </h1>
                        <p className="text-center text-white text-sm tracking-tighter leading-6 max-w-60">
                            Prover educação continuada e de qualidade para estudantes do último ano de medicina e integração desses estudantes com instituições brasileiras, por meio de internato médico e cursos de treinamentos, contribuindo para a formação de profissionais altamente capacitados, diferenciados e preparados para enfrentar os desafios do mercado de trabalho.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-start rounded-2xl text-white text-4xl tracking-tighter font-bold">
                            Nossos valores
                        </h1>
                        <p className="flex flex-col gap-2 text-white font-semibold text-sm tracking-tighter leading-6 max-w-2xl">
                            <span>Compromisso com a educação de qualidade</span>
                            <span>Ética e transparência</span>
                            <span>Inovação e tecnologia</span>
                            <span>Foco no estudante</span>
                            <span>Parcerias estratégicas</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}