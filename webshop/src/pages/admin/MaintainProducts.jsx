// import productsFromFile from "../../data/products.json"
import config from "../data/config.json"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react";

function MaintainCategories() {
    const [dbProducts, setDbProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const searchedProduct = useRef();

    useEffect(() => {
      fetch(config.productsDbUrl)
        .then(res => res.json())
        .then(json => {
            setProducts(json);
            setDbProducts(json);
          });
    }, []);

    const deleteProduct = (productClicked) => {
        // const productIndex = productsFromFile.findIndex(element => element.id === productClicked.id);
        // productsFromFile.splice(productIndex, 1);
        // setProducts(productsFromFile.slice());
        //Kui vähendan otsingumootoris, siis jknr-id muutuvad
    }

    const search =() => {
        const result = dbProducts.filter(element => 
          element.name.toLowerCase()
          .includes( searchedProduct.current.value.toLowerCase() ) );
        setProducts(result);
    }

    return ( 
      <div>
        <input ref={searchedProduct} onKeyUp={search} type="text" />
        <span>Total products {products.lenght}</span>
          {products.map((element) => 
            <div key={element.id}>
              <img src={element.image} alt="" />
              <div>{element.name}</div>
              <div>{element.price}</div>
              <Link to ={"/admin/edit-product/" + element.id}>
                <Button>Edit</Button>
              </Link>
              <Button onClick={() => deleteProduct(element)}>Delete</Button>
              
        </div> )}
    </div> );
}

export default MaintainCategories;