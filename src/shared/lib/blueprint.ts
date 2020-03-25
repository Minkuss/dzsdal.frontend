import { Intent } from "@blueprintjs/core";

export function getFormFieldIntent(error?: string): Intent {
  return error ? "danger" : "none";
}
