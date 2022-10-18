import { useState } from "react";

function Meist() {
    // võtame vastu telefoni ja emaili
    const [telefon, uuendaTelefoni] = useState(localStorage.getItem("telefon") || "Telefoninr pole lisatud");
    const [n2itaEmaili, uuendaN2itaEmaili] = useState(false);

return (
<div>
    <div>Meie telefon: 
        {telefon}
        { telefon.startsWith("+372") === false && telefon !== "Telefoninr pole lisatud" && <button onClick={() => uuendaTelefoni("+372" + telefon)}>Lisa suunakood</button>}
    </div>
    <div>Meie e-mail: 
        { n2itaEmaili === true && localStorage.getItem("email")}
        { n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}> Näita e-maili</button>}
    </div>
</div> );
}

export default Meist;