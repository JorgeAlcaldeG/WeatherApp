import "../css/presetSrc.css"
export default function presetSrc({text, presetFunc}){

    return(
        <button className="presetBtn" onClick={presetFunc}>{text}</button>
    )
}