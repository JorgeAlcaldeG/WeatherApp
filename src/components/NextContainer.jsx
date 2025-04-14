import "../css/nextContainer.css"
export default function NextConteiner({data}){
    const DIAS = ["Domingo","Lunes", "Martes","Miércoles", "Jueves", "Viernes", "Sábado"]
    console.log(data)
    var fecha = new Date(data[0]);
    var temps = data[1].temps
    var media = 0;
    var conds = data[1].condicion
    for (let i = 0; i < temps.length; i++) {
        media = media + temps[i]
    }
    media = Math.round(media/temps.length);
    return(
        <div className="nextCont">
            <h1>{DIAS[fecha.getDay()]}</h1>
            <img className="nextIcon" src="../../resources/icons/weather/13d.svg" alt="" />
            <h2>{media}º</h2>
        </div>
    )
}