import React from "react";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItems = <ul className={classes['cart-items']}>
    {[{ id: "1", name: "burger", amount: "2", price: "89" }].map(
    (item) => <li>{item.name}</li>)}</ul>
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>89</span>
      </div>
      <div className={clases.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}

export default Cart;
