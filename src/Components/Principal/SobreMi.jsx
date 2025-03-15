import perfil from '../../Assets/perfil.jpg'
export default function SobreMi() {
    return (
        <section>
            <div class="grid col-auto md:grid-cols-[25%_1fr]">
                <div class="pl-20 pr-20 pt-5 pb-5  md:p-10">
                    <img src={perfil} alt='foto de perfil' class="w-full object-cover  rounded-full aspect-square border-2 border-secundary-white" />
                </div>

                <div class="flex flex-col justify-center items-center pl-5 pr-5 pb-5 md:pl-5  md:pr-15" >
                    <h1 class="font-code-bold text-secundary-white md:text-3xl sm:text-2xl text-start w-full">About me</h1>
                    <p class="font-code text-secundary-white pt-5 text-start text-xs sm:text-xs md:text-sm">
                    Soy un ingeniero de sistemas apasionado por el desarrollo frontend, tanto en el ámbito móvil como web. A lo largo de mi carrera, he desarrollado aplicaciones nativas para Android con Kotlin y Jetpack Compose, así como aplicaciones híbridas con React Native, creando experiencias fluidas y eficientes.<br></br><br></br>
                    En el desarrollo web, trabajo con tecnologías como React, Vite y Tailwind CSS para construir interfaces modernas, optimizadas y atractivas. Además, he tenido la oportunidad de desempeñarme como ingeniero de datos, utilizando herramientas como SQL Server, Python, SSIS y Power BI para transformar datos en información valiosa.<br></br><br></br>
                    Me considero una persona disciplinada y enfocada en la mejora continua, siempre en busca de nuevos retos y aprendizajes. Mi objetivo es seguir creciendo profesionalmente y aportar soluciones innovadoras a los proyectos en los que participo.<br></br>
                    </p>
                </div>

            </div>
        </section>
    )
}