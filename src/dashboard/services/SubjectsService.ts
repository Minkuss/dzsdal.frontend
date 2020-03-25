import { ISubject, ID } from "../types";

export class SubjectsService {
  private static localStorageKey: string = "subjects";

  public static saveMockData(data: ISubject[]) {
    localStorage.setItem(SubjectsService.localStorageKey, JSON.stringify(data));
  }

  public static getSubjects(): ISubject[] {
    return JSON.parse(localStorage.getItem(SubjectsService.localStorageKey) || "[]");
  }

  public static getSubjectById(id: ID): ISubject {
    const subjects = SubjectsService.getSubjects();
    return subjects.find(item => item.id === id)!;
  }
}
