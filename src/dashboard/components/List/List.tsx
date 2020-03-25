import React, { useState, useCallback } from "react";
import {
  Card,
  Button,
  H5,
  Divider,
  Intent,
  Popover,
  EditableText,
  Dialog,
} from "@blueprintjs/core";
import { classes as merge } from "typestyle";

import { Status, UserRole } from "../../types";
import { StatusIcon } from "../StatusIcon";
import * as classes from "./List.styles";
import { setHomeWorkStatus } from "../../effector/studentChangeStatus";
import { $studentSelectedHomeWork } from "../../effector/studentSelectedHomeWork";
import { $teacherSelectedHomeWork } from "../../effector/teacherSelectedHomeWork";
import { useStore } from "effector-react";

export interface IListItem {
  id: string;
  name: string;
  status: Status;
}

interface IListProps<T extends IListItem> {
  items: T[];
  selectedItem?: T | null;
  label?: string;
  className?: string;
  onChange: (item: T) => unknown;
  role: UserRole;
  show?: boolean;
}

export function List<T extends IListItem>(props: IListProps<T>) {
  const { items, selectedItem, label, onChange, className, role, show } = props;
  const teacherSelectedHomeWork = useStore($teacherSelectedHomeWork);
  const studentSelectedHomeWork = useStore($studentSelectedHomeWork);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const handleChange = useCallback((value: string) => {
    setText(value);
    setError(false);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log(text);
    setText("");
    setOpen(false);
  }, [text, open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  const showError = useCallback(() => {
    setError(true);
  }, [error]);

  const renderItem = (item: T) => {
    const intent: Intent = selectedItem
      ? item.id === selectedItem.id
        ? "primary"
        : "none"
      : "none";

    return (
      <div key={item.id} className={classes.item}>
        <Button
          intent={intent}
          onClick={() => {
            onChange(item);
          }}
          minimal
          fill
          rightIcon={<StatusIcon role={role} status={item.status} />}
        >
          {item.name}
        </Button>
      </div>
    );
  };

  return (
    <>
      <Card className={merge(classes.list, className)}>
        {label && (
          <H5 className={classes.label}>
            {label}
            <Divider />
          </H5>
        )}
        <div className={classes.items}>{items.map(renderItem)}</div>
      </Card>
      {show && (
        <Button
          className={classes.plus}
          onClick={() => {
            !open ? setOpen(true) : setOpen(false);
          }}
          icon="plus"
        />
      )}
      {open && (
        <>
          <Dialog onClose={handleClose} isOpen={open}>
            <div className={classes.editorCard}>
              <EditableText
                onChange={handleChange}
                placeholder="Номер задания"
                className={classes.editor}
              />
              {error && (
                <div>
                  <p className={classes.errorMess}>Введите номер.</p>
                </div>
              )}
              <Button
                onClick={text !== "" ? handleSubmit : showError}
                className={classes.subButton}
                intent="primary"
                text="Отправить"
              />
            </div>
          </Dialog>
        </>
      )}
    </>
  );
}
