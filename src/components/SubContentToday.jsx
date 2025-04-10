// Recuadros de la sección de datos actuales para mostrar info secundaria
import "../css/subContentToday.css";
export default function SubContentToday({info}){
    return(
        <div className="subContToday">
            <p>{info}</p>
        </div>
    )
}