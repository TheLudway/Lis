import Portada from "../Components/Principal/Portada"
import SobreMi from "../Components/Principal/SobreMi"
import Copy from "../Components/Principal/copy"
import Herramientas from "../Components/Principal/Herramientas"
import Exeperiencia from "../Components/Principal/Experiencia"
import Contacto from "../Components/Principal/Contacto"
import Certifications from "../Components/Principal/certifications"
import NavBar from "../Components/Principal/NabBar"

export default function Principal() {
    return (
        <>
            <NavBar/>
            <div class="bg-primary ">
                <div id="portada"><Portada /></div>
                <div id="sobre-mi"><SobreMi /></div>
                <div id="herramientas"><Herramientas /></div>
                <div id="experiencia"><Exeperiencia /></div>
                <div id="certificaciones"><Certifications /></div>
                <div id="contacto"><Contacto /></div>
                <Copy />
            </div>
        </>
    )
}