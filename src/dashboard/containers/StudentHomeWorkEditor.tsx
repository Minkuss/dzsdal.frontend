import React, { useRef, useCallback, useMemo, useState, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";

import { TextEditor } from "../components";
import { getRandomArrayElement } from "../../shared/lib/random";
import { $studentSelectedHomeWork, setHomeWorkContent } from "../effector/studentSelectedHomeWork";
import { setHomeWorkStudentContent } from "../effector/studentContent";
import { setHomeWorkStatus } from "../effector/teacherChangeStatus";
import { useStore } from "effector-react";
import { Status } from "../types";
import { string } from "prop-types";

export const StudentHomeWorkEditor: React.FC = () => {
  const selectedHomework = useStore($studentSelectedHomeWork);
  const editable = useMemo(() => {
    return selectedHomework == null
      ? false
      : selectedHomework.status == Status.Checked
      ? true
      : false;
  }, [selectedHomework]);

  const { current: placeholder } = useRef<string>(getInitialPlaceholder());
  const initialState = useMemo<EditorState>(() => {
    return getInitialEditorState(selectedHomework ? selectedHomework.content : "");
  }, [selectedHomework]);

  const handleSubmit = useCallback(
    (value: string) => {
      if (selectedHomework) {
        setHomeWorkContent({ homeWorkId: selectedHomework.id, content: value });
        setHomeWorkStudentContent({ homeWorkId: selectedHomework.id, studentContent: value });
        setHomeWorkStatus({ homeWorkId: selectedHomework.id, status: Status.TeacherUpdated });
      }
    },
    [selectedHomework],
  );

  // const handleChange = useCallback(
  //   (value: string) => {
  //     if (selectedHomework) {
  //       setHomeWorkContent({ homeWorkId: selectedHomework.id, content: value });
  //     }
  //   },
  //   [selectedHomework],
  // );

  return (
    <>
      <TextEditor
        readonly={editable}
        disabled={editable}
        showButton={!editable}
        btnText="Отправить"
        intent="primary"
        initialState={initialState}
        placeholder={placeholder}
        onSubmit={handleSubmit}
        showen={false}
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
