import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Authentication from "./containers/Authentication/Authentication";

const routes = props => {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Authentication} />
          </Switch>
      </BrowserRouter>
    </div>
  );
};

export default routes;
