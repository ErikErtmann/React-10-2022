import { useEffect, useState, useMemo } from "react";
import Button from "react-bootstrap/Button";
import { useTranslation } from 'react-i18next';
import productsFromFile from "../data/products.json";
import "../css/cart.css";

function Cart() {
    const { t } = useTranslation();
    const cartSS = useMemo(() => JSON.parse(sessionStorage.getItem("cart")) || [], []) 
    const [cart, changeCart] = useState([]);
    const [parcelMachines, setParcelMachines] = useState([])

    useEffect(() => {
      fetch("https://www.omniva.ee/locations.json")
      .then(response => response.json())
      .then(json => setParcelMachines(json));
    const cartWithProducts = cartSS.map(element=> {
        return {
            "product": productsFromFile.find(product => product.id === element.product_id), 
            "quantity": element.quantity
        }
    });
    changeCart(cartWithProducts);
  }, [cartSS]);

    const removeFromCart = (productIndex) => {
        cartSS.splice(productIndex, 1); // hilisemaks sessionstorage jaoks
        cart.splice(productIndex,1); // HTML jaoks
        changeCart(cart.slice());
        localStorage.setItem("cart",JSON.stringify(cart));

    }
    
    const emptyCart = () => {
        changeCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
    }

    const calculateCartSum = () => {
        let sum = 0;
        cart.forEach(element=> sum = sum + element.product.price * element.quantity);
        return sum.toFixed(2);
    }


    return (
        <div>
          
          {cart.length > 0 && <div>{t('You currently have')} {cart.length} {t('items in cart with a total of ')}{calculateCartSum()} $ </div>}
          {cart.length === 0 && <div>{t('Your cart is currently empty')}</div>}
          {cart.map((element, index) =>
            <div className="product" key={index}>
              <img className="image" src={element.product.image} alt="" />
              <div className="name" >{element.product.name}</div>
              <div className="price" >{element.product.price}</div>
              <div className="image" >{element.quantity}</div>
              <button className="button" onClick={() => removeFromCart(index)}>-</button>
            </div>) }
        <br/>
        {cart.length > 0 && <div>{t('Total')}: {calculateCartSum()} $</div>}
        {cart.length > 0 && <Button onClick={emptyCart}>{t('Empty Cart')}</Button>}

        <select>
        {parcelMachines
        .filter(element => element.A0_NAME === "EE" && element.ZIP !== "96331")
        .map(element => <option key={element.NAME}>{element.NAME}</option>)}
        </select>
    </div>);
}

export default Cart;