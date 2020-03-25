import { ID, ITeacher, IClass, IStudent, IHomeWork } from "../types";
import { ClassesService } from "./ClassesService";
import { StudentsService } from "./StudentsService";
import { HomeWorksService } from "./HomeWorksService";

export class TeachersService {
  private static localStorageKey: string = "teachers";

  public static saveMockData(data: ITeacher[]) {
    localStorage.setItem(TeachersService.localStorageKey, JSON.stringify(data));
  }

  public static getTeachers(): ITeacher[] {
    return JSON.parse(localStorage.getItem(TeachersService.localStorageKey) || "[]");
  }

  public static getTeacherById(id: ID): ITeacher {
    const teachers = TeachersService.getTeachers();
    return teachers.find(teacher => teacher.id === id)!;
  }

  public static getClasses(teacherId: ID): IClass[] {
    const teacher = TeachersService.getTeacherById(teacherId);
    return teacher.classes.map(ClassesService.getClassById);
  }

  public static getStudents(teacherId: ID): IStudent[] {
    const teacher = TeachersService.getTeacherById(teacherId);
    return teacher.students.map(StudentsService.getStudentById);
  }

  public static getHomeWorks(teacherId: ID, studentId: ID): IHomeWork[] {
    const teacher = TeachersService.getTeacherById(teacherId);
    return teacher.homeworks
      .map(HomeWorksService.getHomeWorkById)
      .filter(homework => homework.student === studentId);
  }
}
