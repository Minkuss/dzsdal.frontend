import { ISubject } from "../types";
import { StudentDomain } from "./domains";

export const $studentSelectedSubject = StudentDomain.store<ISubject | null>(null);

export const setStudentSelectedSubject = StudentDomain.event<ISubject>(
  "set student selected subject",
);

$studentSelectedSubject.on(setStudentSelectedSubject, (_, selectedSubject) => selectedSubject);
