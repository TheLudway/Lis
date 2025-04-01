import { useState } from "react"
import Git from "../../Assets/githubLogo.svg"
import Linkedin from "../../Assets/linkedinLogo.svg"
import Menu from "../../Assets/menuLogo.svg"


export default function NavBar() {
    const [navegador, setNavegador] = useState(false);
  
    return (
      <nav className="fixed top-0 left-0 w-full bg-black p-3 z-50 shadow-md">
        <div className="flex items-center justify-between">

          <button onClick={() => setNavegador(!navegador)} className="md:hidden">
            <img src={Menu} alt="Menu Logo" className="w-8" />
          </button>
  
          <ul className={`absolute top-full left-0 w-full bg-black p-2 pl-4 transition-all ${
            navegador ? "flex flex-col" : "hidden"
          } md:flex md:flex-row md:static md:w-auto md:bg-transparent gap-6 text-white`}>
            <li><a href="#sobre-mi" className=" sm:text-sm font-code-bold hover:underline">About Me</a></li>
            <li><a href="#herramientas" className="sm:text-sm  font-code-bold hover:underline">Tool Box</a></li>
            <li><a href="#experiencia" className="sm:text-sm font-code-bold hover:underline">Projects and Experience</a></li>
            <li><a href="#certificaciones" className="sm:text-sm font-code-bold hover:underline">Certifications</a></li>
            <li><a href="#contacto" className="sm:text-sm font-code-bold hover:underline">Contact me</a></li>
          </ul>
  
          <div className="flex items-center gap-3">
            <a href="https://github.com/Nicolis15" target="_blank" rel="noopener noreferrer">
              <img src={Git} alt="GitHub Logo" className="w-6" />
            </a>
            <a href="https://www.linkedin.com/in/nicolasliscruz/" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn Logo" className="w-8" />
            </a>
          </div>
        </div>
      </nav>
    );
  }