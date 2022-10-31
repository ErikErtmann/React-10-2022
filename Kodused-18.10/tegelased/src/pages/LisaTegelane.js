import { useState,useRef } from "react"

function LisaTegelane() {
    const [message, setMessage] = useState("Lisa Tegelane!")
    const nimiRef = useRef();
    // const [n2itaNuppu, uuendaN2itaNuppu] = useState(true);

    const addTegelane = () => {
      if (nimiRef.current.value === "")  {
        setMessage("Tühja nimega ei saa sisestada");
      } else {
        setMessage("Tegelane lisatud");
      }
    }

    // function addTegelane() {
    //     setMessage("Tegelane Lisatud!")
    //     uuendaN2itaNuppu(false)
    
    return (<div>
        <div>Sõnum: {message}</div>
        <label>Tegelase nimi</label> <br />
        <input ref ={nimiRef} type="text" /> <br />
        <button onClick={() => addTegelane()}>Lisa Uus</button>


    </div>);

}

export default LisaTegelane;