import { useState } from "react"

function LisaTegelane() {
    const [message, setMessage] = useState("Lisa Tegelane!")
    const [n2itaNuppu, uuendaN2itaNuppu] = useState(true);

    function addTegelane() {
        setMessage("Tegelane Lisatud!")
        uuendaN2itaNuppu(false)
    }
    return (<div>
        <div>Sõnum: {message}</div>
        <label>Tegelase nimi</label> <br />
        <input type="text" /> <br />
        { n2itaNuppu === true && <button onClick={() => addTegelane()}>Lisa Uus</button>}


    </div>);

}

export default LisaTegelane;