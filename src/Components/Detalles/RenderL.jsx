import React from 'react';
import Visual from "../../Assets/visualLogo.svg";
import Server from "../../Assets/serverLogo.svg";
import Tailwind from "../../Assets/tailwindLogo.svg";
import ReactN from "../../Assets/reactNLogo.svg";
import Jetpack from "../../Assets/JetpackLogo.svg";
import Power from "../../Assets/powerbiLogo.svg";
import SSIS from "../../Assets/SSISLogo.svg";
import gitLogo from "../../Assets/gitLogo.svg";

import htmlLogo from "../../Assets/htmlLogo.svg";
import cssLogo from "../../Assets/cssLogo.svg";
import javaScript from "../../Assets/javascriptLogo.svg";
import reactLogo from "../../Assets/reactLogo.svg";
import pythonLogo from "../../Assets/pythonLogo.svg";
import sqlLogo from "../../Assets/sqlLogo.svg";
import javaLogo from "../../Assets/javaLogo.svg";
import kotlin from "../../Assets/kotlinLogo.svg";

export default function RenderL({ clave }) {
    const skills = {
        axa: [
            {
                nombre: "SQL",
                imagen: sqlLogo
            },
            {
                nombre: "Python",
                imagen: pythonLogo
            },
        ]
    };

    const habilidades = skills[clave] || [];

    return (
        <div class="flex flex-wrap gap-10 justify-center">
            {habilidades.length > 0 ? (
                habilidades.map((habilidad, index) => (
                    <div
                        key={index}
                        className="scroll-animation bg-primary-darkBlue w-35 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition"
                    >
                        <img src={habilidad.imagen} alt={habilidad.nombre} />
                        <p className="font-code-bold text-secundary-white text-center mt-2">
                            {habilidad.nombre}
                        </p>
                    </div>
                ))
            ) : (
                <p>No se encontraron habilidades para esta clave.</p>
            )}
        </div>
    );
}
