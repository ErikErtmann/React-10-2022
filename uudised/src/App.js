import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';

function App() {
  return (
    <div >
      <Link to ="/">
        <button>Avalehele</button>
      </Link>

      <Link to ="/uudised">
        <button>Uudiste lehele</button>
      </Link>

      <Link to ="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>

      <Link to ="/meist">
        <button>Info meist</button>
      </Link>

      <Link to ="/lisauudis">
        <button>Lisa uudis</button>
      </Link>

      <Routes>
        <Route path= '' element={ <Avaleht/>} />
        <Route path= 'uudised' element={ <Uudised/>} />
        <Route path= 'kontakt' element={ <Kontakt/>} />
        <Route path= 'meist' element={ <Meist/>} />
        <Route path= 'lisauudis' element={<LisaUudis/>} />
      </Routes>
    </div>
  );
}

export default App;
