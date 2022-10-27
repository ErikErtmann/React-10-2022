import { useParams } from "react-router-dom";

function YksUudis() {
    const { index } = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
    const found = uudisedLS[index];

    return (
    <div>
      {found}
    </div>
    );
}

export default YksUudis;