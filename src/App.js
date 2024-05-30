import React, { Fragment } from 'react';
import Header from './components/layout/header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from "./components/Meals/AvailableMeals";
function App() {
  return (
    <Fragment className="App">
      <Header/>
      <MealsSummary/>
      <AvailableMeals/>
    </Fragment>
  );
}


export default App;






















