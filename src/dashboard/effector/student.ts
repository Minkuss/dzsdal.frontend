import { IStudent } from "../types";
import { StudentDomain } from "./domains";
import { StudentsService } from "../services/StudentsService";

export const $student = StudentDomain.store<IStudent | null>(null);

export const fetchStudent = StudentDomain.effect<string, IStudent>("fetch student").use(
  StudentsService.getStudentById,
);

$student.on(fetchStudent.done, (_, { result: student }) => student);
