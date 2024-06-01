import classes from "./headerCartButton.module.css";
import React from "react";
import CartIcon from "../Cart/cartIcon";
const headerCartButton = (props) =>{
    return(
        <button className={classes.button} onClick={props.onClick} >
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
}
export default headerCartButton;