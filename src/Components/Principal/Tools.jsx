import Visual from "../../Assets/visualLogo.svg"
import Server from "../../Assets/serverLogo.svg"
import Tailwind from "../../Assets/tailwindLogo.svg"
import ReactN from "../../Assets/reactNLogo.svg"
import Jetpack from "../../Assets/JetpackLogo.svg"
import Power from "../../Assets/powerbiLogo.svg"
import SSIS from "../../Assets/SSISLogo.svg"

export default function Tools() {
    return (
        <section class="pb-15">
            <div class="flex flex-col w-full justify-center items-center pl-5 pr-5 pb-5 md:pb-10" >
                <h1 class="font-code-bold text-secundary-blue text-2xl md:text-3xl sm:text-2xl text-center w-full">Tools and FrameWorks</h1>
            </div>

            <div class="flex flex-wrap place-content-between gap-6 md:gap-12 justify-center md:pr-45 md:pl-45 lg:pr-90 lg:pl-90 pb-5">

                <a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white w-40 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition">
                        <img src={Visual} alt="Logo vs code" />
                        <p class="font-code-bold text-primary-darkBlue text-center mt-2">VS Code</p>
                    </div>
                </a>

                <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white w-40 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition">
                        <img src={ReactN} alt="Logo React Native" />
                        <p class="font-code-bold text-primary-darkBlue text-center mt-2">React Native</p>
                    </div>
                </a>

                <a href="https://v2.tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white w-40 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition">
                        <img src={Tailwind} alt="Logo Tailwind" />
                        <p class="font-code-bold text-primary-darkBlue text-center mt-2">Tailwind</p>
                    </div>
                </a> 

                <a href="https://developer.android.com/compose" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white w-40 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition">
                        <img src={Jetpack} alt="Logo JetPack Compose" class="w-[200px]"/>
                        <p class="font-code-bold text-primary-darkBlue text-center mt-2">JP Compose</p>
                    </div>
                </a> 


                <a href="https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white w-40 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition">
                        <img src={Server} alt="Logo SQL Server" />
                        <p class="font-code-bold text-primary-darkBlue text-center mt-2">SQL Server</p>
                    </div>
                </a>

                <a href="https://learn.microsoft.com/en-us/sql/integration-services/sql-server-integration-services?view=sql-server-ver16" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white w-40 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition">
                        <img src={SSIS} alt="SSIS" />
                        <p class="font-code-bold text-primary-darkBlue text-center mt-2">SSIS</p>
                    </div>
                </a>

                <a href="https://learn.microsoft.com/en-us/power-bi/" target="_blank" rel="noopener noreferrer" class="scroll-animation">
                    <div class="scroll-animation bg-white w-40 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition">
                        <img src={Power} alt="Logo Power BI" />
                        <p class="font-code-bold text-primary-darkBlue text-center mt-2">Power BI</p>
                    </div>
                </a>


            </div>

        </section>
    )
}