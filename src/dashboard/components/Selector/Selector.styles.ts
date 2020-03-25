import { style } from "typestyle";
import { px } from "csx";

export const selector = style({
  width: px(200),
});

export const label = style({
  display: "block",
  textAlign: "center",
  marginBottom: px(20),
});

export const controls = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
