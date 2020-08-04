import React from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
function App() {
  return (
    <Switch>
      <Route exact={true} path={"/"} component={Homepage} />
      <Route exact={true} path={"/shop"} component={ShopPage} />
    </Switch>
  );
}

export default App;
