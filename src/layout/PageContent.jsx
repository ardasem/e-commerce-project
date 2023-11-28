import React from "react";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import { Switch, Route } from "react-router-dom";

function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <ProductList />
        </Route>
      </Switch>
    </main>
  );
}

export default PageContent;
