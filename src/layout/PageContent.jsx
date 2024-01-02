import React from "react";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Team from "../pages/Team";
import ProductPage from "../pages/ProductPage";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";

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
        <Route  path="/contact">
          <Contact />
        </Route>
        <Route  path="/signup">
          <SignUp />
        </Route>


      </Switch>
    </main>
  );
}

export default PageContent;
