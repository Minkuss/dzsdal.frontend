import React, { FC } from "react";
import { ID, IComment, UserRole } from "../../types";
import { Card, Button, Elevation } from "@blueprintjs/core";
import * as cn from "./CommentList.styles";

interface ICommentListProps {
  items: IComment[];
  onChange: (id: ID) => unknown;
  role: UserRole;
}

export const CommentList: FC<ICommentListProps> = ({ items, onChange, role }) => (
  <div>
    {items.map((item) => (
      <>
        <div className={cn.roleText}>{item.name}</div>
        <Card elevation={Elevation.FOUR} className={cn.card}>
          <div className={cn.commentText} key={item.id}>
            {item.text}
          </div>
          {role === item.role && <Button onClick={() => onChange(item.id)} minimal icon="trash" />}
        </Card>
      </>
    ))}
  </div>
);
