import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import Kontakt from "./pages/Kontakt";
import Meist from "./pages/Meist";
import Seaded from "./pages/Seaded";

function App() {
  return (
    <div className="App">
     <button className="nupp">Nupp</button>
     <img className="pilt" src="https://uscar.ee/wp-content/uploads/2019/04/challenger-gt.png" alt="" />
     <p>Väike test+varasem kodutöö</p>
     

    
       <Link to="/">
        <button>Avaleht</button>
       </Link>
       <Link to="/kontakt"> 
        <button>Kontakt</button>
       </Link>
       <Link to="/meist">
        <button>Meist</button>
       </Link>
       <Link to="/seaded">
        <button>Seadetesse</button>
       </Link>
    
     
     
    
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
