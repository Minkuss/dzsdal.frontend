import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "@blueprintjs/core";
// import { useQuery, useMutation, QueryCache, QueryClient, QueryClientProvider } from "react-query";
import prisma from "../../../lib/prisma";

import { STUDENT_DASHBOARD_PATH, TEACHER_DASHBOARD_PATH } from "../../../dashboard/router";
import { ILoginForm, LoginForm } from "../../forms";
import * as classes from "./LoginPage.styles";
import { populateMockData } from "../../../dashboard/services/init";

// async function fetchStudentRequest() {
//   const response = await fetch("./api/student");
//   const data = await response.text();
//   console.log(data);
//   // const { student } = data;
//   // console.log("Привет");
//   // return student;

//   // const student = prisma.student.findMany();
//   // return student;
// }

export const LoginPage: React.FC = () => {
  const history = useHistory();

  // const student = fetchStudentRequest();
  // const { data: student } = useQuery("student", fetchStudentRequest);

  const handleSubmit = useCallback(
    ({ username, password }: ILoginForm) => {
      if (username === "student") {
        if (password === "123") history.push(STUDENT_DASHBOARD_PATH);
      }

      if (username === "teacher") {
        if (password === "321") history.push(TEACHER_DASHBOARD_PATH);
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
