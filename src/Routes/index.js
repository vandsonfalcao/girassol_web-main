import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../Pages/Home";
import Consumidor from "../Pages/Consumidor";
import { Home2 } from "../Pages/Home2";
import { Consumidor2 } from "../Pages/Consumidor2";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/consumidor" component={Consumidor} />
      <Route path="/2" component={Home2} />
      <Route path="/consumidor2" component={Consumidor2} />
    </Switch>
  );
};

export default Routes;
