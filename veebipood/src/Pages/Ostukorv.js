import { useState } from "react";

function Ostukorv() { 
    //ütleme ka HTML-ile et uuendust on vaja
    const [ostukorv, muudaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);
    
    const kustuta = (indexClicked) => {
      ostukorv.splice(indexClicked,1);
      muudaOstukorv(ostukorv.slice()); // muudab HTML-i
      localStorage.setItem("ostukorv", JSON.stringify(ostukorv)); //salvestab localStorage-st
    }

    const lisa = (toodeClicked) => {
        ostukorv.push(toodeClicked);
        muudaOstukorv(ostukorv.slice())
        localStorage.setItem("ostukorv", JSON.stringify(ostukorv)); 
    }

    const tyhjenda = () => {
        muudaOstukorv([]);
        localStorage.setItem("ostukorv", JSON.stringify([]));
    }

    const arvutaKogusumma = () => {
      let kogusumma = 0;
      // ostukorv.forEach(element => kogusumma += element.hind); teeb sama mis alumine rida
      ostukorv.forEach(element => kogusumma = kogusumma + element.hind);
      return kogusumma.toFixed(2);
    }

  return ( 
    <div>       
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length > 0 && <div>{ostukorv.length} tk</div>}
      {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
      { ostukorv.map((element, index) =>
        <div key={index}>
            <img src={element.pilt} alt="" />
            <div>{element.nimi}</div>
            <div>{element.hind} €</div>
            <div>{element.aktiivne}</div>
            <button onClick={() => lisa(element)}>+</button>   
            <button onClick={() => kustuta(index)}>-</button>         
        </div>) }

      <div>Kokku: {arvutaKogusumma()} €</div>
    </div> );
}

export default Ostukorv;