import imgAXA from '../../Assets/imgAXA.png'

export default function Exeperiencia() {
    return (
        <section class="mb-10">
            <div class="flex flex-col w-full justify-center items-center pl-5 pr-5 pb-5 md:pb-10 md:pl-5  md:pr-15" >
                <h1 class="font-code-bold text-secundary-blue text-2xl md:text-3xl sm:text-2xl text-center w-full">Projects and Experience</h1>
            </div>

            <div class="flex flex-wrap gap-10 justify-center items-center w-full">


                <div class=" bg-white rounded-sm drop-shadow-xl w-80 overflow-hidden border-2 border-secundary-lightGreen">
                    <img src={imgAXA} alt="AXA Colpatria"className="w-full h-35 object-cover"/>
                    <div class="p-2">
                        <h3 class="text-md font-code-bold text-gray-800">Data Engineer · AXA Colpatria</h3>
                        <p class="text-sm font-code text-gray-500 ">JAN - 2025</p>
                        <p class="text-xs font-code text-left pt-2">Ingeniero de Datos en el área de analítica. Experiencia en procesos ETL, manejo de SQL Server y limpieza de datos con Python.</p>
                    </div>

                    <div class="flex flex-warp gap-2 pb-2 pr-2 pl-2">
                        <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">SQL</h1>
                        <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">ETL</h1>
                        <h1 class=" bg-gray-800 rounded-2xl pt-1 pb-1 pl-3 pr-3 drop-shadow-xl font-code-bold text-sm text-center text-white">Python</h1>
                    </div>
                    
                </div>

            </div>




        </section>
    )
}