import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { IClass } from "../types";
import { $teacher } from "../effector/teacher";
import { $teacherClasses, fetchTeacherClasses } from "../effector/teacherClasses";
import { $teacherSelectedClass, setTeacherSelectedClass } from "../effector/teacherSelectedClass";

import { Selector } from "../components";

interface IClassSelectorProps {
  className?: string;
}

export const TeacherClassSelector: React.FC<IClassSelectorProps> = ({ className }) => {
  const teacher = useStore($teacher);
  const classes = useStore($teacherClasses);
  const selectedClass = useStore($teacherSelectedClass);

  useEffect(() => {
    if (teacher) {
      fetchTeacherClasses(teacher.id);
    }
  }, [teacher]);

  return (
    <Selector<IClass>
      label="Класс"
      items={classes}
      selectedItem={selectedClass}
      onChange={setTeacherSelectedClass}
      className={className}
    />
  );
};
