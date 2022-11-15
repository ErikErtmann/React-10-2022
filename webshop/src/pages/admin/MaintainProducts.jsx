// import productsFromFile from "../../data/products.json"
import config from "../../data/config.json";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

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


    const search =() => {
        const result = dbProducts.filter(element => 
          element.name.toLowerCase()
          .includes( searchedProduct.current.value.toLowerCase() ) );
        setProducts(result);
    }

    const deleteProduct = (productClicked) => {
      const productIndex =dbProducts.findIndex(element => element.id === productClicked.id)
      const updatedProducts = dbProducts.slice();
      updatedProducts.splice(productIndex, 1);
      fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(updatedProducts)})
        .then(() => {
          toast.success("Edukalt kustutatud!", {
            position: 'bottom-right',
            theme: 'dark',
          });
          setProducts(productIndex, 1);
          search();
        });
   
    }

    const changeProductActive = (productIndex) => {
      
    }

    return ( 
      <div>
        <input ref={searchedProduct} onKeyUp={search} type="text" />
        <span>Total products {products.length}</span>
          {products.map((element, index) => 
            <div className={element.active === true ? "active" : "inactive" } key={element.id}>
              <div onClick={() => changeProductActive(index)}>
              <img src={element.image} alt="" />
              <div>{element.name}</div>
              <div>{element.price}</div>
              <div>{element.category}</div>
              <div>{element.description}</div>
              <div>{element.id}</div>
              <Link to ={"/admin/edit-product/" + element.id}>
                <Button>Edit</Button>
              </Link>
              <Button onClick={() => deleteProduct(element)}>Delete</Button>     
        </div>)}
        <ToastContainer />
    </div> );
}

export default MaintainCategories;