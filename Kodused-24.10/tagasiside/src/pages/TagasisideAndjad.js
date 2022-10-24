import {useState, useRef} from "react";
import andjateFail from "../nimed.json";

function TagasisideAndjad () {
    const [andjad, uuendaAndjad] = useState(andjateFail);
    const nimiRef = useRef ();


    const sorteeriZA = () => {
        andjad.sort();
        andjad.reverse();
        uuendaAndjad(andjad.slice());
    }
    
    const filtreeriM = () => {
        const tulemus = andjad.filter(andjad => andjad.startsWith("M"));
        uuendaAndjad(tulemus);
    }

    const filtreeri6 = () => {
        const tulemus = andjad.filter(andjad => andjad.length === 6);
        uuendaAndjad(tulemus);
    }

    const filtreeriY = () => {
        const tulemus = andjad.filter(andjad => andjad.endsWith("y"));
        uuendaAndjad(tulemus);
    }

    const muudaK6ik = () => {
        const tulemus = andjad.map((andjad) => andjad + "EST")
        uuendaAndjad(tulemus);
    }

    const lisa = () => {
        andjad.push(nimiRef.current.value)
        uuendaAndjad(andjad.slice());
    }

    const kustuta = (number) => {
        andjad.splice(number,1);
        uuendaAndjad(andjad.slice());
    }




    return ( <div>
        <div> Nimesid on kokku: </div>
        <button onClick={filtreeriM}> Ainult M tähega algavad nimed </button>
        <button onClick={filtreeri6}> Ainult 6 kohalised nimed </button>
        <button onClick={filtreeriY} > Ainult Y tähega lõppevad nimed </button>
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={muudaK6ik}> Kirjuta iga nime ette EST</button>
        
        <br />
        <label> Lisa uus nimi </label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={lisa}>Lisa</button> <br />

        { andjad.map((andja, j2rjekorraNumber) => 
            <div key={j2rjekorraNumber}>
                {andja} <button onClick={() => kustuta(j2rjekorraNumber)}>x</button>
            </div>)}
            
    </div>);
}

export default TagasisideAndjad;