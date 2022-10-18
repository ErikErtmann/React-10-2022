import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import LisaTegelane from "./pages/LisaTegelane";
import ValitudTegelased from "./pages/ValitudTegelased";

function App() {
  return (
  <div>
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="LisaTegelane">
        <button>LisaTegelane</button>
      </Link>
      <Link to="ValitudTegelased">
        <button>ValitudTegelased</button>
      </Link>



      <Routes>
        <Route path= "" element= {<Avaleht /> } />
        <Route path="LisaTegelane" element={ <LisaTegelane /> } />
        <Route path="ValitudTegelased" element={ <ValitudTegelased /> } />
      </Routes>



  </div>
  );
}

export default App;
