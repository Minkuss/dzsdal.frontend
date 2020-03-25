import React, { FC, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormGroup, TextArea, Button } from "@blueprintjs/core";

import { getFormFieldIntent } from "../../../shared/lib/blueprint";
import * as classes from "./CommenForm.styles";

export interface ICommentForm {
  text: string;
}

interface ICommentFormProps {
  onSubmit: (values: ICommentForm) => void;
}

export const CommentForm: FC<ICommentFormProps> = ({ onSubmit }) => {
  const { handleSubmit, control, reset, errors, register } = useForm<ICommentForm>();

  const submit = useCallback(
    (values: ICommentForm) => {
      onSubmit(values);
      reset({ text: "" });
    },
    [onSubmit, reset],
  );

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormGroup
        helperText={errors.text?.message}
        intent={getFormFieldIntent(errors.text?.message)}
      >
        <Controller
          name="text"
          as={TextArea}
          control={control}
          className={classes.textArea}
          placeholder="Оставьте ваш комментарий к домашней работе..."
          intent={getFormFieldIntent(errors.text?.message)}
          inputRef={register({
            required: { value: true, message: "Пожалуйста, введите комментарий" },
          })}
          fill
        />
      </FormGroup>
      <div className={classes.buttons}>
        <Button type="submit" intent="primary" disabled={!!errors.text}>
          Отправить
        </Button>
      </div>
    </form>
  );
};
