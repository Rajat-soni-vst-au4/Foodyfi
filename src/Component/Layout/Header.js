import React from 'react';
import meals from "../../Assets/meals.jpg";
import classes from "./Header.module.css";

function Header({props}) {
  return (
    <>
        <header className={classes.header}>
            <h1>Foody-Fi</h1>
            <button>Cart</button>
        </header>
        <div className={classes["main-image"]}>
            <img src={meals} alt="food!"/>
        </div>
    </>
  )
}

export default Header