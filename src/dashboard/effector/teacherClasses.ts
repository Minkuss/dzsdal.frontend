import { IClass } from "../types";
import { TeacherDomain } from "./domains";
import { setTeacherSelectedClass } from "./teacherSelectedClass";
import { TeachersService } from "../services/TeachersService";

export const $teacherClasses = TeacherDomain.store<IClass[]>([]);

export const fetchTeacherClasses = TeacherDomain.effect<string, IClass[]>(
  "fetch teacher classes",
).use(TeachersService.getClasses);

$teacherClasses.on(fetchTeacherClasses.done, (_, { result: classes }) => classes);

fetchTeacherClasses.done.watch(({ result: classes }) => setTeacherSelectedClass(classes[0]));
