import { useState, useRef } from "react";

function LisaArvuti() {
    const [message, setMessage] = useState("Lisa arvuti!");
    const markRef = useRef();
    const mudelRef = useRef();
    const maksumusRef = useRef();
    // const [message, setMessage] = useState("Lisa arvuti!");
    // const [n2itaNuppu, uuendaN2itaNuppu] = useState(true);

    function addProduct() {
        setMessage("Arvuti lisatud!");
        
        let margid = localStorage.getitem("margid");
        margid = JSON.parse(margid) || [];
        margid.push(markRef.current.value);
        margid = JSON.stringify(margid);
        localStorage.setItem("margid", margid);

        let mudelid = localStorage.getitem("margid");
        mudelid = JSON.parse(mudelid) || [];
        mudelid.push(mudelRef.current.value);
        mudelid = JSON.stringify(mudelid);
        localStorage.setItem("mudelid", mudelid);

        let maksumused = localStorage.getitem("maksumused");
        maksumused = JSON.parse(maksumused) || [];
        maksumused.push(maksumusRef.current.value);
        maksumused = JSON.stringify(maksumused);
        localStorage.setItem("maksumused", maksumused);
    }

    return (
    <div>
        <div>Sõnum: {message}</div>
        <label>Mark</label> <br />
        <input type="text" /> <br />
        <label>Mudel</label> <br />
        <input type="text" /> <br />
        <label>Maksumus</label> <br />
        <input type="text" /> <br />
        { message === "Lisa arvuti!" && <button onClick={() => addProduct()}>Sisesta</button>}
    </div>)
}

export default LisaArvuti;