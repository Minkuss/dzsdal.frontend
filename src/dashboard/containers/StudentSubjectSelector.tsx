import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { ISubject } from "../types";
import { $student } from "../effector/student";
import { fetchStudentSubjects, $studentSubjects } from "../effector/studentSubjects";
import {
  $studentSelectedSubject,
  setStudentSelectedSubject,
} from "../effector/studentSelectedSubject";

import { Selector } from "../components";

interface IStudentSubjectSelectorProps {
  className?: string;
}

export const StudentSubjectSelector: React.FC<IStudentSubjectSelectorProps> = ({ className }) => {
  const student = useStore($student);
  const subjects = useStore($studentSubjects);
  const selectedSubject = useStore($studentSelectedSubject);

  useEffect(() => {
    if (student) {
      fetchStudentSubjects(student.id);
    }
  }, [student]);

  return (
    <Selector<ISubject>
      label="Предмет"
      items={subjects}
      selectedItem={selectedSubject}
      onChange={setStudentSelectedSubject}
      className={className}
    />
  );
};
