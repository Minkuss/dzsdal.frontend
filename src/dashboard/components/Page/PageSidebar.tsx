import React from "react";

import * as classes from "./Page.styles";

export const PageSidebar: React.FC = ({ children }) => (
  <aside className={classes.sidebar}>{children}</aside>
);
