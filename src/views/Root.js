import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import Provider from 'context/provider';
import Home from './Home';
import Offers from './Offers';

const Root = () => (
  <Provider>
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.offers} component={Offers} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;
