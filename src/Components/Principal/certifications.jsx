import imgScrum from '../../Assets/imgScrum.jpg'

export default function Certifications() {
    return (
        <section>
            <div class="flex flex-col justify-center items-center pl-5 pr-5 pt-5" >
                <h1 class="font-code-bold text-secundary-blue text-2xl md:text-3xl sm:text-2xl text-center w-full">Certifications</h1>
            </div>

            <div class="flex flex-wrap justify-center items-center gap-10 pt-10 md:pl-20 md:pr-20">

                <a href="https://www.coursera.org/account/accomplishments/verify/LTWSZ60KR3V6" target="_blank" rel="noopener noreferrer">
                    <div class="flex flex-wrap w-xs h-50 border-2 overflow-hidden border-secundary-blue rounded-2xl ">
                        <div class="flex flex-col fondo-react object-cover bg-cover justify-center items-center bg-center w-full h-full ">
                            <h3 class=" text-2xl font-code-bold text-secundary-white text-center">React Native</h3>
                            <p class="text-sm font-code text-secundary-white text-center">Coursera - Meta | 2024</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.scrum-institute.org/badges/09984443522989" target="_blank" rel="noopener noreferrer">
                    <div class="flex flex-wrap w-xs h-50 border-2 overflow-hidden border-secundary-blue rounded-2xl ">
                        <div class="flex flex-col fondo-scrum object-cover bg-cover justify-center items-center bg-center w-full h-full ">
                            <h3 class=" text-2xl font-code-bold text-secundary-white text-center">Scrum master</h3>
                            <p class="text-sm font-code text-secundary-white text-center">Scrum - Institude | 2024</p>
                        </div>
                    </div>

                </a>

                <a href="https://www.coursera.org/account/accomplishments/verify/LTWSZ60KR3V6" target="_blank" rel="noopener noreferrer">
                    <div class="flex flex-wrap w-xs h-50 border-2 overflow-hidden border-secundary-blue rounded-2xl ">
                        <div class="flex flex-col fondo-react object-cover bg-cover justify-center items-center bg-center w-full h-full ">
                            <h3 class=" text-2xl font-code-bold text-secundary-white text-center">React Native</h3>
                            <p class="text-sm font-code text-secundary-white text-center">Coursera - Meta | 2024</p>
                        </div>
                    </div>
                </a>



            </div>





        </section>
    )
}