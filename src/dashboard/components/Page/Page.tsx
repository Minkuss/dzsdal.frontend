import React, { useLayoutEffect } from "react";

import * as classes from "./Page.styles";

export const Page: React.FC = ({ children }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.page}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};
