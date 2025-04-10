import "../css/searchInput.css";

export default function SearchInput({searchFunc}){
    return(
        <div className="searcher">
            <form onSubmit={searchFunc}>
                <input placeholder="Búsqueda por ciudad" className="searchIcon" type="image" src="../../resources/icons/interface/src.svg" alt="" />
                <input type="text" name="search"/>
            </form>
        </div>
    )
}