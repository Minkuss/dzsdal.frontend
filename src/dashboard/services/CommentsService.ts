import { ID, IComment, IHomeWork } from "../types";

export class CommentsService {
  private static localStorageKey: string = "homeworks";

  public static saveMockData(data: IHomeWork[]) {
    localStorage.setItem(CommentsService.localStorageKey, JSON.stringify(data));
  }

  public static getHomeWorks(): IHomeWork[] {
    return JSON.parse(localStorage.getItem(CommentsService.localStorageKey) || "[]");
  }

  public static setHomeWorkComments(homeWorkId: ID, comments: IComment[]): void {
    const homeworks = CommentsService.getHomeWorks();

    const newHomeWorks = homeworks.map(homework => {
      if (homework.id === homeWorkId) {
        homework.comments = comments;
      }
      return homework;
    });

    localStorage.setItem(CommentsService.localStorageKey, JSON.stringify(newHomeWorks));
  }
}
