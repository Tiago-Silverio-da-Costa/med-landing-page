import SliderSquad from "./sliderSquad"

export default function About() {

    return (
        <section id="quemsomos" className="bg-[#1E5377]">
            <div className="flex items-center flex-col gap-4 mx-auto w-5/6 max-w-2xl py-8">
                <div className="flex items-center flex-col gap-6">
                    <h1 className="text-center rounded-2xl text-white text-4xl tracking-tighter font-bold">
                        Dicta aut
                    </h1>
                    <p className="text-center text-white text-sm tracking-tighter leading-6 max-w-2xl">
                        Aut obcaecati sequi et aperiam dicta aut quia consequuntur qui sunt fugit At officia amet ea soluta dolores et libero internos. Et asperiores quia cum odit asperiores aut possimus necessitatibus et dignissimos dolor sed architecto asperiores? Aut galisum odio ut rerum enim et voluptatem perferendis aut quisquam minima est incidunt consequuntur quo numquam similique.
                    </p>
                </div>

                <SliderSquad />
            </div>
        </section>
    )
}