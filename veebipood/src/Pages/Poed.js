import {useState, useRef} from "react";
import poedFailist from "../poed.json"

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);
    const nimiRef = useRef();
    const aegRef = useRef();

    const sorteeriAZ = () => {
        poed.sort((a,b) => a.nimi.localeCompare(b.nimi));  
        uuendaPoed(poed.slice());
    }

    const sorteeriZA = () => {
        poed.sort((a,b) => b.nimi.localeCompare(a.nimi));   
        uuendaPoed(poed.slice());
    }

    const filtreeri = () => {
        const vastus = poed.filter(pood => pood.nimi.includes("mäe"));
        uuendaPoed(vastus);
    }

    const muudaSuureks = () => {
       const vastus = poed.map(pood => {return {"nimi": pood.nimi.toUpperCase(), "aeg": pood.aeg}});
       uuendaPoed(vastus);
    }

    const lisa = () => {
        poed.push({"nimi": nimiRef.current.value, "aeg": "8-23"});
        uuendaPoed(poed.slice());
    }

    const kustuta = (number) => {
        poed.splice(number,1);  //kustutamine esimene on mitmendat kustutan, teine on mitu tk kustutan
        uuendaPoed(poed.slice());
    }


    return (
        <div>
            <button onClick={sorteeriAZ}>Sorteeri AZ</button>
            <button onClick={sorteeriZA}>Sorteeri ZA</button>
            <button onClick={filtreeri}>Filtreeri</button>
            <button onClick={muudaSuureks}>Muuda igaüht</button>
            { poed.map((pood, j2rjekorraNumber) => 
                <div key={j2rjekorraNumber}>
                    <div>{pood.nimi}</div> 
                    <div>Lahtiolekuaeg: {pood.aeg}</div> 
                    <button onClick={() => kustuta(j2rjekorraNumber)}>x</button>
                </div>) }
            
            <label>Uue poe nimi</label> <br />
            <input ref={nimiRef} type="text" /> <br />
            <label>Uue poe lahtiolekuaeg</label>
            <input ref={aegRef} type="text" /> <br />
            <button onClick={lisa}>Lisa</button><br />
            
            
            
            {/* <div key={0}>Kristiine</div>
            <div key={1}>Ülemiste</div>
            <div key={2}>Põhja-Tallinn</div>
            <div key={3}>Kesklinn</div>
            <div key={4}>Lasnamäe</div> */}
            <div>--------------------------------------------------------------</div>
            { ["Saab", "Volvo", "BMW"].map((auto,j) => <div key={j}>{auto}</div> ) }
       
         </div> );
}

export default Poed;