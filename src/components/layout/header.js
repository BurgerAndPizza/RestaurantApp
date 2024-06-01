import { Fragment } from "react";
import classes from "./header.module.css";
import HeaderCartButton from "./headerCartButton";
const Header = (props) => {
    return(
        <Fragment>
            <header className= {classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src="https://honeybeemeals.com/cdn/shop/files/honey-bee-meals-toronto-gta-meal-delivery_2000x.jpg?v=1708615186" alt="A table full of delecious food!"/>
            </div>
            

        </Fragment>
    ); 
}
export default Header;
