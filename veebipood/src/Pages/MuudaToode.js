import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

function MuudaToode() {
    const { index } = useParams();
    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
    const leitudToode = tooted[index];
    const nimiRef = useRef();
    const navigate = useNavigate();

    const muuda = () => {
      // ["cats","dogs","cows"][2]= "elephants";
      const uuendatudToode = {
        "nimi":nimiRef.current.value,
        "hind":Number(hindRef.current.value),
        "pilt":piltRef.current.value,
        "aktiivne":aktiivneRef.current.checked
      }
      tooted[index] = uuendatudToode;
      localStorage.setItem("tooted", JSON.stringify(tooted))   
      navigate("/halda-tooteid");
    }

    const hindRef = useRef();
    const piltRef = useRef();
    const aktiivneRef = useRef();

    return (
    <div>
      { leitudToode !== undefined &&
        <div>
            <label>Toote nimi</label> <br />
            <input ref={nimiRef} defaultValue={leitudToode.nimi} type="text" /> <br />
            <label>Toote hind</label> <br />
            <input ref={hindRef} defaultValue={leitudToode.hind} type="number" /> <br />
            <label>Toote pilt</label> <br />
            <input ref={piltRef} defaultValue={leitudToode.pilt} type="text" /> <br />
            <label>Toote aktiivsus</label> <br />
            <input ref={aktiivneRef} defaultChecked={leitudToode.aktiivne} type="checkbox" /> <br/>
            <button onClick={muuda}>Muuda toode</button>
        </div> }
      { leitudToode === undefined && <div>Toodet ei leitud</div>}
    </div>
    );
}

export default MuudaToode;