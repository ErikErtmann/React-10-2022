import { useRef, useState } from "react";

function Seaded() {
    // keele kuvamist (mis keeles sait on)
    const [keel, uuendaKeel] = useState(localStorage.getItem("veebilehe_keel") || "SS" || null || undefined || "EST");
    const telRef = useRef();
    const emailRef = useRef();
    // salvestame telefoninumbri ja emaili



    const muudaKeelEST = () => {
        uuendaKeel("EST");
        localStorage.setItem("veebilehe_keel","EST");
    }
    const muudaKeelENG = () => {
        uuendaKeel("ENG");
        localStorage.setItem("veebilehe_keel","ENG");
    }
    const muudaKeelRUS = () => {
        uuendaKeel("RUS");
        localStorage.setItem("veebilehe_keel","RUS");
    }



    const sisestaTel = () => {
        localStorage.setItem("telefon", telRef.current.value);
    }
    const sisestaEmail = () => {
        localStorage.setItem("email", emailRef.current.value);
    }

    return (
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

            <br /><br />
            <div>Vali veebilehe keel:</div>
            <button onClick={muudaKeelEST}>Eesti</button>
            <button onClick={muudaKeelENG}>Inglise</button>
            <button onClick={muudaKeelRUS}>Vene</button>
            { keel === "EST" && <div>Veebilehe keel on eesti</div> }
            { keel === "RUS" && <div>Veebilehe keel on vene</div> }
            { keel === "ENG" && <div>Veebilehe keel on inglise</div> }
        </div>);
}

export default Seaded;