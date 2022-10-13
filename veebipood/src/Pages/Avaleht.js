import { useState } from "react";

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


    return (
        <div>
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