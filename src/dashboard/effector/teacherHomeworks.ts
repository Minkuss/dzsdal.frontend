import { IHomeWork, ID, Status } from "../types";
import { TeacherDomain } from "./domains";
import { TeachersService } from "../services/TeachersService";
import { setTeacherSelectedHomeWork } from "./teacherSelectedHomeWork";
import { HomeWorksService } from "../services/HomeWorksService";

export const $teacherHomeWorks = TeacherDomain.store<IHomeWork[]>([]);

interface IFetchTeacherHomeWorksParams {
  teacherId: ID;
  studentId: ID;
}

export const fetchTeacherHomeWorks = TeacherDomain.effect<
  IFetchTeacherHomeWorksParams,
  IHomeWork[]
>("fetch teacher homeworks", {
  handler: ({ teacherId, studentId }) => TeachersService.getHomeWorks(teacherId, studentId),
});

$teacherHomeWorks.on(fetchTeacherHomeWorks.done, (_, { result: homeworks }) => homeworks);

$teacherHomeWorks.on(setTeacherSelectedHomeWork, (homeworks, selectedHomeWork) =>
  homeworks.map(homework => {
    if (selectedHomeWork.id === homework.id && selectedHomeWork.status !== Status.Checked) {
      homework.status = Status.none;
    }
    return homework;
  }),
);

setTeacherSelectedHomeWork.watch(homework => {
  HomeWorksService.setHomeWorkStatus(homework.id, homework.status);
});
