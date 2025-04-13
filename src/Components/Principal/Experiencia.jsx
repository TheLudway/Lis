import imgAXA from '../../Assets/imgAXA.png';
import imglittleLemon from '../../Assets/imglittleLemon.jpg';
import imgParchelo from '../../Assets/imgParchelo.png';
import imgWebdef from '../../Assets/imgWebdef.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Exeperiencia() {
    const [t] = useTranslation();
    const navigate = useNavigate();

    const navegar = (T, I, L) => {
        navigate('/webNicolas/info', {
            state : {
                id :  T,
                imagen: I,
                link: L
            }
        }
        )
    }

    return (
        <section class="mb-10">
            <div class="flex flex-col w-full justify-center items-center pl-5 pr-5 pb-5 md:pb-10" >
                <h1 class="font-code-bold text-secundary-blue text-2xl md:text-3xl sm:text-2xl text-center w-full">{t("experiencia.titulo")}</h1>
            </div>

            <div class="flex flex-wrap place-content-between gap-10 justify-center items-center w-full md:pl-20 md:pr-20">

                <button onClick={() => navegar('axa','imgAXA','https://www.axacolpatria.co/portalpublico-lf/inicio')} class="scroll-animation cursor-pointer">
                    <div class="bg-white rounded-sm drop-shadow-xl w-80 overflow-hidden border-2 border-secundary-lightGreen hover:scale-[1.1] transition">
                        <img src={imgAXA} alt="AXA Colpatria" className="w-full h-40 object-cover" />
                        <div class="p-2">
                            <h3 class="text-md font-code-bold text-gray-800 text-left">Data Engineer · AXA Colpatria</h3>
                            <p class="text-sm font-code text-left text-gray-500 ">JAN - 2025</p>
                            <p class="text-xs font-code text-left pt-2">{t("experiencia.axa")}</p>
                        </div>

                        <div class="flex flex-wrap gap-2 pb-2 pr-2 pl-2">
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">SQL Server</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">SSIS</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">SQL</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">ETL</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">Python</h1>
                        </div>
                    </div>
                </button>

                <a href="https://github.com/Nicolis15/webNicolas" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white rounded-sm drop-shadow-xl w-80 overflow-hidden border-2 border-secundary-lightGreen hover:scale-[1.1] transition">
                        <img src={imgWebdef} alt="AXA Colpatria" className="w-full h-40 object-cover" />
                        <div class="p-2">
                            <h3 class="text-md font-code-bold text-gray-800">Web Page</h3>
                            <p class="text-sm font-code text-gray-500 ">APR - 2025</p>
                            <p class="text-xs font-code text-left pt-2">{t("experiencia.web")}</p>
                        </div>

                        <div class="flex flex-wrap gap-2 pb-2 pr-2 pl-2">
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">React</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">JavaScript</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">HTML</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">Vite</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">Tailwind</h1>
                        </div>
                    </div>
                </a>

                <a href="https://photos.app.goo.gl/dJ8Yk76r5fmD4jBo7" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white rounded-sm drop-shadow-xl w-80 overflow-hidden border-2 border-secundary-lightGreen hover:scale-[1.1] transition">
                        <img src={imgParchelo} alt="AXA Colpatria" className="w-full h-40 object-cover" />
                        <div class="p-2">
                            <h3 class="text-md font-code-bold text-gray-800">Hibryd Mobile app</h3>
                            <p class="text-sm font-code text-gray-500 ">OCT - 2024</p>
                            <p class="text-xs font-code text-left pt-2">{t("experiencia.parchelo")}</p>
                        </div>

                        <div class="flex flex-wrap gap-2 pb-2 pr-2 pl-2">
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">React Native</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">Expo</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">APIs</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">Mongo DB</h1>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/Nicolis15/Little-Lemon" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white rounded-sm drop-shadow-xl w-80 overflow-hidden border-2 border-secundary-lightGreen hover:scale-[1.1] transition">
                        <img src={imglittleLemon} alt="AXA Colpatria" className="w-full h-40 object-cover" />
                        <div class="p-2">
                            <h3 class="text-md font-code-bold text-gray-800">Native Aplication</h3>
                            <p class="text-sm font-code text-gray-500 ">JUN - 2024</p>
                            <p class="text-xs font-code text-left pt-2">{t("experiencia.little")}</p>
                        </div>

                        <div class="flex flex-wrap gap-2 pb-2 pr-2 pl-2">
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">Android</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">JetPack Compose</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">Kotlin</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">Ktor</h1>
                            <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">APIs</h1>
                        </div>
                    </div>
                </a>




            </div>

        </section>
    )
}