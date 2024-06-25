"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Image from "next/image";
import { Fragment } from "react";

interface SquadProps {
    image: string;
    name: string;
    charge: string;
}

export default function SliderSquad() {
    const squadList: SquadProps[] = [
        {
            image: "/squad/p12.jpg",
            name: "Dr. Leandro A. Pereira",
            charge: "CEO/Direção Técnica/Gerenciador de cursos"
        },
        {
            image: "/squad/p12.jpg",
            name: "Dr. Marcel M. Almeida",
            charge: "CEO/Direção Administriva/Gerenciador de cursos"
        },
        {
            image: "/squad/p12.jpg",
            name: "Dr. Matheus Veloso",
            charge: "Assessor de Expansão"
        },
        {
            image: "/squad/p12.jpg",
            name: "Dr. Marcos Aguilar",
            charge: "Gerenciador de cursos"
        },
        {
            image: "/squad/p12.jpg",
            name: "Édson R.P. Almeida",
            charge: "Assessor de Finanças"
        },
        {
            image: "/squad/p12.jpg",
            name: "Adão Brum",
            charge: "Assessor Jurídica"
        },
        {
            image: "/squad/p12.jpg",
            name: "Dra. Sophia  Isabel G. Sircs",
            charge: "Serviço de Orientação Acadêmica/ Suporte Administrativo /Atendimento ao Cliente"
        },
    ];

    return (
        <div className="pt-8 pb-4 w-full">
            <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                loop={true}
                keyboard={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    940: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }}
            className="mySwiper"
            >
            {squadList.map((squad, index) => (
                <Fragment key={index}>
                    <SwiperSlide>
                        <div className="flex flex-col items-center">
                            <Image className="rounded-full" src={squad.image} alt="Squad" width={200} height={400} />
                            <p className="mt-3 text-xl text-center font-bold tracking-tighter">{squad.name}</p>
                            <p className="text-center text-xs font-bold uppercase tracking-tighter max-w-40">{squad.charge}</p>
                        </div>
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
        </div >

    );
};
