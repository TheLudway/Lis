export default function NavBar(){
    return(
        <nav class="w-full fixed z-50 bg-black p-3 bg-transparent-">
            <ul class="flex text-white justify-center gap-16">
                <li><a href="#sobre-mi" class="font-code-bold hover:underline">About Me</a></li>
                <li><a href="#herramientas" class="font-code-bold hover:underline">Tool Box</a></li>
                <li><a href="#experiencia" clas class="font-code-bold hover:underline">Proyects and Experience</a></li>
                <li><a href="#certificaciones" class="font-code-bold hover:underline">certifications</a></li>
                <li><a href="#contacto" class="font-code-bold hover:underline">Contact me</a></li>
            </ul>
        </nav>
    )
}