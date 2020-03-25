import { IStudent } from "../types";
import { TeacherDomain } from "./domains";

export const $teacherSelectedStudent = TeacherDomain.store<IStudent | null>(null);

export const setTeacherSelectedStudent = TeacherDomain.event<IStudent>(
  "set teacher selected student",
);

$teacherSelectedStudent.on(setTeacherSelectedStudent, (_, selectedStudent) => selectedStudent);
