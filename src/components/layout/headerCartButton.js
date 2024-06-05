import { useContext } from "react";
import classes from "./headerCartButton.module.css";
import React from "react";
import CartIcon from "../Cart/cartIcon";
import CartContext from "../../store/cart-context";
const headerCartButton = (props) =>{
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);
    return(
        <button className={classes.button} onClick={props.onClick} >
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}
export default headerCartButton;