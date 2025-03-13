import fondo from '../../Assets/bgCode.gif'
import perfil from '../../Assets/perfil.jpg'


export default function Portada() {
    return (
        <section class="bg-linear-to-r from-primary to-primary-darkBlue" >
            <div class="fondo">
                <div class="flex flex-col items-center p-10">
                    <img src={perfil} alt='Foto de perfil' class=" object-cover w-60 h-60 rounded-full  border-2 border-secundary-white" />
                    <h1 class="font-code-bold pt-5 text-secundary-white text-4xl text-center">Nicolas Lis Cruz</h1>
                </div>
                
            </div>

        </section>
    )
}