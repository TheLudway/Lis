import programingLogo from '../../Assets/logoProgramacion.svg'


export default function Portada() {
    return (
        <section class=" g-linear-to-r from-primary to-primary-darkBlue pt-14 md:pt-18" >
            <div class="fondo">
                <div class="flex flex-col items-center justify-center pt-20 pb-30">
                    <img src={programingLogo} alt='logo programacion' class="w-30 md:w-40 fill-secundary-white"/>
                    <h1 class="font-code-bold pt-5 text-secundary-white text-2xl md:text-4xl text-center ">Nicolas Lis Cruz</h1>
                    <h3 class="font-code text-secundary-white text-center text-xs">software developer and data engineer</h3>
                </div>
            </div>

        </section>
    )
}