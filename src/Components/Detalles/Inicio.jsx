import { useTranslation } from 'react-i18next';
import imgAXA from '../../Assets/imgAXA.png';
import imgWebdef from '../../Assets/imgWebdef.png';
import RenderL from './RenderL';
import RenderE from './RenderE';



export default function Inicio({ Id, Imagen, Link }) {
    const [t] = useTranslation();

    const imagenes = {
        imgAXA,
        imgWebdef,
    };


    const rutaImagen = imagenes[Imagen];

    return (
        <section class="flex pt-13 items-center justify-center">
            <div class="mt-10">
                <h1 class="font-code-bold text-3xl text-center text-black">{t(`${Id}.titulo`)}</h1>
                <a href={Link} target="_blank" rel="noopener noreferrer">
                    <p class="text-center underline text-blue-500" >{t(`${Id}.link`)}</p>
                </a>

                <div class="flex flex-col bg-primary-darkBlue mt-5 ml-5 mb-10 mr-5 md:flex-row md:mt-10 md:ml-20 md:mr-20 md:gap-10  items-center justify-center rounded-2xl p-5 shadow-2xl">
                    <img src={rutaImagen} alt='Imagen de experiencia' class="w-[200px] h-[200px] md:w-[20%] object-cover rounded-2xl border-white border-1" />

                    <div class="w-full pt-5 md:pl-0 md:pr-5 md:pt-0">
                        <h2 class="font-code-bold text-xl text-white pb-5">{t('general.descripcion')}</h2>
                        <p class="font-code text-xs md:text-sm text-white text-justify">
                            {t(`${Id}.d1`)} <br></br><br></br>
                            {t(`${Id}.d2`)} <br></br><br></br>
                            {t(`${Id}.d3`)}
                        </p>
                    </div>

                </div>

                <div class=" md:grid md:grid-cols-2 mb-10 md:pr-20 md:pl-20 md:gap-20">
                    <div class="bg-secundary-lightGreen rounded-2xl m-5 p-5 shadow-2xl">
                        <h1 class=" text-xl text-white mb-5 md:mb-10 font-code-bold text-center">{t('general.lenguajes')}</h1>
                        <RenderL clave={Id} />
                    </div>
                    <div class="bg-secundary-lightGreen rounded-2xl m-5 p-5 shadow-2xl">
                        <h1 class=" text-xl text-white mb-5 md:mb-10 font-code-bold text-center">{t('general.frameworks')}</h1>
                        <RenderE clave={Id} />
                    </div>

                </div>


            </div>

        </section>
    )
}
