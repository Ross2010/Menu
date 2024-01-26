import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { BreakfastItems, DinnerItems, LunchItems } from "./Menu";
import Home from "./Home";
import BreakfastDetails from "./BreakfastDetails";
import LunchDetails from "./LunchDetails";
import DinnerDetails from "./DinnerDetails";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/breakfast/:name"element={<BreakfastDetails BreakfastDetails={BreakfastItems} />}/>
          <Route path="/lunch/:name" element={<LunchDetails LunchDetails={LunchItems} />} />
          <Route path="/dinner/:name" element={<DinnerDetails DinnerDetails={DinnerItems} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
