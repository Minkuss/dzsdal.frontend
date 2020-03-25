import React from "react";
import { useForm, OnSubmit, ValidateResult } from "react-hook-form";
import { FormGroup, InputGroup, Button, Spinner } from "@blueprintjs/core";

import { getFormFieldIntent } from "../../shared/lib/blueprint";

export interface ILoginForm {
  username: string;
  password: string;
}

interface ILoginFormProps {
  onSubmit?: OnSubmit<ILoginForm>;
}

export const LoginForm: React.FC<ILoginFormProps> = props => {
  const { onSubmit }: ILoginFormProps = { ...defaultProps, ...props };
  const { formState, errors, register, handleSubmit } = useForm<ILoginForm>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup
        intent={getFormFieldIntent(errors.username?.message)}
        helperText={errors.username?.message}
        label="Логин"
        labelInfo="(обязательно)"
        labelFor="username"
      >
        <InputGroup
          id="username"
          name="username"
          placeholder="petroff"
          intent={getFormFieldIntent(errors.username?.message)}
          inputRef={register({
            required: { value: true, message: "Пожалуйста, введите ваш логин" },
            validate: validateUsername,
          })}
        />
      </FormGroup>
      <FormGroup
        intent={getFormFieldIntent(errors.password?.message)}
        helperText={errors.password?.message}
        label="Пароль"
        labelInfo="(обязательно)"
        labelFor="password"
      >
        <InputGroup
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          intent={getFormFieldIntent(errors.password?.message)}
          inputRef={register({
            required: { value: true, message: "Пожалуйста, введите ваш пароль" },
          })}
        />
      </FormGroup>
      <Button type="submit" intent="primary" disabled={formState.isSubmitting} fill>
        {formState.isSubmitting ? <Spinner size={20} /> : "Войти"}
      </Button>
    </form>
  );
};

const defaultProps: Required<ILoginFormProps> = {
  onSubmit: () => {},
};

function validateUsername(username: string): ValidateResult {
  if (username === "student" || username === "teacher") {
    return undefined;
  }

  return "Пользователь не найден";
}
