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
            <div class="scroll-animation">
                <div class="flex flex-col w-full justify-center items-center pl-5 pr-5 pb-5 md:pb-10 md:pl-5  md:pr-15" >
                    <h1 class="font-code-bold text-secundary-blue text-2xl md:text-3xl sm:text-2xl text-center w-full">Tool Box</h1>
                </div>

                <div class="flex flex-wrap place-content-between gap-6 md:gap-12 justify-center md:pr-45 md:pl-45 pb-5">

                    <div class="bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue">
                        <img src={htmlLogo} alt="Logo HTML"/>
                        <p class="font-code-bold text-secundary-white text-center mt-2">HTML</p>
                    </div>

                    <div class="bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue">
                        <img src={cssLogo} alt="Logo CSS"/>
                        <p class="font-code-bold text-secundary-white text-center mt-2">CSS</p>
                    </div>
                    
                    <div class="bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue">
                        <img src={javaScript} alt="Logo JavaScript"/>
                        <p class="font-code-bold text-secundary-white text-center mt-2">JavaScript</p>
                    </div>


                    <div class="bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue">
                        <img src={reactLogo} alt="Logo React"/>
                        <p class="font-code-bold text-secundary-white text-center mt-2">React</p>
                    </div>

                    <div class="bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue">
                        <img src={pythonLogo} alt="Logo Python"/>
                        <p class="font-code-bold text-secundary-white text-center mt-2">Python</p>
                    </div>

                    <div class="bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue">
                        <img src={sqlLogo} alt="Logo SQL"/>
                        <p class="font-code-bold text-secundary-white text-center mt-2">SQL</p>
                    </div>

                    <div class="bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue">
                        <img src={kotlin} alt="Logo Kotlin"/>
                        <p class="font-code-bold text-secundary-white text-center mt-2">Kotlin</p>
                    </div>

                    <div class="bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg border-2 border-secundary-blue">
                        <img src={gitLogo} alt="Logo Git"/>
                        <p class="font-code-bold text-secundary-white text-center mt-2">Git</p>
                    </div>


                </div>

            </div>
        </section>
    )
}