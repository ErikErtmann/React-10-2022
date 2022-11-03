import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import { useTranslation } from 'react-i18next';
import { useState } from "react";



function HomePage() {

    const { t } = useTranslation();

    const [products, setProducts] = useState(productsFromFile.slice());
    const categories = [...new Set(productsFromFile.map(product => product.category))];

    const sortAZ = () => {
      products.sort((a,b) => a.name.localeCompare(b.name));
      setProducts(products.slice());
    }
    const sortZA = () => {
      // products.sort((b,a) => b.name.localCompare(a.name));
      // products.sort((a,b) => -1 * a.name.localCompare(b.name));
      products.sort((a,b) => b.name.localeCompare(a.name));
      setProducts(products.slice());
    }
    const sortPriceAsc = () => {
      products.sort((a,b) => a.price - b.price);
      setProducts(products.slice());
    }
    const sortPriceDesc = () => {
      products.sort((a,b) => b.price - a.price);
      setProducts(products.slice());
    }

    const addToCart = (productClicked) => {
      let cartLS = localStorage.getItem("cart");
      cartLS = JSON.parse (cartLS) || [];
      cartLS.push(productClicked);
      cartLS = JSON.stringify(cartLS);
      localStorage.setItem("cart",cartLS);
    }

    const filterByCategory = (categoryClicked) => {
      const result = productsFromFile.filter(product => product.category === categoryClicked);
    setProducts(result);
    }

  return ( 
    <div>
      {categories.map(element => 
      <button key={element} onClick={() => filterByCategory(element)}>
      {element}
      </button>)}

      <div>Total items {products.length}</div>

      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort Price Asc </button>
      <button onClick={sortPriceDesc}>Sort Price Desc</button>
      {products.map(element => 
        <div key={element.id}>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          <Button onClick={() => addToCart(element)}>{t('Add to cart')}</Button>
        </div>)}
    </div> );
}

export default HomePage;