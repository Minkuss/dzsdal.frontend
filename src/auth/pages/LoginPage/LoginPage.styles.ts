import { style } from "typestyle";
import { viewWidth, viewHeight, px } from "csx";

export const container = style({
  width: viewWidth(100),
  height: viewHeight(100),

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const card = style({
  width: px(350),
});
