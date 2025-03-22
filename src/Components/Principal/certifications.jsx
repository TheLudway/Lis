import imgScrum from '../../Assets/imgScrum.jpg'

export default function Certifications() {
    return (
        <section>
            <div class="flex flex-col justify-center items-center pl-5 pr-5 " >
                <h1 class="font-code-bold text-secundary-blue text-2xl md:text-3xl sm:text-2xl text-center w-full">Certifications</h1>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center p-5">


                <div class=" flex drop-shadow-xl place-self-end w-fit rounded-md border-2 border-secundary-lightGreen">
                    <div class="flex flex-wrap  overflow-hidden shadow-lg bg-white p-4 ">
                        <img class=" w-[40%] max-w-60 rounded-md" src={imgScrum} alt="Certificado" />
                        <div class=" flex-1 pl-3 pr-3" >
                            <h3 class=" text-lg font-code-bold text-gray-800">Scrum master</h3>
                            <p class="text-xs md:text- font-code text-gray-500 ">Scrum - Institude | 2024</p>
                        </div>
                    </div>
                </div>

                <div class=" flex drop-shadow-xl place-self-start w-fit rounded-md border-2 border-secundary-lightGreen">
                    <div class="flex flex-wrap  overflow-hidden shadow-lg bg-white p-4 ">

                        <div class="flex-1 pl-3 pr-3" >
                            <h3 class=" text-lg font-code-bold text-gray-800">Scrum master</h3>
                            <p class="text-xs md:text- font-code text-gray-500 ">Scrum - Institude | 2024</p>
                        </div>
                        <img class=" w-[40%] max-w-60 rounded-md self-end" src={imgScrum} alt="Certificado Scrum" />

                    </div>
                </div>

            </div>

            <div class="flex flex-wrap justify-center items-center gap-10">

                <div class="bg-[url(./Assets/imgScrum.jpg)] bg-cover" >
                    <div class="absolute inset-0 bg-black/15"></div>
                    <div>
                        <h3 class=" text-lg font-code-bold ">Scrum master</h3>
                        <p class="text-xs md:text- font-code ">Scrum - Institude | 2024</p>
                    </div>

                </div>

            
                <div class="bg-[url(./Assets/imgScrum.jpg)]">
                    <h1>Hola</h1>
                </div>

            </div>



        </section>
    )
}