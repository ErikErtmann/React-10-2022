// cd ..
// cd folder vms
// npm start


import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import HaldaTooteid from "./pages/HaldaTooteid";
import Meist from "./pages/Meist";
import MuudaToode from "./pages/MuudaToode";
import Poed from "./pages/Poed";
import Seaded from "./pages/Seaded";
import YksikToode from "./pages/YksikToode";



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
        <button className="nupp">Lisa toode</button>
      </Link>
      
      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="halda-tooteid" element={ <HaldaTooteid /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="muuda-toode" element={ <MuudaToode /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="toode" element={ <YksikToode /> } />
      </Routes>
    </div>
  );
}

export default App;
