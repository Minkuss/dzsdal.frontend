import { IStudent, ID, ISubject, IHomeWork } from "../types";
import { SubjectsService } from "./SubjectsService";
import { HomeWorksService } from "./HomeWorksService";

export class StudentsService {
  private static localStorageKey: string = "students";

  public static saveMockData(data: IStudent[]) {
    localStorage.setItem(StudentsService.localStorageKey, JSON.stringify(data));
  }

  public static getStudents(): IStudent[] {
    return JSON.parse(localStorage.getItem(StudentsService.localStorageKey) || "[]");
  }

  public static getStudentById(id: ID): IStudent {
    const students = StudentsService.getStudents();
    return students.find(item => item.id === id)!;
  }

  public static getSubjects(studentId: ID): ISubject[] {
    const student = StudentsService.getStudentById(studentId);
    return student.subjects.map(SubjectsService.getSubjectById);
  }

  public static getHomeWorks(studentId: ID, subjectId: ID): IHomeWork[] {
    const student = StudentsService.getStudentById(studentId);
    return student.homeworks
      .map(HomeWorksService.getHomeWorkById)
      .filter(({ subject }) => subject === subjectId);
  }
}
