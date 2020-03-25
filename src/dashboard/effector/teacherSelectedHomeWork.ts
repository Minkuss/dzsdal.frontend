import { IHomeWork, ID } from "../types";
import { TeacherDomain } from "./domains";
import { HomeWorksService } from "../services/HomeWorksService";

interface ISetHomeWorkContentParams {
  homeWorkId: ID;
  content: string;
}

export const $teacherSelectedHomeWork = TeacherDomain.store<IHomeWork | null>(null);

export const setTeacherSelectedHomeWork = TeacherDomain.event<IHomeWork>(
  "set teacher selected homework",
);

export const setHomeWorkContent = TeacherDomain.effect<ISetHomeWorkContentParams, void>(
  "set student homework content",
  {
    handler: ({ homeWorkId, content }) => HomeWorksService.setHomeWorkContent(homeWorkId, content),
  },
);

$teacherSelectedHomeWork.on(setTeacherSelectedHomeWork, (_, selectedHomeWork) => selectedHomeWork);
