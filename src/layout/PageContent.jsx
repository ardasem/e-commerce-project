import React from "react";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Team from "../pages/Team";

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
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
      </Switch>
    </main>
  );
}

export default PageContent;
