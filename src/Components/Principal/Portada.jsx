import fondo from '../../Assets/bgCode.gif'
import perfil from '../../Assets/perfil.jpg'
export default function Portada(){
    return(
        <div class="bg-primary-darkL flex-wrap">
            <div class='absolute inset-0 flex flex-col items-center justify-cente z-50 p-15'>
                <img src={perfil} alt='foto de perfil' class=' w-55 h-55 object-cover rounded-full shadow-2xl border-2 border-secundary-white'/>
                <h1 class="font-code-bold text-secundary-white text-center text-5xl m-10 shadow-2xl ">Nicolas Lis Cruz</h1>
            </div>
            <div class="flex w-full justify-center">
                <img src={fondo} alt="fondo de codigo" class="w-full min-xl h-auto object-cover"/>
                <img src={fondo} alt="fondo de codigo" class="w-full transform -scale-x-100 h-auto object-cover"/>
            </div>
        </div>
    )
}