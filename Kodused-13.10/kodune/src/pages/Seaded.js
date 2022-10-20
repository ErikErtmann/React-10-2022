import { useState } from "react";

function Seaded() {
    const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));

    const tumeLeht = () => {
        muudaKujundus("dark_mode");
        localStorage.setItem("veebilehe_kujundus", "dark_mode");
    }
    const heleLeht = () => {
        muudaKujundus("light_mode");
        localStorage.setItem("veebilehe_kujundus", "light_mode");
    }
    const varvilineLeht = () => {
        muudaKujundus("colored_mode?");
        localStorage.setItem("veebilehe_kujundus", "colored_mode?");
    }
    
    
    
    return (
    <div>
        <button onClick={tumeLeht}>Tume leht</button>
        <button onClick={heleLeht}>Hele leht</button>
        <button onClick={varvilineLeht}>Värviline leht</button>
        { kujundus ==="dark_mode" && <div>TUME LEHT</div>}
        { kujundus ==="light_mode" && <div>HELE LEHT</div>}
        { kujundus ==="colored_mode?" && <div>VÄRVILINE LEHT</div>}
    </div>);
}

export default Seaded;