// Sección de datos, solo se accede si la api devuelve un codigo 200 y hay datos para mostrar

// Importación de componentes
import SubContentToday from "./subContentToday.jsx";
import SearchInput from "./SearchInput.jsx";
// CSS
import "../css/DataPage.css";
// Constantes
import "../conts.js";
export default function DataPage(data){
    // Consts para mostrar fechas
    const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const DIAS = ["Lunes", "Martes","Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    var fecha = new Date();
    var displayFecha = `${DIAS[fecha.getDay()]}, ${fecha.getDate()} ${MESES[fecha.getMonth()]} ${fecha.getFullYear()}`;
    var displayYear = `${MESES[fecha.getMonth()]} ${fecha.getFullYear()}`
    return(
        // Sección de datos actuales
        <div className="dataPageContainer">
            <div className="mainDataCont">
                <div className="videCont">
                    <video autoPlay loop muted playsInline>
                        <source src="../../resources/overlays/rain.mp4" type="video/mp4" />
                    </video>
                    <div className="content">
                        <div className="location">
                            <img src="../../resources/icons/interface/location.webp" alt="location" />
                            <h1>Barcelona</h1>
                        </div>
                        <img className="dataIcon" src="../../resources/icons/weather/09d.svg" alt="clima" />
                        {/* 09d.svg lluvia - 01d dia */}
                    </div>
                </div>
                <div className="todayData">
                    <h1>15º</h1>
                    <SubContentToday info={"prueba"} />
                    <SubContentToday info={"prueba"} />
                    <SubContentToday info={"prueba"} />
                </div>
                
            </div>
            {/* Sección de otros datos */}
            <div className="subCont">
                <div className="topSection">
                    <div className="dateCont">
                        <h1>{displayYear}</h1>
                        <h3>{displayFecha}</h3>
                    </div>
                    <div className="searchCont">
                        <SearchInput />
                    </div>
                </div>
            </div>
        </div>
    )
}