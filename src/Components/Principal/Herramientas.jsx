import htmlLogo from "../../Assets/htmlLogo.svg"
import cssLogo from "../../Assets/cssLogo.svg"
import javaScript from "../../Assets/javascriptLogo.svg"
import reactLogo from "../../Assets/reactLogo.svg"
import pythonLogo from "../../Assets/pythonLogo.svg"
import sqlLogo from "../../Assets/sqlLogo.svg"
import gitLogo from "../../Assets/gitLogo.svg"
import kotlin from "../../Assets/kotlinLogo.svg"

export default function Herramientas() {
    return (
        <section class="pb-10">
            <div>
                <div class="flex flex-col w-full justify-center items-center pl-5 pr-5 pb-5 md:pb-10" >
                    <h1 class="font-code-bold text-secundary-blue text-2xl md:text-3xl sm:text-2xl text-center w-full">Tool Box</h1>
                </div>

                <div class="scroll-animation flex flex-wrap place-content-between gap-6 md:gap-12 justify-center md:pr-45 md:pl-45 lg:pr-90 lg:pl-90 pb-5">

                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                        <div class="bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition">
                            <img src={htmlLogo} alt="Logo HTML" />
                            <p class="font-code-bold text-secundary-white text-center mt-2">HTML</p>
                        </div>
                    </a>
                    <a href="https://www.w3schools.com/CSSref/index.php" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                        <div class="scroll-animation bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue hover:scale-[1.1] transition">
                            <img src={cssLogo} alt="Logo CSS" />
                            <p class="font-code-bold text-secundary-white text-center mt-2">CSS</p>
                        </div>
                    </a>

                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                        <div class="scroll-animation  bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue hover:scale-[1.1] transition">
                            <img src={javaScript} alt="Logo JavaScript" />
                            <p class="font-code-bold text-secundary-white text-center mt-2">JavaScript</p>
                        </div>
                    </a>

                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                        <div class=" scroll-animation bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue hover:scale-[1.1] transition">
                            <img src={reactLogo} alt="Logo React" />
                            <p class="font-code-bold text-secundary-white text-center mt-2">React</p>
                        </div>
                    </a>

                    <a href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                        <div class="scroll-animation bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue hover:scale-[1.1] transition">
                            <img src={pythonLogo} alt="Logo Python" />
                            <p class="font-code-bold text-secundary-white text-center mt-2">Python</p>
                        </div>
                    </a>

                    <a href="https://learn.microsoft.com/es-es/sql/?view=sql-server-ver16" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                        <div class="scroll-animation bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue hover:scale-[1.1] transition">
                            <img src={sqlLogo} alt="Logo SQL" />
                            <p class="font-code-bold text-secundary-white text-center mt-2">SQL</p>
                        </div>
                    </a>

                    <a href="https://kotlinlang.org/docs/home.html" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                        <div class="scroll-animation bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue hover:scale-[1.1] transition">
                            <img src={kotlin} alt="Logo Kotlin" />
                            <p class="font-code-bold text-secundary-white text-center mt-2">Kotlin</p>
                        </div>
                    </a>

                    <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                        <div class="scroll-animation bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue hover:scale-[1.1] transition">
                            <img src={gitLogo} alt="Logo Git" />
                            <p class="font-code-bold text-secundary-white text-center mt-2">Git</p>
                        </div>
                    </a>


                </div>

            </div>
        </section >
    )
}