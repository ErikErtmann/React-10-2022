import { Link } from "react-router-dom"

function Uudised() {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

    return (<div>
    <div>See on uudiste leht, nähtav localhost:3000/uudised aadressil</div>
    {uudised.lenght === 0 && <div>Hetkel uudiseid pole! Uuendame peagi.</div>}
    <div>{uudised.map((uudis, index) => 
        <Link to={"/uudis/" + index}>
            <div>{uudis}</div>
        </Link>
        )}</div>
    </div> );
}


export default Uudised;