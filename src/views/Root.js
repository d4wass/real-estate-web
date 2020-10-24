import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import Home from './Home';
import Offers from './Offers';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.offers} component={Offers} />
    </Switch>
  </BrowserRouter>
);

export default Root;
