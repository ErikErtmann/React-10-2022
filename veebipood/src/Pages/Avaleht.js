import { useState } from "react";
import { Link } from 'react-router-dom';

function Avaleht() {
    
    const [like, uuendaLike] = useState(false);
    
    const [kogus, uuendaKogus] = useState(5);

    function v2henda() {
        // kogus = kogus - 1;
        uuendaKogus( kogus - 1);
        console.log(kogus); // console kuulub JavS native funkt. hulka
                            // logib konsooli, mis on sulgude vahel
    }
    
    function suurenda() {
        uuendaKogus( kogus + 1 );
    }
    
    function nulli() {
        uuendaKogus(0);
    }

    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];


                                //"Nobe" ja hiljem "Tesla" (1.nobe ring, 2. tesla ring)
    const lisaOstukorvi = (klikitudToode) => {
        let ostukorvLS = localStorage.getItem("ostukorv");
        // 1. null 2."["Nobe"]"
        ostukorvLS = JSON.parse(ostukorvLS) || []; //1. [] 2.["Nobe"]
        ostukorvLS.push(klikitudToode); // 1. [].push("Nobe") => ["Nobe"].push("Tesla")=["Nobe", "Tesla"]
        ostukorvLS = JSON.stringify(ostukorvLS); // 1. "["Nobe"]"" 2."["Nobe", "Tesla"]"
        localStorage.setItem("ostukorv", ostukorvLS); // ostukorv | "["Nobe"]" 2. ostukorv "["Nobe", "Tesla"]"
    }

    return (
        <div>
        {tooted.filter(element => element.aktiivne === true).map((toode, index) => 
            <div key={index}>
                <Link to={"/toode/" + index}>
                    {/* <div>{toode.pilt}</div> */}
                    <img src={toode.pilt} alt="" />
                    <div>{toode.nimi}</div>
                    <div>{toode.hind}</div>
                    {/* <div>{toode.aktiivne}</div> */}
                </Link>
                <button onClick={() =>lisaOstukorvi(toode)}>Lisa ostukorvi</button>
            </div>)}

        <br /><br /><br />

            <button onClick= {() => uuendaLike(!like)}>Vaheta like</button>
            { like === true && <img onClick={() => uuendaLike(false)} src="/liked.svg" alt="" />}
            { like === false && <img onClick={() => uuendaLike(true)} src="/not-liked.svg" alt= "" />}
            <br />


            { kogus > 0  && <button onClick={nulli}>Nulli</button> }
            <br />
            <button disabled={kogus === 0} onClick={v2henda}>-</button>
            <div>KOGUS: {kogus}</div> 
            <button onClick={suurenda}>+</button>
        
    </div>
    );
}

export default Avaleht;