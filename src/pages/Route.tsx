import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./Main";

// import Location from "../pages/findLocation.tsx";
// import Product2 from "./Product2";
// import Login from "./Login";
const Routeing = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Route path="/findlocation" component={() => <Location />} />
        <Route path="/product" component={() => <Product2 />} />
        <Route path="/login" component={() => <Login />} /> */}
        <Route exact path="/" component={() => <Main />} />
      </BrowserRouter>
    </div>
  );
};
export default Routeing;
