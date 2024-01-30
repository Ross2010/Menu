import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { BreakfastItems, DinnerItems, LunchItems } from "./Menu";
import Home from "./Home";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Coctails from "./Coctails";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakfast/:name"element={<Breakfast Breakfast={BreakfastItems} />}/>
          <Route path="/lunch/:name" element={<Lunch Lunch={LunchItems} />} />
          <Route path="/dinner/:name" element={<Dinner Dinner={DinnerItems} />} />
          <Route path="/Coctails" element={<Coctails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
