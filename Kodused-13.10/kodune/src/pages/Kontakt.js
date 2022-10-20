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
const tagasi = () => {
    määraAadress("Tallinn");
    määraTelefon("+55124141");
    määraEmail("fgaf@fgaf.com");
    määraIngliseKeelne("ei");    
}

return ( 
    <div>
        <div>{aadress}</div>
        <div>{telefon}</div>
        <div>{email}</div>
        { ingliseKeelne === "ei" && <button onClick={ingliseks}>Välismaal</button>}
        { ingliseKeelne === "jah" && <button onClick={tagasi}>Eestis</button>}
        { ingliseKeelne === "jah" && <div>Leht on inglise keelne</div> }
        { ingliseKeelne === "ei" && <div>Leht on eesti keelne</div> }
    </div>
    );
}

export default Kontakt;
