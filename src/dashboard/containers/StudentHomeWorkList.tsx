import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { IHomeWork } from "../types";
import { $student } from "../effector/student";
import { $studentHomeworks, fetchStudentHomeWorks } from "../effector/studentHomeworks";
import {
  $studentSelectedHomeWork,
  setStudentSelectedHomeWork,
} from "../effector/studentSelectedHomeWork";
import { $studentSelectedSubject } from "../effector/studentSelectedSubject";

import { List } from "../components";

interface IStudentHomeWorkListProps {
  className?: string;
}

export const StudentHomeWorkList: React.FC<IStudentHomeWorkListProps> = ({ className }) => {
  const student = useStore($student);
  const homeworks = useStore($studentHomeworks);
  const selectedSubject = useStore($studentSelectedSubject);
  const selectedHomeWork = useStore($studentSelectedHomeWork);

  useEffect(() => {
    if (student && selectedSubject) {
      fetchStudentHomeWorks({
        studentId: student.id,
        subjectId: selectedSubject.id,
      });
    }
  }, [student, selectedSubject]);

  return (
    <List<IHomeWork>
      role="student"
      label="Задания"
      items={homeworks}
      selectedItem={selectedHomeWork}
      onChange={setStudentSelectedHomeWork}
      className={className}
    />
  );
};
