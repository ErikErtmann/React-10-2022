import { useState, useRef } from "react";
import informatsioon from "../kasutajad.json";

function Kasutajad () {
    const [kasutajad, uuendaKasutajad] = useState (informatsioon);
    
    return(
     <div>
        <div>{kasutajad.map(kasutaja =>
        <div>
            <div>{kasutaja.name}</div>
            <br/>
        </div>)}</div>
     </div> );
}

export default Kasutajad;