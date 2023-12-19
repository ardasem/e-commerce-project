import React from "react";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Team from "../pages/Team";
import ProductPage from "../pages/ProductPage";

function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/shop">
          <ProductList />
        </Route>
        <Route  path="/about">
          <About />
        </Route>
        <Route  path="/team">
          <Team />
        </Route>
        <Route  path="/product">
          <ProductPage />
        </Route>

      </Switch>
    </main>
  );
}

export default PageContent;
