import { Link,Route, Routes } from 'react-router-dom';
import './App.css';
import Work from "./pages/Work";
import Hobbies from "./pages/Hobbies";
import Courses from "./pages/Courses";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Link to="/">
      <img className="avapilt" src="https://textielmuseum.nl/wp-content/uploads/2019/07/banner-tufting.jpg" alt="" />
      </Link>
      
      <hr></hr>

      <div className="valik">
        <Link to="work">
          <img src="https://i.etsystatic.com/23516277/r/il/b2c1e3/3031717919/il_570xN.3031717919_ng98.jpg" alt=""/>
        </Link>
        <Link to="hobbies"> 
          <img src="https://m.media-amazon.com/images/I/71Xw0jcnAQL.jpg" alt=""/>
        </Link>
        <Link to="courses">
          <img src="https://www.letstuft.com/wp-content/uploads/Duckbill-Scissors-6.jpg" alt=""/>
        </Link>
      </div>

     
      <Routes>
        <Route path= "" element= {<Main /> } />
        <Route path="work" element={ <Work /> } />
        <Route path="courses" element={ <Courses /> } />
        <Route path="hobbies" element={ <Hobbies /> } />
      </Routes>
     
     
     </div>



  );
}

export default App;
