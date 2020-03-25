import { style } from "typestyle";
import { px, margin, padding } from "csx";

export const page = style({
  padding: padding(px(100), 0),
});

export const container = style({
  width: px(960),
  margin: margin(0, "auto"),
  display: "flex",
});

export const content = style({
  flex: 1,
});

export const sidebar = style({
  marginRight: px(20),
});
