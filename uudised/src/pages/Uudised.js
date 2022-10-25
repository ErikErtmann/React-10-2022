function Uudised() {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

    return (<div>
    <div>See on uudiste leht, nähtav localhost:3000/uudised aadressil</div>
    {uudised.lenght === 0 && <div>Hetkel uudiseid pole! Uuendame peagi.</div>}
    <div> {uudised.map(uudis=> <div>{uudis}</div>)}</div>
    <img src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/03/02132533/tv-news-reporter.jpg" alt="" />
    
    </div> );
}


export default Uudised;