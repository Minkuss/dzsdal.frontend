import React, { useRef, useCallback, useMemo, useState } from "react";
import { EditorState, ContentState } from "draft-js";

import { TextEditor } from "../components";
import { getRandomArrayElement } from "../../shared/lib/random";
import { $teacherSelectedHomeWork, setHomeWorkContent } from "../effector/teacherSelectedHomeWork";
import { setHomeWorkStatus } from "../effector/teacherChangeStatus";
import { useStore } from "effector-react";
import { Status } from "../types";

export const TeacherHomeWorkEditor: React.FC = () => {
  const selectedHomework = useStore($teacherSelectedHomeWork);
  const { current: placeholder } = useRef<string>(getInitialPlaceholder());
  const initialState = useMemo<EditorState>(() => {
    return getInitialEditorState(selectedHomework ? selectedHomework.content : "");
  }, [selectedHomework]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = useCallback(
    (value: string) => {
      if (selectedHomework) {
        setHomeWorkContent({ homeWorkId: selectedHomework.id, content: value });
      }
    },
    [selectedHomework],
  );

  const open = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const handleConfirm = useCallback(() => {
    if (selectedHomework) {
      setHomeWorkStatus({ homeWorkId: selectedHomework.id, status: Status.Checked });
    }
    setIsOpen(false);
  }, [isOpen, selectedHomework]);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <TextEditor
        readonly={false}
        btnText="Принять"
        intent="success"
        initialState={initialState}
        placeholder={placeholder}
        onSubmit={handleSubmit}
        isOpen={isOpen}
        onOpen={open}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        showen={true}
        prop={true}
      />
    </>
  );
};

function getInitialPlaceholder(): string {
  return getRandomArrayElement([
    "«В минуту нерешительности действуй быстро и старайся сделать первый шаг, хотя бы и неправильный.» — Лев Николаевич Толстой",
    "«Спасение в том, чтобы сделать первый шаг. Ещё один. С него-то всё и начинается заново.» — Антуан де Сент-Экзюпери",
    "«Секрет неуклонного движения вперед в том, чтобы сделать первый шаг. Секрет первого шага в том, чтобы разбить сложные, кажущиеся неодолимыми задачи на простые и осуществимые и начать с самой первой. Секрет успеха - в постоянстве цели.» — Марк Твен",
    "«Сделай первый шаг, и ты увидишь, что все не так страшно.» — Сенека Луций Анней",
    "«Для первого шага достаточно веры. Не обязательно видеть всю лестницу, чтобы сделать первый шаг.» — Мартин Лютер Кинг",
    "«Если станешь дожидаться наиболее благоприятного момента, то никогда не сдвинешься с места; чтобы сделать первый шаг нужна малая толика безумия.» — Пауло Коэльо",
  ]);
}

function getInitialEditorState(homeWorkEditorValue: string): EditorState {
  return EditorState.createWithContent(ContentState.createFromText(homeWorkEditorValue));
}
