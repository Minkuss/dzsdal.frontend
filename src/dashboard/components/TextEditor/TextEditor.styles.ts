import { style } from "typestyle";
import { percent, px, url } from "csx";

export const card = style({
  display: "flex",
  flexDirection: "column",
  height: px(400),
});

export const editor = style({
  flex: 1,
  $nest: {
    ".DraftEditor-root": {
      height: percent(100),
    },
  },
  marginBottom: px(10),
});

export const buttons = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const buttonSub = style({
  marginTop: px(5),
});

export const studentText = style({
  marginTop: px(10),
});
