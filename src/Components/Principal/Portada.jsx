import fondo from '../../Assets/bgCode.gif'
import perfil from '../../Assets/perfil.jpg'
export default function Portada(){
    return(
        <div class="relative bg-primary-darkL flex-wrap shadow-2xl">
            <div class='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-50 p-5'>
                <div class="w-55 h-55 rounded-full overflow-hidden">
                    <img src={perfil} alt="foto de perfil" class="w-full h-full object-cover rounded-full shadow-2xl border-2 border-secundary-white"/>
                </div>
                <h1 className="font-code-bold text-secundary-white text-center m-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl animate-dimlight">Nicolas Lis Cruz</h1>
            </div>
            <div class="flex w-full justify-center">
                <img src={fondo} alt="fondo de codigo" class="w-full min-xl h-auto object-cover"/>
                <img src={fondo} alt="fondo de codigo" class="w-full transform -scale-x-100 h-auto object-cover"/>
            </div>
        </div>
    )
}