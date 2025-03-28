import { useState } from "react"
import Git from "../../Assets/githubLogo.svg"
import Linkedin from "../../Assets/linkedinLogo.svg"
import Menu from "../../Assets/menuLogo.svg"


export default function NavBar(){
    const [navegador, setNavegador] = useState(false);
    return(
        <nav class={` ${navegador ? "flex-col": ""}flex flex-wrap justify-center items-center z-50 bg-black p-3`}>
            <button onClick={() => setNavegador(!navegador)}>
                <img src={Menu} alt="Menu Logo" class="w-8 md:hidden"/>
            </button>
            <ul class={` ${navegador ? "flex": "hidden"} md:flex md:flex-row md:justify-center flex-col text-white  gap-10`}>
                <li><a href="#sobre-mi" class="font-code-bold hover:underline">About Me</a></li>
                <li><a href="#herramientas" class="font-code-bold hover:underline">Tool Box</a></li>
                <li><a href="#experiencia" clas class="font-code-bold hover:underline">Proyects and Experience</a></li>
                <li><a href="#certificaciones" class="font-code-bold hover:underline">certifications</a></li>
                <li><a href="#contacto" class="font-code-bold hover:underline">Contact me</a></li>
            </ul>
            <div class={`${navegador ? "hidden": "flex"} justify-center items-center gap-3 ml-auto`}>
                <a href="https://github.com/Nicolis15" target="_blank" rel="noopener noreferrer" >
                    <img src={Git} alt="github Logo" class="w-6"/>
                </a>
                <a href="https://www.linkedin.com/in/nicolasliscruz/" target="_blank" rel="noopener noreferrer" >
                    <img src={Linkedin} alt="github Logo" class="w-8"/>
                </a>
            </div>
        </nav>
    )
}