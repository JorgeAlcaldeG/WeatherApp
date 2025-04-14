import { useState, useEffect } from 'react'
import "./css/app.css";
import MainPage from './components/MainPage.jsx';
import DataPage from './components/DataPage.jsx';
import { URL } from './conts.js';
function App() {
  // State para la gestión de los datos
  const [data, setData] = useState({cod:0});
  const [search, setSearch] = useState("");
  function searchData(){
    event.preventDefault();
    var info = event.target[0].value
    setSearch(info);
    event.target[0].value = "";
  }
  useEffect(()=>{
    if(search != ""){
      var link = URL.APIURL+search;
      fetch(link)
        .then(resp => resp.json())
        .then(weatherData => {
          setData(weatherData)
        })
    }
  }, [search])
  return (
      <div className='appContainer'>
          <div className="shadow"></div>
          {data["cod"] == 200 ? <DataPage data={data} func={searchData} />: <MainPage code={data.cod} func={searchData}/> }
      </div>
  )
}

export default App
