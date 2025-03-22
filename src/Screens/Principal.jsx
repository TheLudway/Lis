import Portada from "../Components/Principal/Portada"
import SobreMi from "../Components/Principal/SobreMi"
import Copy from "../Components/Principal/copy"
import Herramientas from "../Components/Principal/Herramientas"
import Exeperiencia from "../Components/Principal/Experiencia"
import Contacto from "../Components/Principal/Contacto"
import Certifications from "../Components/Principal/certifications"

export default function Principal(){
    return(
        <>
            <div class="bg-primary ">
                <Portada/>
                <SobreMi/>
                <Herramientas/>
                <Exeperiencia/>
                <Certifications/>
                <Contacto/>
                <Copy/>
            </div>
        </>
    )
}