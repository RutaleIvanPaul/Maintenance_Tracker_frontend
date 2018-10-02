import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Authentication from "./containers/Authentication/Authentication";
import CreateRequest from "./containers/Requests/CreateRequest";
import ViewRequests from "./containers/Requests/ViewRequests";
import AdminViewRequests from "./containers/Requests/AdminViewRequests";
import Header from "./containers/Header/Header";

const routes = props => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Authentication} />
          <Route path="/CreateRequest" exact component={CreateRequest} />
          <Route path="/ViewRequests" exact component={ViewRequests} />
          <Route path="/AdminViewRequests" exact component={AdminViewRequests} />
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default routes;
