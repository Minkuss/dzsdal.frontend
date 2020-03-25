import { IHomeWork, ID, Status } from "../types";
import { TeacherDomain } from "./domains";
import { CommentsService } from "../services/CommentsService";
import { IComment } from "../types";

interface ISetHomeWorkCommentsParams {
  homeWorkId: ID;
  comments: IComment[];
}

export const setHomeWorkComments = TeacherDomain.effect<ISetHomeWorkCommentsParams, void>(
  "set student comment",
  {
    handler: ({ homeWorkId, comments }) =>
      CommentsService.setHomeWorkComments(homeWorkId, comments),
  },
);
