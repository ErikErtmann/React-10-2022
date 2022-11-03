import { useRef, useState } from "react";
import productsFromFile from "../../data/products.json"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

function MaintainCategories() {
    const [products, setProducts] = useState(productsFromFile.slice());
    const searchedProduct = useRef();

    const deleteProduct = (productIndex) => {
        products.splice(productIndex, 1);
        setProducts(products.slice());
        //Kui vähendan otsingumootoris, siis jknr-id muutuvad
    }

    const search =() => {
        const result = productsFromFile.filter(element => 
          element.name.toLowerCase()
          .includes( searchedProduct.current.value.toLowerCase() ) );
        setProducts(result);
    }

    return ( 
      <div>
        <input ref={searchedProduct} onKeyUp={search} type="text" />
        <span>Total products {products.lenght}</span>
          {products.map((element,index) => 
            <div key={element.id}>
              <img src={element.image} alt="" />
              <div>{element.name}</div>
              <div>{element.price}</div>
              <Link to ={"/admin/edit-product/" + element.id}>
                <Button>Edit</Button>
              </Link>
              <Button onClick={() => deleteProduct(index)}>Delete</Button>
              
        </div> )}
    </div> );
}

export default MaintainCategories;