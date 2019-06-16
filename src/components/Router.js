import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";
import RegistrationPage from "./registration-page";
import LandingPage from "./landing-page";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
      <Route path="/login" component={LandingPage} />
      <Route path="/register" component={RegistrationPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
