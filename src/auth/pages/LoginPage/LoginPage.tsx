import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "@blueprintjs/core";

import {
  STUDENT_DASHBOARD_PATH,
  TEACHER_DASHBOARD_PATH,
} from "../../../dashboard/router";
import { ILoginForm, LoginForm } from "../../forms";
import * as classes from "./LoginPage.styles";

export const LoginPage: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    ({ username }: ILoginForm) => {
      if (username === "student") {
        history.push(STUDENT_DASHBOARD_PATH);
      }

      if (username === "teacher") {
        history.push(TEACHER_DASHBOARD_PATH);
      }
    },
    [history],
  );

  return (
    <div className={classes.container}>
      <Card elevation={3} className={classes.card}>
        <LoginForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
};
