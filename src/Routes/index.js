import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import { Home } from "../Pages/Home";
import { Consumidor } from "../Pages/Consumidor";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/consumidor" component={Consumidor} />
    </Switch>
  );
};

export default Routes;
