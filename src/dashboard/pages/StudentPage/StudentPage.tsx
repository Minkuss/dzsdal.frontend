import React, { useEffect } from "react";

import { fetchStudent } from "../../effector/student";
import {
  StudentHomeWorkEditor,
  StudentComments,
  StudentHomeWorkList,
  StudentSubjectSelector,
  StudentProfileBlock,
} from "../../containers";
import { Page, PageContent, PageSidebar, BookIcon } from "../../components";
import * as classes from "./StudentPage.styles";
import { $studentSelectedHomeWork } from "../../effector/studentSelectedHomeWork";
import { useStore } from "effector-react";

export const StudentPage: React.FC = () => {
  const selectedHomeWork = useStore($studentSelectedHomeWork);

  useEffect(() => {
    fetchStudent("student_1");
  }, []);

  return (
    <Page>
      <PageSidebar>
        <StudentSubjectSelector className={classes.subjectSelector} />
        <StudentHomeWorkList className={classes.homeWorkList} />
      </PageSidebar>
      <PageContent>
        <StudentProfileBlock />
        {selectedHomeWork ? (
          <StudentHomeWorkEditor />
        ) : (
          <div className={classes.icon}>
            <BookIcon />
          </div>
        )}
        {selectedHomeWork && <StudentComments className={classes.comments} />}
      </PageContent>
    </Page>
  );
};
