import { IHomeWork, ID } from "../types";
import { StudentDomain } from "./domains";
import { HomeWorksService } from "../services/HomeWorksService";

interface ISetHomeWorkStudentContentParams {
  homeWorkId: ID;
  studentContent: string;
}

export const setHomeWorkStudentContent = StudentDomain.effect<
  ISetHomeWorkStudentContentParams,
  void
>("set student homework content", {
  handler: ({ homeWorkId, studentContent }) =>
    HomeWorksService.setHomeWorkStudentContent(homeWorkId, studentContent),
});
