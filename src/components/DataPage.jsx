import "../css/DataPage.css";
import "../conts.js";
export default function DataPage(data){
    const MESES = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ];
    const DIAS = [
        "Lunes", "Martes","Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"
    ]
    const fecha = new Date();
    var displayFecha = `${DIAS[fecha.getDay()]}, ${fecha.getDate()} ${MESES[fecha.getMonth()]} ${fecha.getFullYear()}`;
    var displayYear = `${MESES[fecha.getMonth()]} ${fecha.getFullYear()}`
    console.log(displayFecha)
    return(
        <div className="dataPageContainer">
            <div className="mainDataCont">
                <div className="videCont">
                    <video autoPlay loop muted playsInline>
                        <source src="../../resources/overlays/rain.mp4" type="video/mp4" />
                    </video>
                    <div className="content">
                        <div className="location">
                            <h1>Barcelona</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subCont">
                <h1>{displayYear}</h1>
                <h3>{displayFecha}</h3>
            </div>
        </div>
    )
}