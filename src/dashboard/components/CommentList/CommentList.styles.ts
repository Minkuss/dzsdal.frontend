import { style } from "typestyle";
import { px, percent } from "csx";

export const card = style({
  marginTop: px(5),
  display: "flex",
  justifyContent: "space-between",
});

export const commentText = style({
  fontSize: px(20),
});

export const roleText = style({
  fontWeight: "bold",
});
