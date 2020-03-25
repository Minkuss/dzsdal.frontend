import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "effector-react";

import { ProfileBlock } from "../components";
import { $student } from "../effector/student";

export const StudentProfileBlock: React.FC = () => {
  const student = useStore($student);
  const history = useHistory();
  const quit = useCallback(() => {
    history.goBack();
  }, []);

  return <ProfileBlock onChange={quit} userName={student ? student.name : ""} />;
};
