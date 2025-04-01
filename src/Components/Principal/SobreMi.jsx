import { useTranslation } from "react-i18next";
import perfil from '../../Assets/perfil.jpg'
export default function SobreMi() {
    const { t} = useTranslation();
    return (
        <section>
            <div class="grid col-auto md:grid-cols-[25%_1fr]">
                <div class="pl-20 pr-20 pt-5 pb-5 md:p-10 scroll-animation">
                    <img src={perfil} alt='foto de perfil' class="w-full object-cover  rounded-full aspect-square border-2 border-secundary-white" />
                </div>

                <div class="flex flex-col justify-center items-center pl-5 pr-5 pb-5 md:pl-5  md:pr-15 scroll-animation" >
                    <h1 class="font-code-bold  text-secundary-blue text-2xl md:text-3xl sm:text-2xl text-start w-full">{t("about.about")}</h1>
                    <p class="font-code text-secundary-white pt-5 text-start text-xs sm:text-xs md:text-sm">
                    {t("about.primero")}<br></br><br></br>
                    {t("about.segundo")}<br></br><br></br>
                    {t("about.tercero")}<br></br>
                    </p>
                </div>

            </div>
        </section>
    )
}