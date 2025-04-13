import React from 'react';

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
        ],
        portafolio: [
                    {
                        nombre: "HTML",
                        imagen: htmlLogo
                    },
                    {
                        nombre: "CSS",
                        imagen: cssLogo
                    },
                    {
                        nombre: "JavaScript",
                        imagen: javaScript
                    },
        
                    {
                        nombre: "React",
                        imagen: reactLogo
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
                        className="scroll-animation bg-primary-darkBlue w-30 md:w-35 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition"
                    >
                        <img src={habilidad.imagen} alt={habilidad.nombre} />
                        <p className="font-code-bold text-xs md:text-sm text-secundary-white text-center mt-2">
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
