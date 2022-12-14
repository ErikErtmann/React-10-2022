import { Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import Kontakt from "./pages/Kontakt";
import Meist from "./pages/Meist";
import Seaded from "./pages/Seaded";
import { useState } from "react";
import { useRef } from "react";
import NavigationBar from "./components/NavigationBar";


function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei"); 
  const [sonum, muudaSonum] = useState ("");
  const kasutajaNimiRef = useRef();
  const paroolRef =  useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
    muudaSisselogitud("jah");
    muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud");
    } else {
      muudaSonum("Vale parool")
    }
  }
  
  return (
    <div className="App">
      <NavigationBar />

      <div>{sonum}</div>
      { sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label> <br />    
        <input ref={kasutajaNimiRef} type="text" /> <br />
        <label>Parool</label> <br />    
        <input ref={paroolRef} type="password" /> <br />
      </div>}

      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi Sisse</button>}
      { sisselogitud === "jah" && <button onClick={() => muudaSisselogitud("ei")}>Logi Välja</button>}

      <button className="nupp">Nupp</button>
      <img className="pilt" src="https://uscar.ee/wp-content/uploads/2019/04/challenger-gt.png" alt="" />
      <p>Väike test+varasem kodutöö</p>
     
      
    

    
     
       
    
     <Routes>
        <Route path= "" element= {<Avaleht /> } />
        <Route path="kontakt" element={ <Kontakt /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="seaded" element={ <Seaded /> } />
      </Routes>
     
     </div>

  );
}

export default App;
