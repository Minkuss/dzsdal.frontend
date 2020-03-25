import { ISubject } from "../types";
import { StudentDomain } from "./domains";
import { setStudentSelectedSubject } from "./studentSelectedSubject";
import { StudentsService } from "../services/StudentsService";

export const $studentSubjects = StudentDomain.store<ISubject[]>([]);

export const fetchStudentSubjects = StudentDomain.effect<string, ISubject[]>(
  "fetch student subjects",
).use(StudentsService.getSubjects);

$studentSubjects.on(fetchStudentSubjects.done, (_, { result: subjects }) => subjects);

fetchStudentSubjects.done.watch(({ result: subjects }) => setStudentSelectedSubject(subjects[0]));
