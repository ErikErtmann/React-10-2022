import { useMemo, useEffect, useState } from "react";
// import productsFromFile from "../data/products.json";
import styles from "../css/Cart.module.css";
import { Link } from "react-router-dom";
import config from "../data/config.json";
import ParcelMachines from "../components/cart/ParcelMachines";
import Payment from "../components/cart/Payment";
import { Spinner } from "react-bootstrap";
import { useContext } from "react";
import CartSumContext from "../store/CartSumContext";

function Cart() {
  const cartSS = useMemo(() => JSON.parse(sessionStorage.getItem("cart")) || [],[]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cartSumCtx = useContext(CartSumContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        const cartWithProducts = cartSS.map(element => {
          return {
            "product": json.find(product => product.id === element.product_id), 
            "quantity": element.quantity
          }
        });
        setCart(cartWithProducts.filter(element => element.product !== undefined));
        setIsLoading(false);
      });
  }, [cartSS]);

  const removeFromCart = (productIndex) => {
    cartSS.splice(productIndex, 1); // hilisemaks sessionStorage panekuks
    cart.splice(productIndex, 1); // HTML jaoks
    setCart(cart.slice());
    sessionStorage.setItem("cart", JSON.stringify(cartSS));
    cartSumCtx.setCartSum(calculateCartSum());
  }

  const emptyCart = () => {
    setCart([]);
    sessionStorage.setItem("cart", JSON.stringify([]));
    cartSumCtx.setCartSum("0.00");
  }

  // [{id:12, nimi: "CC"},{id: 23, nimi:"F"}]
  // [{quantity: 2, product: {id:12, nimi: "CC"}},{product: {id: 23, nimi:"F"}, quantity: 4}]

  const decreaseQuantity = (productIndex) => {
    // cart[productIndex].quantity = cart[productIndex].quantity - 1;
    // cart[productIndex].quantity -= 1;
    cartSS[productIndex].quantity--;
    cart[productIndex].quantity--;
    if (cart[productIndex].quantity <= 0) {
      removeFromCart(productIndex);
    }
    setCart(cart.slice());
    sessionStorage.setItem("cart", JSON.stringify(cartSS));
    cartSumCtx.setCartSum(calculateCartSum());
    //[{product: {nimi:"Nobe"}, kogus: 12}, {product: {nimi:"Tesla"}, kogus: 12}][1]
    // {product: {nimi:"Tesla"}, kogus: 12}.kogus = {product: {nimi:"Tesla"}, kogus: 12}.kogus - 1;
  }

  const increaseQuantity = (productIndex) => {
     // cart[productIndex].quantity = cart[productIndex].quantity + 1;
    // cart[productIndex].quantity += 1;
    cartSS[productIndex].quantity++;
    cart[productIndex].quantity++;
    setCart(cart.slice());
    sessionStorage.setItem("cart", JSON.stringify(cartSS));
    cartSumCtx.setCartSum(calculateCartSum());
  }

  const calculateCartSum = () => {
    let cartSum = 0;
    cart.forEach(element => cartSum = cartSum + element.product.price * element.quantity);
    return cartSum.toFixed(2);
  }

  if (isLoading === true) {
    return (<Spinner animation="border" />)
  }

  return ( 
    <div>
      { cart.length > 0 && 
        <div className={styles.cart__top}>
        {/* <div className={styles['cart-top']}>
        <div className={styles.cart-top}> */}
          <button onClick={emptyCart}>Tühjenda ostukorv</button>
          <div>Ostukorvis esemeid: {cart.length} tk</div>
        </div>}
      { cart.map((element, index) => 
        <div className={styles.product} key={index}>
          <img className={styles.image} src={element.product.image} alt="" />
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} €</div>
          <div className={styles.quantity}>
            <img className={styles.button} onClick={() => decreaseQuantity(index)} src={require("../images/minus.png")} alt="" />
            <div>{element.quantity} tk</div>
            <img className={styles.button} onClick={() => increaseQuantity(index)} src={require("../images/add.png")} alt="" />
          </div>
          <div className={styles.sum}>{ (element.product.price * element.quantity).toFixed(2) } €</div>
          <img className={styles.button} onClick={() => removeFromCart(index)} src={require("../images/delete.png")} alt="" />
        </div>)}

     { cart.length > 0 &&
      <div className={styles.cart__bottom}>
       <div>Ostukorvi kogusumma: {calculateCartSum()}</div>

      <ParcelMachines />
      <br />
      <Payment sum={calculateCartSum()} />
     </div>}

      { cart.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid valima</Link> </div> }
    </div> );
}


 /* 1.  [
            {product: {id: 123, name: "esada", price: 32}, quantity: 2},
            {product: {id: 124, name: "esade", price: 35}, quantity: 6}
          ]

        [
          {product_id: 123, quantity: 2},
          {product_id: 124, quantity: 2}
        ]

    */

export default Cart;