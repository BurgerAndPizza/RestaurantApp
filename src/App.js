import React, { Fragment, useState} from 'react';
import Header from './components/layout/header';
import MealsSummary from './components/Meals/MealsSummary';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCarthandler = () =>{
    setCartIsShown(true);
  };
  const hideCartHandler = () =>{
    setCartIsShown(false);
  };
  return (
    <Fragment className="App">
      
      <Header onShowCart={showCarthandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <MealsSummary/>
      <Meals/>
    
    </Fragment>
  );
}


export default App;






















