import "../css/mainPage.css"
import SearchInput from "./SearchInput.jsx"
import PresetSrc from "./presetSrc.jsx"
// Pagina principal de la web, desde aquí el usuario puede hacer una busqueda inicial y se gestionan errores
export default function MainPage({code, func, presetFunc}){
    return(
        <div className="mainContainer">
            <h1>Bienvenido</h1>
            <p className="cursivaTxt">Descubre el clima de cualquier rincón del mundo</p>
            <p>Prueba a buscar por ciudad o por codigo postal</p>
            <SearchInput searchFunc={func} style={'main'}/>
            <div className="ubiContainer">
                <p>Ubicaciones destacadas</p>
                <div className="presets">
                    <PresetSrc text={"Barcelona"} presetFunc={presetFunc} />
                    <PresetSrc text={"Madrid"} presetFunc={presetFunc} />
                    <PresetSrc text={"Alaska"} presetFunc={presetFunc} />
                    <PresetSrc text={"33200"} presetFunc={presetFunc}  />
                    <PresetSrc text={"Tokio"} presetFunc={presetFunc} />
                    <PresetSrc text={"Seúl"} presetFunc={presetFunc} />
                    <PresetSrc text={"Monterrey"} presetFunc={presetFunc} />
                    {/* <PresetSrc text={"Lima"} presetFunc={presetFunc}  /> */}
                </div>
            </div>
        </div>
    )
}