import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { route } from "../shared/lib/route";
import { StudentPage, TeacherPage, InitPage } from "./pages";

export const DASHBOARD_BASE_URL = "/dashboard";

const path = route(DASHBOARD_BASE_URL);
export const STUDENT_DASHBOARD_PATH = path("/student");
export const TEACHER_DASHBOARD_PATH = path("/teacher");
export const INIT_DASHBOARD_PATH = path("/init");

export const DashboardRouter: FC = () => (
  <Switch>
    <Route exact path={STUDENT_DASHBOARD_PATH} component={StudentPage} />
    <Route exact path={TEACHER_DASHBOARD_PATH} component={TeacherPage} />
    <Route exact path={INIT_DASHBOARD_PATH} component={InitPage} />
  </Switch>
);
