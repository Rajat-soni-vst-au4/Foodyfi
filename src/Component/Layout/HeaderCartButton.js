import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton() {
  return (
    <>
        <button className={classes.buton}>
            <span className={classes.Icon}><CartIcon /></span>
            <span>Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    </>
  )
}

export default HeaderCartButton