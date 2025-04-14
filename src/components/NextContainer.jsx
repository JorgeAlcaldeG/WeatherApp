import "../css/nextContainer.css"
export default function NextConteiner({data}){
    const DIAS = ["Domingo","Lunes", "Martes","Miércoles", "Jueves", "Viernes", "Sábado"]
    // console.log(data)
    var fecha = new Date(data[0]);
    var temps = data[1].temps
    var media = 0;
    var conds = data[1].condicion
    // Media de temperaturas
    for (let i = 0; i < temps.length; i++) {
        media = media + temps[i]
    }
    media = Math.round(media/temps.length);
    // Clima mas repetido
    var climaLista = {}
    conds.forEach(clima => {
        if(!climaLista[clima]){
            climaLista[clima] = [1]
        }else{
            climaLista[clima][0]++;
        }
    });
    var climaIcon = "";
    var maxNum = 0;
    Object.entries(climaLista).forEach(clima => {
        if(climaIcon == ""){
            climaIcon = clima[0];
            maxNum = clima[1]
        }else{
            if(clima[1] > maxNum){
                climaIcon = clima[0];
                maxNum = clima[1]
            }
        }
        
    })
        var iconPath = `../../resources/icons/weather/${climaIcon}.svg`
    return(
        <div className="nextCont">
            <h1>{DIAS[fecha.getDay()]}</h1>
            <img className="nextIcon" src={iconPath} alt="" />
            <h2>{media}º</h2>
        </div>
    )
}