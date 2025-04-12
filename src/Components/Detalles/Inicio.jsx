import { useTranslation } from 'react-i18next';
import imgAXA from '../../Assets/imgAXA.png';

export default function Inicio({ Id, Imagen }) {
    const [t] = useTranslation();

    const imagenes = {
        imgAXA,
    };

    const rutaImagen = imagenes[Imagen];

    return (
        <section class="flex pt-13 items-center justify-center">
            <div class="mt-10">
                <h1 class="font-code-bold text-3xl text-center text-black">{t(`${Id}.titulo`)}</h1>

                <div class="flex flex-col bg-primary-darkBlue mt-5 ml-5 mr-5 md:flex-row md:mt-10 md:ml-20 md:mr-20 md:gap-10  items-center justify-center rounded-2xl p-5">
                    <img src={rutaImagen} alt='Imagen de experiencia' class="w-[200px]  md:w-[20%] object-cover rounded-2xl border-white border-1" />

                    <div class="w-full pt-5 md:pl-0 md:pr-5 md:pt-0">
                        <h2 class="font-code-bold text-xl text-white pb-5">{t('general.descripcion')}</h2>
                        <p class="font-code text-xs md:text-sm text-white text-justify">
                            {t(`${Id}.d1`)} <br></br><br></br>
                            {t(`${Id}.d2`)} <br></br><br></br>
                            {t(`${Id}.d3`)}
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}
