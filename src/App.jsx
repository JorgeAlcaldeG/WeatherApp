import { useState, useEffect } from 'react'
import "./css/app.css";
import MainPage from './components/MainPage.jsx';
import DataPage from './components/DataPage.jsx';
import { URL } from './conts.js';
function App() {
  // State para la gestión de los datos
  const [data, setData] = useState({cod:0});
  const [lastSrc,setLast] = useState([]) // nom, temp, clima
  const [search, setSearch] = useState("");
  function searchData(){
    event.preventDefault();
    var info = event.target[0].value
    setSearch(info);
    event.target[0].value = "";
  }
  function presetData(){
    var info = event.target.innerText
    console.log(info)
    setSearch(info)
  }
  useEffect(()=>{
    if(search != ""){
      var link = URL.APIURL+search;
      fetch(link)
        .then(resp => resp.json())
        .then(weatherData => {
          setData(weatherData)
          if(weatherData.cod == 200 && !lastSrc.some((item) => item.nom === weatherData.city.name)){
            setLast((prev)=>{
              const lista = [...prev, {nom:weatherData.city.name, icon:weatherData.list[0].weather[0].icon, temp:weatherData.list[0].main.temp}]
              return lista.slice(-5)
            });
          }
        })
    }
  }, [search])
  function lastHandler(loc){
    if(loc != ""){
      setSearch(loc)
    }
  }
  return (
      <div className='appContainer'>
          <div className="shadow"></div>
          {data["cod"] == 200 ? <DataPage data={data} func={searchData} lastsrc={lastSrc} lastHandler={lastHandler} />: <MainPage code={data.cod} func={searchData} presetFunc={presetData}/> }
      </div>
  )
}

export default App
