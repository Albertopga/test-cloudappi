import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error from "./components/Error/Error";
import DetailUser from "./components/pages/DetailUser";

/**
 * Renders the components of the app and holds the app state.
 * se encarga de las rutas y
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={DetailUser} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
