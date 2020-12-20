import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Error from "./components/Error/Error";
import DetailUser from "./components/pages/DetailUser";
import CreateUser from "./components/pages/CreateUser";

/**
 * Renders the components of the app and holds the app state.
 * se encarga de las rutas y
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={"/create"} component={CreateUser} />
        <Route exact path="/find/:id" component={DetailUser} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
