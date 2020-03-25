import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { route } from "../shared/lib/route";
import { LoginPage } from "./pages";

export const AUTH_BASE_URL = "/auth";

const path = route(AUTH_BASE_URL);
export const LOGIN_PAGE_URL = path("/login");

export const AuthRouter: FC = () => (
  <Switch>
    <Route exact path={LOGIN_PAGE_URL} component={LoginPage} />
  </Switch>
);
