import Copy from "../Components/Principal/copy";
import Cabecera from "../Components/Detalles/Cabecera";
import Inicio from "../Components/Detalles/Inicio";
import { useLocation } from 'react-router-dom';

export default function () {
    const location = useLocation();
    const id = location.state?.id;
    const imagen = location.state?.imagen;
    return (
        <>
            <Cabecera />
            <div >
                <Inicio Id={id} Imagen={imagen}/>
                <Copy/>
            </div>


        </>
    )
}