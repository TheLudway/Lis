import Portada from "../Components/Principal/Portada"
import SobreMi from "../Components/Principal/SobreMi"
import Copy from "../Components/Principal/copy"
import Herramientas from "../Components/Principal/Herramientas"

export default function Principal(){
    return(
        <>
            <div class="bg-primary">
                <Portada/>
                <SobreMi/>
                <Herramientas/>
                <Copy/>
            </div>
        </>
    )
}