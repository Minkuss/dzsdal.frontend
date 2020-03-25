import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { populateMockData } from "../../services/init";

export const InitPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    populateMockData();
    history.push("/");
  }, [history]);

  return null;
};
