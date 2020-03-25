import { IStudent, ID } from "../types";
import { TeacherDomain } from "./domains";
import { ClassesService } from "../services/ClassesService";

export const $teacherStudents = TeacherDomain.store<IStudent[]>([]);

export const fetchTeacherStudents = TeacherDomain.effect<ID, IStudent[]>(
  "fetch teacher students",
).use(ClassesService.getStudents);

$teacherStudents.on(fetchTeacherStudents.done, (_, { result: students }) => students);
