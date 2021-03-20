import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./Main";

import Location from "./Location";
import Products from "./Product";
import Login from "./Login";
const Routeing = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/findlocation" component={() => <Location />} />
        <Route path="/product" component={() => <Products />} />
        <Route path="/login" component={() => <Login />} />
        <Route exact path="/" component={() => <Main />} />
      </BrowserRouter>
    </div>
  );
};
export default Routeing;
