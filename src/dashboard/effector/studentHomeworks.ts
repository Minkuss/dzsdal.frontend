import { IHomeWork, ID, Status } from "../types";
import { StudentDomain } from "./domains";
import { StudentsService } from "../services/StudentsService";
import { setStudentSelectedHomeWork } from "./studentSelectedHomeWork";
import { HomeWorksService } from "../services/HomeWorksService";

export const $studentHomeworks = StudentDomain.store<IHomeWork[]>([]);

interface IFetchStudentHomeWorksParams {
  studentId: ID;
  subjectId: ID;
}

export const fetchStudentHomeWorks = StudentDomain.effect<
  IFetchStudentHomeWorksParams,
  IHomeWork[]
>("fetch student homeworks", {
  handler: ({ studentId, subjectId }) => StudentsService.getHomeWorks(studentId, subjectId),
});

$studentHomeworks.on(fetchStudentHomeWorks.done, (_, { result: homeworks }) => homeworks);

$studentHomeworks.on(setStudentSelectedHomeWork, (homeworks, selectedHomeWork) =>
  homeworks.map(homework => {
    if (selectedHomeWork.id === homework.id && selectedHomeWork.status !== Status.Checked) {
      homework.status = Status.none;
    }
    return homework;
  }),
);

setStudentSelectedHomeWork.watch(homework => {
  HomeWorksService.setHomeWorkStatus(homework.id, homework.status);
});
