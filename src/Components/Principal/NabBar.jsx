import Git from "../../Assets/githubLogo.svg"
import Linkedin from "../../Assets/linkedinLogo.svg"

export default function NavBar(){
    return(
        <nav class="flex w-full justify-center items-center z-50 bg-black p-3">
            <ul class="flex text-white justify-center gap-16">
                <li><a href="#sobre-mi" class="font-code-bold hover:underline">About Me</a></li>
                <li><a href="#herramientas" class="font-code-bold hover:underline">Tool Box</a></li>
                <li><a href="#experiencia" clas class="font-code-bold hover:underline">Proyects and Experience</a></li>
                <li><a href="#certificaciones" class="font-code-bold hover:underline">certifications</a></li>
                <li><a href="#contacto" class="font-code-bold hover:underline">Contact me</a></li>
            </ul>
            <div class="flex justify-center items-center place-self-end gap-3">
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