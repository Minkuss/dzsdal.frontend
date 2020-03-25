import { style } from "typestyle";
import { px, percent } from "csx";

export const list = style({
  width: px(200),
});

export const label = style({
  display: "block",
  textAlign: "center",
  marginBottom: px(20),
});

export const items = style({
  display: "flex",
  flexDirection: "column",
});

export const item = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const icon = style({
  position: "absolute",
  right: px(-14),
  top: 0,
  height: percent(100),
  display: "flex",
  alignItems: "center",
});

export const editor = style({
  margin: px(10),
  padding: px(10),
});

export const plus = style({
  marginTop: px(5),
});

export const editorCard = style({
  display: "flex",
  flexDirection: "column",
});

export const subButton = style({
  margin: px(5),
});

export const errorMess = style({
  color: "red",
  paddingLeft: px(10),
});
