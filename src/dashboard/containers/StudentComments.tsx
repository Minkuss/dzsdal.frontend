import React, { FC, useState, useCallback, useEffect } from "react";
import hyperid from "hyperid";
import { Card } from "@blueprintjs/core";

import { CommentList } from "../components";
import { CommentForm, ICommentForm } from "../forms";
import { $student } from "../effector/student";
import { useStore } from "effector-react";
import { setHomeWorkComments } from "../effector/comments";
import { setHomeWorkStatus } from "../effector/studentChangeStatus";
import { $studentSelectedHomeWork } from "../effector/studentSelectedHomeWork";
import { IComment, Status } from "../types";

interface IStudentCommentsProps {
  className?: string;
}

export const StudentComments: FC<IStudentCommentsProps> = ({ className }) => {
  const student = useStore($student);
  const selectedHomework = useStore($studentSelectedHomeWork);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    if (selectedHomework) {
      setComments(selectedHomework.comments);
    }
  }, [selectedHomework]);

  const handleSubmit = useCallback(
    ({ text }: ICommentForm) => {
      if (selectedHomework && student) {
        const newComments: IComment[] = [
          ...comments,
          {
            text,
            id: hyperid().uuid,
            name: student.name,
            role: "student",
          },
        ];
        setComments(newComments);
        setHomeWorkComments({
          homeWorkId: selectedHomework.id,
          comments: newComments,
        });
        if (selectedHomework.status !== Status.Checked) {
          setHomeWorkStatus({ homeWorkId: selectedHomework.id, status: Status.TeacherUpdated });
        }
      }
    },
    [comments, student, selectedHomework],
  );

  const deleteComment = useCallback(
    id => {
      if (selectedHomework) {
        const newComments = comments.filter(comment => comment.id !== id);
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
    <Card className={className}>
      <CommentForm onSubmit={handleSubmit} />
      <CommentList onChange={deleteComment} role="student" items={comments} />
    </Card>
  );
};
