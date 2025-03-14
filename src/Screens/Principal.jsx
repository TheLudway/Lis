import Portada from "../Components/Principal/Portada"
import SobreMi from "../Components/Principal/SobreMi"
export default function Principal(){
    return(
        <>
            <div class="bg-primary-darkBlue">
                <Portada/>
                <SobreMi/>
            </div>
        </>
    )
}