import React, { Fragment } from 'react';
import Header from './components/layout/header';
import MealsSummary from './components/Meals/MealsSummary';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Fragment className="App">
      
      <Header/>
      <Cart/>
      <MealsSummary/>
      <Meals/>
    
    </Fragment>
  );
}


export default App;






















