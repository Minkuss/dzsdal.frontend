import { IClass, ID, IStudent } from "../types";
import { StudentsService } from "./StudentsService";

export class ClassesService {
  private static localStorageKey: string = "classes";

  public static saveMockData(data: IClass[]) {
    localStorage.setItem(ClassesService.localStorageKey, JSON.stringify(data));
  }

  public static getClasses(): IClass[] {
    return JSON.parse(localStorage.getItem(ClassesService.localStorageKey) || "[]");
  }

  public static getClassById(id: ID): IClass {
    const classes = ClassesService.getClasses();
    return classes.find(item => item.id === id)!;
  }

  public static getStudents(classId: ID): IStudent[] {
    const _class = ClassesService.getClassById(classId);
    return _class.students.map(StudentsService.getStudentById);
  }
}
