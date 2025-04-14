import "../css/nextContainer.css"
export default function NextConteiner({data}){
    const DIAS = ["Domingo","Lunes", "Martes","Miércoles", "Jueves", "Viernes", "Sábado"]
    const CLIMAS = {'01':"cielo claro",'02':"algo de nubes", '03':"nubes dispersas", '04': "nubes rotas", '09':"chubascos",'10':"lluvia",'11':"tormenta",'13':"nevada ligera",'50':"niebla"}
    var clima = data[1].condicion[0].slice(0,-1);
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
            <p>{CLIMAS[clima]}</p>
            <h2>{media}º</h2>
        </div>
    )
}