import { useState } from "react"
import { useTranslation } from "react-i18next";
import Git from "../../Assets/githubLogo.svg"
import Linkedin from "../../Assets/linkedinLogo.svg"
import Menu from "../../Assets/menuLogo.svg"
import Spain from "../../Assets/spainLogo.svg"
import Usa from "../../Assets/usaLogo.svg"


export default function NavBar() {
  const [navegador, setNavegador] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-3 z-50 shadow-md">
      <div className="flex items-center justify-between">

        <button onClick={() => setNavegador(!navegador)} className="md:hidden">
          <img src={Menu} alt="Menu Logo" className="w-8" />
        </button>

        <ul className={`absolute top-full left-0 w-full bg-black p-2 pl-4 transition-all ${navegador ? "flex flex-col" : "hidden"
          } md:flex md:flex-row md:static md:w-auto md:bg-transparent gap-6 text-white`}>
          <li><a href="#sobre-mi" className=" sm:text-sm font-code-bold hover:underline">{t("nav.sobre")}</a></li>
          <li><a href="#herramientas" className="sm:text-sm  font-code-bold hover:underline">{t("nav.herramienta")}</a></li>
          <li><a href="#experiencia" className="sm:text-sm font-code-bold hover:underline">{t("nav.proyectos")}</a></li>
          <li><a href="#certificaciones" className="sm:text-sm font-code-bold hover:underline">{t("nav.certificaciones")}</a></li>
          <li><a href="#contacto" className="sm:text-sm font-code-bold hover:underline">{t("nav.contacto")}</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => changeLanguage("es")} className="hover:scale-[1.1] transition">
            <img src={Spain} alt="spainLogo" className="w-8" />
          </button>
          <button onClick={() => changeLanguage("en")} className="hover:scale-[1.1] transition">
            <img src={Usa} alt="spainLogo" className="w-8" />
          </button>
        </div>

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