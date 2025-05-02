import "../css/searchInput.css";

export default function SearchInput({searchFunc, style}){
    var contStyle = "searcher"
    if(style == "main"){
        contStyle = "searcherMain"
    }
    return(
        <div className={contStyle}>
            <form onSubmit={searchFunc}>
                <input placeholder="Búsqueda por ciudad" className="searchIcon" type="image" src="/resources/icons/interface/src.svg" alt="" />
                <input className={style} type="text" name="search"/>
            </form>
        </div>
    )
}