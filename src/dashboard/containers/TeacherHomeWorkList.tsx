import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { IHomeWork } from "../types";
import { $teacher } from "../effector/teacher";
import { fetchTeacherHomeWorks, $teacherHomeWorks } from "../effector/teacherHomeworks";
import { $teacherSelectedStudent } from "../effector/teacherSelectedStudent";
import {
  $teacherSelectedHomeWork,
  setTeacherSelectedHomeWork,
} from "../effector/teacherSelectedHomeWork";

import { List } from "../components";

interface ITeacherHomeWorkListProps {
  className?: string;
}

export const TeacherHomeWorkList: React.FC<ITeacherHomeWorkListProps> = ({ className }) => {
  const teacher = useStore($teacher);
  const homeworks = useStore($teacherHomeWorks);
  const selectedStudent = useStore($teacherSelectedStudent);
  const selectedHomeWork = useStore($teacherSelectedHomeWork);

  useEffect(() => {
    if (teacher && selectedStudent) {
      fetchTeacherHomeWorks({
        teacherId: teacher.id,
        studentId: selectedStudent.id,
      });
    }
  }, [teacher, selectedStudent]);

  return (
    <List<IHomeWork>
      role="teacher"
      label="Задания"
      items={homeworks}
      selectedItem={selectedHomeWork}
      onChange={setTeacherSelectedHomeWork}
      className={className}
      show={true}
    />
  );
};
