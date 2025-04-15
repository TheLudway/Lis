import React from 'react';
import Visual from "../../Assets/visualLogo.svg";
import Server from "../../Assets/serverLogo.svg";
import Tailwind from "../../Assets/tailwindLogo.svg";
import ReactN from "../../Assets/reactNLogo.svg";
import Jetpack from "../../Assets/JetpackLogo.svg";
import Power from "../../Assets/powerbiLogo.svg";
import SSIS from "../../Assets/SSISLogo.svg";
import gitLogo from "../../Assets/gitLogo.svg";


export default function RenderE({ clave }) {
    const skills = {
        axa: [
            {
                nombre: "SSIS",
                imagen: SSIS
            },
            {
                nombre: "SQL Server",
                imagen: Server
            },
            {
                nombre: "Visual Studio",
                imagen: Visual
            },
            {
                nombre: "PowerBI",
                imagen: Power
            },
            {
                nombre: "Git",
                imagen: gitLogo
            },
        ],
        portafolio: [
            {
                nombre: "React Native",
                imagen: ReactN
            },
            {
                nombre: "Visual Studio",
                imagen: Visual
            },
            {
                nombre: "Tailwind",
                imagen: Tailwind
            },

            {
                nombre: "Git",
                imagen: gitLogo
            },
        ],
        parchelo: [
            {
                nombre: "React Native",
                imagen: ReactN
            },
            {
                nombre: "Visual Studio",
                imagen: Visual
            },
            {
                nombre: "Git",
                imagen: gitLogo
            },
        ],

        little: [
            {
                nombre: "JP Compos",
                imagen: Jetpack
            },
            {
                nombre: "Visual Studio",
                imagen: Visual
            },
            {
                nombre: "Git",
                imagen: gitLogo
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
                        className="scroll-animation bg-white w-30 sm:w-30 md:w-35 p-5 rounded-2xl shadow-lg justify-center border-2 border-secundary-blue hover:scale-[1.1] transition"
                    >
                        <img src={habilidad.imagen} alt={habilidad.nombre} />
                        <p className="font-code-bold text-xs md:text-sm text-black text-center mt-2">
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