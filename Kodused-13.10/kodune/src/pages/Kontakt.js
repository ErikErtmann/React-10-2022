import {useState} from "react";

function Kontakt(){
const [aadress, määraAadress] = useState("Tallinn");
const [telefon, määraTelefon] = useState("55124141");
const [email, määraEmail] = useState("kafalla@fgaf.com");
const [ingliseKeelne, määraIngliseKeelne] = useState ("ei");

const ingliseks = () => {
    määraAadress("London");
    määraTelefon("+29414125");
    määraEmail("londonfon@gmail.don");
    määraIngliseKeelne("jah");
}

return ( 
    <div>
        <div>{aadress}</div>
        <div>{telefon}</div>
        <div>{email}</div>
        <button onClick={ingliseks}>Inglise keelne</button>
        { ingliseKeelne === "jah" && <div>Leht on inglise keelne</div> }
    </div>
    );
}

export default Kontakt;
