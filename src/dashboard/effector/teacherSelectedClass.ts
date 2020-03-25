import { IClass } from "../types";
import { TeacherDomain } from "./domains";

export const $teacherSelectedClass = TeacherDomain.store<IClass | null>(null);

export const setTeacherSelectedClass = TeacherDomain.event<IClass>("set teacher selected class");

$teacherSelectedClass.on(setTeacherSelectedClass, (_, selectedClass) => selectedClass);
