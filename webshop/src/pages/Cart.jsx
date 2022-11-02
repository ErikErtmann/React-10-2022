import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useTranslation } from 'react-i18next';

function Cart() {
    const { t } = useTranslation();
    const [cart, changeCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    //Teha sessionStoragest ostukorvi võtmine

    const removeFromCart = (productIndex) => {
        cart.splice(productIndex,1);
        changeCart(cart.slice());
        localStorage.setItem("cart",JSON.stringify(cart));

    }
    
    const emptyCart = () => {
        changeCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
    }

    const calculateCartSum = () => {
        let sum = 0;
        cart.forEach(element=> sum = sum + element.price);
        return sum.toFixed(2);
    }

    return (
        <div>
          
          {cart.length > 0 && <div>{t('You currently have')} {cart.length} {t('items in cart with a total of ')}{calculateCartSum()} $ </div>}
          {cart.length === 0 && <div>{t('Your cart is currently empty')}</div>}
          {cart.map((element, index) =>
            <div key={index}>
              <img src={element.image} alt="" />
              <div>{element.name}</div>
              <div>{element.price}</div>
              <Button onClick={() => removeFromCart(index)}>-</Button>
            </div>) }
        <br/>
        {cart.length > 0 && <div>{t('Total')}: {calculateCartSum()} $</div>}
        {cart.length > 0 && <Button onClick={emptyCart}>{t('Empty Cart')}</Button>}
    </div>);
}

export default Cart;