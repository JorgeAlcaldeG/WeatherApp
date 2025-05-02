// Sección de datos, solo se accede si la api devuelve un codigo 200 y hay datos para mostrar
// Importación de componentes
import SubContentToday from "./SubContentToday.jsx";
import SearchInput from "./SearchInput.jsx";
import NextConteiner from "./NextContainer.jsx";
import LastSearch from "./LastSearch.jsx";
// CSS
import "../css/DataPage.css";
// Constantes
import "../conts.js";
export default function DataPage({data, func, lastsrc, lastHandler}){
    var weather = data;
    // console.log(lastHandler)
    var weatherIcon = weather.list[0].weather[0].icon
    weatherIcon = weatherIcon.substring(0,2);
    var dataVideoPath =`../../resources/overlays/${weatherIcon}.mp4`
    var dataIconPath = `../../resources/icons/weather/${weather.list[0].weather[0].icon}.svg`;
    var weatherTemp = weather.list[0].main.temp;
    var feelsLike = weather.list[0].main.feels_like;
    var maxminTemp = weather.list[0].main.temp_max + "º / " + weather.list[0].main.temp_min+"º";
    var humidity = weather.list[0].main.humidity;
    var statusClima = weather.list[0].weather[0].description;
    // Consts para mostrar fechas
    const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const DIAS = ["Domingo","Lunes", "Martes","Miércoles", "Jueves", "Viernes", "Sábado"]
    var fecha = new Date();
    var displayFecha = `${DIAS[fecha.getDay()]}, ${fecha.getDate()} ${MESES[fecha.getMonth()]} ${fecha.getFullYear()}`;
    var displayYear = `${MESES[fecha.getMonth()]} ${fecha.getFullYear()}`;
    // Siguientes dias
    var datosDias = {}
    var today = `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}`
    var numDias = 0;
    weather.list.forEach(item => {
        if(numDias != 4){
            var fecha = item.dt_txt.split(" ")[0];
            if(!datosDias[fecha]){
                datosDias[fecha] = {
                    temps: [],
                    condicion:[],
                    key:[]
                };
                numDias++;
            }
            datosDias[fecha].temps.push(item.main.temp)
            datosDias[fecha].condicion.push(item.weather[0].icon)
            if(datosDias[fecha].key.length == 0){
                datosDias[fecha].key.push(`${weather.city.name}/${fecha}`)
            }
        }
    });

    return(
        // Sección de datos actuales
        <div className="dataPageContainer">
            <div className="mainDataCont">
                <div className="videCont">
                    <video autoPlay loop muted playsInline key={dataVideoPath}>
                        <source src={dataVideoPath} type="video/mp4" />
                    </video>
                    <div className="content">
                        <div className="location">
                            <img src="../../resources/icons/interface/location.webp" alt="location" />
                            <h1>{weather.city.name}</h1>
                        </div>
                        <img className="dataIcon" src={dataIconPath} alt="clima" />
                        {/* 09d.svg lluvia - 01d dia */}
                    </div>
                </div>
                <h2>{statusClima}</h2>
                <div className="todayData">
                    <h1>{weatherTemp}º</h1>
                    <SubContentToday info={`Sensación termica: ${feelsLike}º`} />
                    <SubContentToday info={"Temp. max/min: "+ maxminTemp} />
                    <SubContentToday info={"Humedad: "+humidity+"%"} />
                </div>
                
            </div>
            {/* Sección de otros datos */}
            <div className="subCont">
                <div className="topSection">
                    <div className="dateCont">
                        <h1>{displayYear}</h1>
                        <p>{displayFecha}</p>
                    </div>
                    <div className="searchCont">
                        <SearchInput searchFunc={func}/>
                    </div>
                </div>
                <hr/>
                {/* Sección proximos dias */}
                <div className="nextDayCont">
                    
                    {
                        Object.entries(datosDias).map(data => {
                            return(<NextConteiner data={data} key={data[1].key[0]}/>)
                        })
                    }
                </div>
                <hr />
                <p>Últimas búsquedas</p>
                <div className="lastsrcCont">
                    {lastsrc.map(src =>{
                        return(<LastSearch data={src} key={src.nom} onClickfunc={lastHandler}/>)
                    })}
                </div>
            </div>
        </div>

    )
}