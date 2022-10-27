import { useRef, useState } from "react";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const nimiRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      uuendaSonum("Sa ei saa tühja nimega toodet sisestada");
    } else {
      uuendaSonum("Uus toode lisatud: " + nimiRef.current.value);
      let tootedLS = localStorage.getItem("tooted");
      tootedLS = JSON.parse(tootedLS) ||  [];

      const uusToode = {
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value),
        "pilt": piltRef.current.value,
        "aktiivne": aktiivneRef.current.checked,
      }
      tootedLS.push(uusToode);
      tootedLS = JSON.stringify(tootedLS);
      localStorage.setItem("tooted", tootedLS);
    }
  }

  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();


  return ( 
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Uue toote aktiivsus</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      { sonum === "Lisa uus toode!" && <button onClick={lisa}>Sisesta</button>} <br />
    </div>
     );
}

export default LisaToode;