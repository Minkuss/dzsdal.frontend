import React, { FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { route } from "../shared/lib/route";
import { AuthRouter, AUTH_BASE_URL, LOGIN_PAGE_URL } from "../auth/router";
import { DashboardRouter, DASHBOARD_BASE_URL } from "../dashboard/router";

const path = route("");
export const HOME_PAGE_PATH = path("/");

export const CoreRouter: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={AUTH_BASE_URL} component={AuthRouter} />
      <Route path={DASHBOARD_BASE_URL} component={DashboardRouter} />
      <Redirect to={LOGIN_PAGE_URL} />
    </Switch>
  </BrowserRouter>
);
