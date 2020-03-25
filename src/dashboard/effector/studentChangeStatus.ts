import { IHomeWork, ID, Status } from "../types";
import { TeacherDomain } from "./domains";
import { HomeWorksService } from "../services/HomeWorksService";

interface ISetHomeWorkStatusParams {
  homeWorkId: ID;
  status: Status;
}

// export const $teacherSelectedHomeWorkStatus = TeacherDomain.store<IHomeWork | null>(null);

export const setHomeWorkStatus = TeacherDomain.effect<ISetHomeWorkStatusParams, void>(
  "set teacher homework status",
  {
    handler: ({ homeWorkId, status }) => HomeWorksService.setHomeWorkStatus(homeWorkId, status),
  },
);
