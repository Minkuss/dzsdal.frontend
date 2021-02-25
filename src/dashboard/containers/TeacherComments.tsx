import React, { FC, useState, useCallback, useEffect } from "react";
import hyperid from "hyperid";
import { Card, Elevation } from "@blueprintjs/core";

import { CommentList } from "../components";
import { CommentForm, ICommentForm } from "../forms";
import { $teacher } from "../effector/teacher";
import { useStore } from "effector-react";
import { IComment, Status } from "../types";
import { setHomeWorkComments } from "../effector/comments";
import { $teacherSelectedHomeWork } from "../effector/teacherSelectedHomeWork";
import { setHomeWorkStatus } from "../effector/teacherChangeStatus";

interface ITeacherCommentsProps {
  className?: string;
}

export const TeacherComments: FC<ITeacherCommentsProps> = ({ className }) => {
  const teacher = useStore($teacher);
  const selectedHomework = useStore($teacherSelectedHomeWork);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    if (selectedHomework) {
      setComments(selectedHomework.comments);
    }
  }, [selectedHomework]);

  const handleSubmit = useCallback(
    ({ text }: ICommentForm) => {
      if (selectedHomework && teacher) {
        const newComments: IComment[] = [
          ...comments,
          {
            text,
            id: hyperid().uuid,
            name: teacher.name,
            role: "teacher",
          },
        ];
        setComments(newComments);
        setHomeWorkComments({
          homeWorkId: selectedHomework.id,
          comments: newComments,
        });
        // setHomeWorkStatus({ homeWorkId: selectedHomework.id, status: Status.StudentUpdated });
      }
    },
    [comments, teacher, selectedHomework],
  );

  const deleteComment = useCallback(
    (id) => {
      if (selectedHomework) {
        const newComments = comments.filter((comment) => comment.id !== id);
        setComments(newComments);
        setHomeWorkComments({
          homeWorkId: selectedHomework.id,
          comments: newComments,
        });
      }
    },
    [comments, selectedHomework],
  );

  return (
    <Card elevation={Elevation.FOUR} className={className}>
      <CommentForm onSubmit={handleSubmit} />
      <CommentList role="teacher" onChange={deleteComment} items={comments} />
    </Card>
  );
};
