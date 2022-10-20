import { useRef, useState } from "react";

function Seaded() {
    // keele kuvamist (mis keeles sait on)
    const [keel, uuendaKeel] = useState(localStorage.getItem("veebilehe_keel") || "SS" || null || undefined || "EST");
    const telRef = useRef();
    const emailRef = useRef();
    // salvestame telefoninumbri ja emaili



    // const muudaKeelEST = () => {
    //     uuendaKeel("EST");
    //     localStorage.setItem("veebilehe_keel","EST");
    // }
    // const muudaKeelENG = () => {
    //     uuendaKeel("ENG");
    //     localStorage.setItem("veebilehe_keel","ENG");
    // }
    // const muudaKeelRUS = () => {
    //     uuendaKeel("RUS");
    //     localStorage.setItem("veebilehe_keel","RUS");
    // }

    const muudaKeel = (uusKeel) => {
        uuendaKeel(uusKeel); //uuendahtml
        localStorage.setItem("veebilehe_keel", uusKeel); //salvesta brauserisse
    }



    const sisestaTel = () => {
        localStorage.setItem("telefon", telRef.current.value);
    }
    const sisestaEmail = () => {
        localStorage.setItem("email", emailRef.current.value);
    }

    return (
        <div>
            <div>
            <br /><br />
            <label>Meie telefon</label>
            <input ref={telRef} type="text" />
            <button onClick={sisestaTel}>Sisesta</button>
            <br />
            
            <label>Meie email</label>
            <input ref={emailRef} type="text" />
            <button onClick={sisestaEmail}>Sisesta</button>
            <br />
            </div>

            <br /><br />
            <div>Vali veebilehe keel:</div>
            <button onClick={() => muudaKeel("EST")}>Eesti</button>
            <button onClick={() => muudaKeel("ENG")}>Inglise</button>
            <button onClick={() => muudaKeel("RUS")}>Vene</button>
            { keel === "EST" && <div>Veebilehe keel on eesti</div> }
            { keel === "RUS" && <div>Veebilehe keel on vene</div> }
            { keel === "ENG" && <div>Veebilehe keel on inglise</div> }
        </div>);
}

export default Seaded;