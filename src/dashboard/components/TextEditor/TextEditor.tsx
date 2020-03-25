import React, { useState, useCallback, useEffect } from "react";
import { useStore } from "effector-react";
import { Editor, EditorState, RichUtils, ContentState } from "draft-js";
import { Card, Button, Intent, Alert, Menu, Popover, MenuItem } from "@blueprintjs/core";
import { $studentSelectedHomeWork } from "../../effector/studentSelectedHomeWork";

import "draft-js/dist/Draft.css";
import * as classes from "./TextEditor.styles";

interface ITextEditorProps {
  initialState?: EditorState;
  textState?: ContentState;
  placeholder?: string;
  intent?: Intent;
  btnText?: string;
  readonly?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => unknown;
  onSubmit?: (value: string) => unknown;
  onOpen?: (value: string) => unknown;
  onConfirm?: (value: string) => unknown;
  onCancel?: (value: string) => unknown;
  isOpen?: boolean;
  showButton?: boolean;
  showen?: boolean;
  prop?: boolean;
}

export const TextEditor: React.FC<ITextEditorProps> = props => {
  const {
    initialState,
    placeholder,
    onSubmit,
    onChange,
    intent,
    btnText,
    readonly,
    onOpen,
    isOpen,
    onConfirm,
    onCancel,
    disabled,
    showButton,
    showen,
    prop,
    textState,
  }: ITextEditorProps = {
    ...defaultProps,
    ...props,
  };

  const [editorState, setEditorState] = useState<EditorState>(initialState);
  const [contentState, setContentState] = useState<ContentState>(textState);
  const [editorPlainText, setEditorPlainText] = useState<string>("");
  const selectedHomework = useStore($studentSelectedHomeWork);

  const customStyleMap = {
    HIGHLIGHT: {
      backgroundColor: "rgba(255, 0, 0, 0.3)",
    },
    UNDERLINED: {
      borderBottom: "2px solid black",
    },
    DASHEDUNDERLINE: {
      borderBottom: "2px black dashed",
    },
    DOUBLEUNDERLINE: {
      borderBottom: "double 5px black",
    },
    WAVYUNDERLINE: {
      background: `url(${require("./waveline4.gif")}) repeat-x 100% 100%`,
      backgroundSize: "5px",
    },
    DOTLINE: {
      background: `url(${require("./dot-line.gif")}) repeat-x 100% 100%`,
      backgroundSize: "17px",
    },
  };

  useEffect(() => {
    setEditorState(initialState);
  }, [initialState]);

  useEffect(() => {
    const value = getEditorPlainText(editorState);
    setEditorPlainText(value);
    onChange(value);
  }, [editorState, onChange]);

  const submit = useCallback(() => {
    onSubmit(editorPlainText);
  }, [editorPlainText, onSubmit]);

  const HIGHLIGHT = useCallback(() => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
    setContentState(editorState.getCurrentContent());
  }, [editorState, contentState]);

  const underline = useCallback(() => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINED"));
  }, [editorState]);

  const dashedUnderline = useCallback(() => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "DASHEDUNDERLINE"));
  }, [editorState]);

  const doubleUnderline = useCallback(() => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "DOUBLEUNDERLINE"));
  }, [editorState]);

  const wavy = useCallback(() => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "WAVYUNDERLINE"));
  }, [editorState]);

  const dotLine = useCallback(() => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "DOTLINE"));
  }, [editorState]);

  const UnderlineMenu = (
    <Menu>
      <MenuItem onClick={underline} text="Подлежащее" />
      <MenuItem onClick={doubleUnderline} text="Сказуемое" />
      <MenuItem onClick={dashedUnderline} text="Дополнение" />
      <MenuItem onClick={wavy} text="Определение" />
      <MenuItem onClick={dotLine} text="Обстоятельство" />
    </Menu>
  );

  return (
    <>
      {selectedHomework
        ? selectedHomework.status === "checked" && <Card>{selectedHomework.studentContent}</Card>
        : true}
      <Card className={classes.card}>
        <div className={classes.editor}>
          {!showen && (
            <Popover position="right-bottom" content={UnderlineMenu}>
              <Button icon="underline" />
            </Popover>
          )}
          {showen && <Button onClick={HIGHLIGHT} text="Выделить ошибку" />}
          <Editor
            readOnly={readonly}
            placeholder={placeholder}
            editorState={editorState}
            onChange={setEditorState}
            customStyleMap={customStyleMap}
          />
        </div>
        {showButton && (
          <div className={classes.buttons}>
            <Button
              className={classes.buttonSub}
              disabled={editorPlainText === "" || editorPlainText === " " ? true : false}
              intent={intent}
              onClick={prop ? () => onOpen("") : submit}
              text={btnText}
            />
            <Alert
              isOpen={isOpen}
              cancelButtonText="Закрыть"
              onCancel={() => onCancel("")}
              confirmButtonText="Да"
              onConfirm={() => {
                onConfirm("");
                onSubmit(editorPlainText);
              }}
            >
              <p>Вы точно хотите окончательно принять домашнюю работу?</p>
            </Alert>
          </div>
        )}
      </Card>
    </>
  );
};

const defaultProps: Required<ITextEditorProps> = {
  initialState: EditorState.createEmpty(),
  textState: ContentState.createFromText(""),
  placeholder: "«Поехали!» — Юрий Алексеевич Гагарин",
  intent: "none",
  btnText: "",
  readonly: false,
  onOpen: () => {},
  onChange: () => {},
  onSubmit: () => {},
  onConfirm: () => {},
  onCancel: () => {},
  isOpen: false,
  disabled: false,
  showButton: true,
  showen: true,
  prop: false,
};

function getEditorPlainText(editorState: EditorState): string {
  return editorState.getCurrentContent().getPlainText();
}
