import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from './containers/Authentication/Login/Login';

const routes = props => {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
          </Switch>
      </BrowserRouter>
    </div>
  );
};

export default routes;
