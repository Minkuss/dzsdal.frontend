import { IHomeWork, ID } from "../types";
import { StudentDomain } from "./domains";
import { HomeWorksService } from "../services/HomeWorksService";

interface ISetHomeWorkContentParams {
  homeWorkId: ID;
  content: string;
}

export const $studentSelectedHomeWork = StudentDomain.store<IHomeWork | null>(null);

export const setStudentSelectedHomeWork = StudentDomain.event<IHomeWork>(
  "set student selected homework",
);

export const setHomeWorkContent = StudentDomain.effect<ISetHomeWorkContentParams, void>(
  "set student homework content",
  {
    handler: ({ homeWorkId, content }) => HomeWorksService.setHomeWorkContent(homeWorkId, content),
  },
);

$studentSelectedHomeWork.on(setStudentSelectedHomeWork, (_, selectedHomeWork) => selectedHomeWork);
