import fondo from '../../Assets/bgCode.gif'
import perfil from '../../Assets/perfil.jpg'
export default function Portada() {
    return (
        <section class="h-screen bg-linear-to-r from-primary to-primary-darkBlue md:flex-row">
            <div class="md:flex">
                <div class="flex flex-col items-center md:w-[40%] pt-10">
                    <img src={perfil} alt='Foto de perfil' class=" object-cover w-60 h-60 rounded-full " />
                    <h1 class="font-code-bold pt-5 text-secundary-white text-4xl">Nicolas Lis Cruz</h1>
                </div>
                <div class="flex flex-col justify-center items-center md:w-[60%] p-10 " >
                    <h1 class="font-code-bold text-secundary-white ">About me</h1>
                    <p className="font-code text-secundary-white pt-5 text-center">
                        Nicolás Lis Cruz, ingeniero de sistemas con experiencia en el desarrollo frontend tanto móvil como web. A lo largo de mi carrera, he creado aplicaciones nativas para Android utilizando Kotlin y Jetpack Compose, así como aplicaciones híbridas con React Native.
                        Estoy familiarizado con el desarrollo web utilizando tecnologías como React, Vite y Tailwind CSS, creando interfaces modernas y optimizadas. Además, he trabajado como ingeniero de datos, empleando herramientas como SQL Server, Python, SSIS y Power BI para transformar y visualizar datos de manera efectiva.
                        Me considero una persona constante y disciplinada, siempre en busca de nuevos conocimientos y orientada a alcanzar resultados concretos. Mi objetivo es seguir creciendo como desarrollador y aportar soluciones innovadoras a los proyectos en los que participo.
                    </p>
                </div>
            </div>

        </section>
    )
}