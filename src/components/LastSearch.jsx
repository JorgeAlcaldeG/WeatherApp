import "../css/lastSrc.css"
export default function LastSearch({data, onClickfunc}){
    var dataIconPath = `/resources/icons/weather/${data.icon}.svg`;
    return(
        <div className="lastSrc" onClick={()=>{onClickfunc(data.nom)}}>
            <div className="srcInfo">
                <p>{data.nom}</p>
                <h3>{data.temp}º</h3>
            </div>
            <div className="srcIcon">
                <img src={dataIconPath} className="lastIcon"/>
            </div>
        </div>
    )
}