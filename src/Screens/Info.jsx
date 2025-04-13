import Copy from "../Components/Principal/copy";
import Cabecera from "../Components/Detalles/Cabecera";
import Inicio from "../Components/Detalles/Inicio";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

export default function () {
    const location = useLocation();
    const id = location.state?.id;
    const imagen = location.state?.imagen;
    const link = location.state?.link;

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Cabecera />
            <div >
                <Inicio Id={id} Imagen={imagen} Link={link}/>
                <Copy/>
            </div>


        </>
    )
}