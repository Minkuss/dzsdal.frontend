import React, { useEffect } from "react";

import { fetchTeacher } from "../../effector/teacher";
import {
  TeacherClassSelector,
  TeacherStudentList,
  TeacherHomeWorkEditor,
  TeacherHomeWorkList,
  TeacherComments,
  TeacherProfileBlock,
} from "../../containers";
import { Page, PageContent, PageSidebar, BookIcon } from "../../components";
import * as classes from "./TeacherPage.styles";
import { $teacherSelectedHomeWork } from "../../effector/teacherSelectedHomeWork";
import { $teacherSelectedStudent } from "../../effector/teacherSelectedStudent";
import { useStore } from "effector-react";

export const TeacherPage: React.FC = () => {
  const selectedHomeWork = useStore($teacherSelectedHomeWork);
  const selectedStudent = useStore($teacherSelectedStudent);

  useEffect(() => {
    fetchTeacher("teacher_1");
  }, []);

  return (
    <Page>
      <PageSidebar>
        <TeacherClassSelector className={classes.classSelector} />
        <TeacherStudentList className={classes.studentList} />
        {selectedStudent && <TeacherHomeWorkList className={classes.homeworkList} />}
      </PageSidebar>
      <PageContent>
        <TeacherProfileBlock />
        {selectedHomeWork ? (
          <TeacherHomeWorkEditor />
        ) : (
          <div className={classes.icon}>
            <BookIcon />
          </div>
        )}
        {selectedHomeWork && <TeacherComments className={classes.comments} />}
      </PageContent>
    </Page>
  );
};
