import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { IStudent } from "../types";
import { $teacher } from "../effector/teacher";
import { $teacherStudents, fetchTeacherStudents } from "../effector/teacherStudents";
import {
  $teacherSelectedStudent,
  setTeacherSelectedStudent,
} from "../effector/teacherSelectedStudent";
import { $teacherSelectedClass } from "../effector/teacherSelectedClass";

import { List } from "../components";

interface ITeacherStudentListProps {
  className?: string;
}

export const TeacherStudentList: React.FC<ITeacherStudentListProps> = ({ className }) => {
  const teacher = useStore($teacher);
  const student = useStore($teacherStudents);
  const selectedClass = useStore($teacherSelectedClass);
  const selectedStudent = useStore($teacherSelectedStudent);

  useEffect(() => {
    if (selectedClass) {
      fetchTeacherStudents(selectedClass.id);
    }
  }, [teacher, selectedClass]);

  return (
    <List<IStudent>
      role="teacher"
      label="Ученики"
      items={student}
      selectedItem={selectedStudent}
      onChange={setTeacherSelectedStudent}
      className={className}
    />
  );
};
