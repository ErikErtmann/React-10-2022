import './App.css';
import { Route, Routes,Link } from 'react-router-dom'
import Cart from './pages/Cart';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <div>
      <Link to="/">
       <button>Avalehele</button>
      </Link>
      <Link to="/ostukorv">
       <button>Ostukorvi</button>
      </Link>
    
      <Routes>
        <Route path="" element= { <HomePage/>} />
        <Route path="ostukorv" element = {<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
