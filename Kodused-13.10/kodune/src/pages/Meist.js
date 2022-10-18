import { useState } from "react";

function Meist() {
    const [message, määraMessage] = useState("Vali mõni tegevus");

    return (
    <div>
        <div>{ message } </div>
        <button onClick={() => määraMessage("Selleks saada meile meil meil@meil.ee")}> Kandideeri meile tööle</button>
        <button onClick={() => määraMessage("Meie kollektiiv lisandub siia peagi")}> Vaata meie töötajaid</button>
        <button onClick={() => määraMessage("Selleks saada meile meil meil@meil.ee")}> Võta meiega ühendust</button>
    </div>
    );
}

export default Meist;