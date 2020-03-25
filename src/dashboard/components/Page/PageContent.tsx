import React from "react";

import * as classes from "./Page.styles";

export const PageContent: React.FC = ({ children }) => (
  <main className={classes.content}>{children}</main>
);
