import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";


function HomePage() {

    const addToCart = (productClicked) => {
        //KODUS EESTI KEELES
        // let cart = sessionStorage.geItem("cart");  MIS VAHE ON LET-il ja const-il?       
    }

    return (
    <div>
        {productsFromFile.map(element =>
        <div>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}$</div>
            <Button onClick={() => addToCart(element)}>Lisa ostukorvi</Button>
       </div>)}
    </div>);
}


export default HomePage;