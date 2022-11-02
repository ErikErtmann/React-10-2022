import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import { useTranslation } from 'react-i18next';



function HomePage() {
    const { t } = useTranslation();

    const addToCart = (productClicked) => {
      let cartLS = localStorage.getItem("cart");
      cartLS = JSON.parse (cartLS) || [];
      cartLS.push(productClicked);
      cartLS = JSON.stringify(cartLS);
      localStorage.setItem("cart",cartLS);
        //KODUS EESTI KEELES
    }

  return ( 
    <div>
      {productsFromFile.map(element => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          <Button onClick={() => addToCart(element)}>{t('Add to cart')}</Button>
        </div>)}
    </div> );
}

export default HomePage;