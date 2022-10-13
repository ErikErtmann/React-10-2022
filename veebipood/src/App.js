import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./Pages/Avaleht";
import Lisatoode from "./Pages/LisaToode";
import HaldaTooteid from "./Pages/HaldaTooteid";
import Meist from "./Pages/Meist";
import MuudaTooteid from "./Pages/MuudaToode";
import Poed from "./Pages/Poed";
import Seaded from "./Pages/Seaded";
import YksikToode from "./Pages/YksikToode";
import Ostukorv from "./Pages/Ostukorv";



// ctrl+ä et kommentaari panna
/* <button className="nupp">Nupp</button>
<img className="pilt" src="https://uscar.ee/wp-content/uploads/2019/04/challenger-gt.png" alt="" /> */
/* <button></button> algustäg+lõputäg */
/* <div>Tekst<div><button>Nupp</button></div></div> algustag+lõputag */
/* <img src="" alt="" /> */

function App() {
  return (
    <div className="App">

      <Link to="/">
        <img className="pilt" src="https://uscar.ee/wp-content/uploads/2019/04/challenger-gt.png" alt="" />
      </Link>

      <Link to="/lisa-toode">
        <button className='nupp'>Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
        <button className='nupp'>Ostukorvi</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> }/>
        <Route path="lisa-toode" element={ <Lisatoode />}/>
        <Route path="ostukorv" element={ <Ostukorv />}/>
        <Route path="halda-tooteid" element={ <HaldaTooteid />}/>
        <Route path="meist" element={ <Meist />}/>
        <Route path="muuda-toode" element={ <MuudaTooteid />}/>
        <Route path="poed" element={ <Poed />}/>
        <Route path="seaded" element={ <Seaded />}/>
        <Route path="toode" element={ <YksikToode />}/>
      </Routes>
    </div>
  );
}

export default App;
