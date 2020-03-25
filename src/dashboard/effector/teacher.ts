import { ITeacher } from "../types";
import { TeacherDomain } from "./domains";
import { TeachersService } from "../services/TeachersService";

export const $teacher = TeacherDomain.store<ITeacher | null>(null);

export const fetchTeacher = TeacherDomain.effect<string, ITeacher>("fetch teacher").use(
  TeachersService.getTeacherById,
);

$teacher.on(fetchTeacher.done, (_, { result: teacher }) => teacher);
