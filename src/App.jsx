import { useState } from 'react'
import "./css/app.css";
import MainPage from './components/MainPage.jsx';
import DataPage from './components/DataPage.jsx';
function App() {
  // State para la gestión de los datos
  const [data, setData] = useState({cod:200});
  return (
      <div className='appContainer'>
          <div className="shadow"></div>
          {data["cod"] == 200 ? <DataPage data={data} />: <MainPage code={data.cod}/> }
      </div>
  )
}

export default App
