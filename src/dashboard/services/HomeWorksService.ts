import { IHomeWork, ID, Status } from "../types";

export class HomeWorksService {
  private static localStorageKey: string = "homeworks";

  public static saveMockData(data: IHomeWork[]) {
    localStorage.setItem(HomeWorksService.localStorageKey, JSON.stringify(data));
  }

  public static getHomeWorks(): IHomeWork[] {
    return JSON.parse(localStorage.getItem(HomeWorksService.localStorageKey) || "[]");
  }

  public static getHomeWorkById(id: ID): IHomeWork {
    const homeworks = HomeWorksService.getHomeWorks();
    return homeworks.find(item => item.id === id)!;
  }

  public static setHomeWorkContent(homeWorkId: ID, content: string): void {
    const homeworks = HomeWorksService.getHomeWorks();

    const newHomeWorks = homeworks.map(homework => {
      if (homework.id === homeWorkId) {
        homework.content = content;
      }
      return homework;
    });

    localStorage.setItem(HomeWorksService.localStorageKey, JSON.stringify(newHomeWorks));
  }

  public static setHomeWorkStudentContent(homeWorkId: ID, studentContent: string): void {
    const homeworks = HomeWorksService.getHomeWorks();

    const newHomeWorks = homeworks.map(homework => {
      if (homework.id === homeWorkId) {
        homework.studentContent = studentContent;
      }
      return homework;
    });

    localStorage.setItem(HomeWorksService.localStorageKey, JSON.stringify(newHomeWorks));
  }

  public static setHomeWorkStatus(homeWorkId: ID, status: Status): void {
    const homeworks = HomeWorksService.getHomeWorks();

    const newHomeWorks = homeworks.map(homework => {
      if (homework.id === homeWorkId) {
        homework.status = status;
      }
      return homework;
    });
    localStorage.setItem(HomeWorksService.localStorageKey, JSON.stringify(newHomeWorks));
  }
}
