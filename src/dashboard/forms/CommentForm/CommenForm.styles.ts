import { style } from "typestyle";
import { px } from "csx";

export const textArea = style({
  resize: "none",
  minHeight: px(80),
});

export const buttons = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: px(20),
});
