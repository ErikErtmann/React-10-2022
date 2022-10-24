
function VaataArvuteid() {
    const margid = localStorage.getItem("margid");
    const mudelid = localStorage.getItem("mudelid");
    const maksumused = localStorage.getItem("maksumused");

    return (
    <div>
        <div>{margid}</div>
        <div>{mudelid}</div>
        <div>{maksumused}</div>
    </div>)
}

export default VaataArvuteid;